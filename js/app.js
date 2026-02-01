/* ===== LittleManBigWorld — App Logic ===== */

// --- Service Worker ---
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

// --- State ---
let deck = [];
let currentIndex = 0;
let likedDestinations = [];
let isDragging = false;
let startX = 0;
let currentX = 0;

// --- Shuffle (Fisher-Yates) ---
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- Init ---
function init() {
  loadState();
  const seen = getSeenIds();
  deck = shuffle(DESTINATIONS);

  // Separate unseen and seen-but-liked for end-of-deck summary
  const unseen = deck.filter(d => !seen.has(d.id));
  likedDestinations = deck.filter(d => d.liked);

  if (unseen.length === 0) {
    // All cards already swiped — go straight to end-of-deck
    deck = [];
    currentIndex = 0;
    renderCards();
    return;
  }

  deck = unseen;
  currentIndex = 0;
  renderCards();
}

// --- Render up to 3 stacked cards ---
function renderCards() {
  const stack = document.getElementById('cardStack');
  if (!stack) return;

  // End of deck?
  if (currentIndex >= deck.length) {
    showEndOfDeck();
    return;
  }

  stack.innerHTML = '';
  const count = Math.min(3, deck.length - currentIndex);

  for (let i = count - 1; i >= 0; i--) {
    const dest = deck[currentIndex + i];
    const card = document.createElement('div');
    card.className = `card-item stack-${i}`;
    card.dataset.id = dest.id;
    card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}" loading="${i === 0 ? 'eager' : 'lazy'}">
      <div class="card-overlay"></div>
      <div class="card-info">
        <h2>${dest.name}</h2>
        <p>${dest.tagline}</p>
      </div>
      <button class="card-info-btn" onclick="openDetail('${dest.id}')" title="More info">&#8505;&#65039;</button>
      <span class="swipe-label like">LIKE</span>
      <span class="swipe-label nope">NOPE</span>
    `;

    if (i === 0) {
      card.addEventListener('pointerdown', onPointerDown);
    }

    stack.appendChild(card);
  }
}

// --- Swipe Gesture Handling ---
function onPointerDown(e) {
  if (e.target.closest('.card-info-btn')) return;
  isDragging = true;
  startX = e.clientX;
  currentX = 0;
  const card = e.currentTarget;
  card.style.transition = 'none';
  card.setPointerCapture(e.pointerId);
  card.addEventListener('pointermove', onPointerMove);
  card.addEventListener('pointerup', onPointerUp);
}

function onPointerMove(e) {
  if (!isDragging) return;
  currentX = e.clientX - startX;
  const card = e.currentTarget;
  const rotate = currentX * 0.08;
  card.style.transform = `translateX(${currentX}px) rotate(${rotate}deg)`;

  // Show swipe labels
  const likeLabel = card.querySelector('.swipe-label.like');
  const nopeLabel = card.querySelector('.swipe-label.nope');
  const threshold = 50;

  if (currentX > threshold) {
    likeLabel.style.opacity = Math.min((currentX - threshold) / 80, 1);
    nopeLabel.style.opacity = 0;
  } else if (currentX < -threshold) {
    nopeLabel.style.opacity = Math.min((-currentX - threshold) / 80, 1);
    likeLabel.style.opacity = 0;
  } else {
    likeLabel.style.opacity = 0;
    nopeLabel.style.opacity = 0;
  }
}

function onPointerUp(e) {
  if (!isDragging) return;
  isDragging = false;
  const card = e.currentTarget;
  card.removeEventListener('pointermove', onPointerMove);
  card.removeEventListener('pointerup', onPointerUp);

  const swipeThreshold = 100;

  if (currentX > swipeThreshold) {
    animateCardOff(card, 'right');
    processSwipe('like');
  } else if (currentX < -swipeThreshold) {
    animateCardOff(card, 'left');
    processSwipe('skip');
  } else {
    // Spring back
    card.style.transition = 'transform 0.3s ease';
    card.style.transform = '';
    card.querySelector('.swipe-label.like').style.opacity = 0;
    card.querySelector('.swipe-label.nope').style.opacity = 0;
  }
}

function animateCardOff(card, direction) {
  const flyX = direction === 'right' ? window.innerWidth * 1.5 : -window.innerWidth * 1.5;
  const rotate = direction === 'right' ? 30 : -30;
  card.style.transition = 'transform 0.4s ease';
  card.style.transform = `translateX(${flyX}px) rotate(${rotate}deg)`;

  if (direction === 'right') {
    showHeartBurst();
  }
}

function processSwipe(action) {
  const dest = deck[currentIndex];
  if (action === 'like') {
    dest.liked = true;
    dest.likes++;
    likedDestinations.push(dest);
    markLiked(dest.id);
  } else {
    markSkipped(dest.id);
  }
  currentIndex++;
  setTimeout(renderCards, 350);
}

// --- Button handlers ---
document.getElementById('btnSkip')?.addEventListener('click', () => {
  const topCard = document.querySelector('.card-item.stack-0');
  if (!topCard) return;
  animateCardOff(topCard, 'left');
  processSwipe('skip');
});

document.getElementById('btnHeart')?.addEventListener('click', () => {
  const topCard = document.querySelector('.card-item.stack-0');
  if (!topCard) return;
  animateCardOff(topCard, 'right');
  processSwipe('like');
});

// --- Double-tap to like ---
let lastTap = 0;
document.getElementById('cardStack')?.addEventListener('touchend', e => {
  if (e.target.closest('.card-info-btn')) return;
  const now = Date.now();
  if (now - lastTap < 300) {
    const topCard = document.querySelector('.card-item.stack-0');
    if (topCard) {
      animateCardOff(topCard, 'right');
      processSwipe('like');
    }
  }
  lastTap = now;
});

// --- Heart burst animation ---
function showHeartBurst() {
  const burst = document.createElement('div');
  burst.className = 'heart-burst';
  burst.textContent = '\u2764\uFE0F';
  document.getElementById('cardStack').appendChild(burst);
  setTimeout(() => burst.remove(), 600);
}

// --- End of deck ---
function showEndOfDeck() {
  const app = document.getElementById('app');
  const buttons = document.getElementById('actionButtons');
  if (buttons) buttons.style.display = 'none';

  const stack = document.getElementById('cardStack');
  stack.className = 'end-of-deck';

  let html = `
    <h2>You've explored the world! &#127758;</h2>
    <p>You liked ${likedDestinations.length} destination${likedDestinations.length !== 1 ? 's' : ''}</p>
  `;

  if (likedDestinations.length > 0) {
    html += '<div class="liked-grid">';
    likedDestinations.forEach(dest => {
      html += `
        <div class="liked-card" onclick="openDetail('${dest.id}')">
          <img src="${dest.image}" alt="${dest.name}" loading="lazy">
          <div class="liked-card-name">${dest.name}</div>
        </div>
      `;
    });
    html += '</div>';
  } else {
    html += '<p>Reshuffle and try again?</p>';
    html += '<button class="btn btn-outline-light mt-3" onclick="location.reload()">Reshuffle</button>';
  }

  html += '<button class="btn btn-outline-light mt-3 ms-2" onclick="clearState(); location.reload()">Start Over</button>';
  stack.innerHTML = html;
}

// --- Flight search link builder (Kayak, origin: ORD) ---
function buildKayakUrl(kayakCode) {
  // Generate a trip 2 weeks from now, returning 1 week later
  const depart = new Date();
  depart.setDate(depart.getDate() + 14);
  const ret = new Date(depart);
  ret.setDate(ret.getDate() + 7);
  const fmt = d => d.toISOString().slice(0, 10);
  return `https://www.kayak.com/flights/ORD-${kayakCode}/${fmt(depart)}/${fmt(ret)}`;
}

// --- Detail bottom sheet ---
function openDetail(id) {
  const dest = DESTINATIONS.find(d => d.id === id);
  if (!dest) return;

  document.getElementById('detailTitle').textContent = dest.name;

  const d = dest.detail || {};
  let body = `
    <img src="${dest.image}" alt="${dest.name}" class="detail-hero">
    <p class="mb-3" style="color:#aaa">${dest.tagline}</p>
    <p><span style="color:#ff2d55">&#9829;</span> ${dest.likes.toLocaleString()} likes</p>
  `;

  // Food
  body += '<div class="detail-section"><h6>Food Recommendations</h6>';
  body += d.food && d.food.length > 0
    ? d.food.map(f => `<span class="badge bg-secondary me-1 mb-1">${f}</span>`).join('')
    : '<span style="color:#555">Info coming soon</span>';
  body += '</div>';

  // Best time
  body += '<div class="detail-section"><h6>Best Time to Visit</h6>';
  body += d.bestTime ? `<p class="mb-0">${d.bestTime}</p>` : '<span style="color:#555">Info coming soon</span>';
  body += '</div>';

  // Avg temp
  body += '<div class="detail-section"><h6>Average Temperature</h6>';
  body += d.avgTemp ? `<p class="mb-0">${d.avgTemp}</p>` : '<span style="color:#555">Info coming soon</span>';
  body += '</div>';

  // Essentials
  body += '<div class="detail-section"><h6>Travel Essentials</h6>';
  body += d.essentials && d.essentials.length > 0
    ? d.essentials.map(e => `<span class="badge bg-secondary me-1 mb-1">${e}</span>`).join('')
    : '<span style="color:#555">Info coming soon</span>';
  body += '</div>';

  // Action buttons
  if (d.kayakCode) {
    const kayakUrl = buildKayakUrl(d.kayakCode);
    body += `
      <div class="d-flex gap-2 mt-3 mb-4">
        <a href="${kayakUrl}" target="_blank" rel="noopener" class="btn btn-outline-light flex-fill">
          &#9992; Book on Kayak
        </a>
        <button class="btn btn-outline-light flex-fill" onclick="shareDest('${dest.id}')">
          &#128279; Share
        </button>
      </div>
    `;
  } else {
    body += `
      <div class="d-flex gap-2 mt-3 mb-4">
        <button class="btn btn-outline-light flex-fill" onclick="showStubToast('Flight booking coming soon!')">
          &#9992; Book a Flight
        </button>
        <button class="btn btn-outline-light flex-fill" onclick="shareDest('${dest.id}')">
          &#128279; Share
        </button>
      </div>
    `;
  }

  // Bitcoin button for El Salvador
  if (d.bitcoin) {
    body += `
      <button class="btn btn-warning w-100 mb-3" onclick="showStubToast('Bitcoin purchasing coming soon!')">
        &#8383; Buy Bitcoin
      </button>
    `;
  }

  // Comments stub
  body += `
    <div class="detail-section">
      <h6>Comments</h6>
      <p style="color:#555" class="mb-0">Comments coming soon!</p>
    </div>
  `;

  document.getElementById('detailBody').innerHTML = body;
  new bootstrap.Offcanvas(document.getElementById('detailSheet')).show();
}

// --- Share ---
function shareDest(id) {
  const dest = DESTINATIONS.find(d => d.id === id);
  if (!dest) return;
  if (navigator.share) {
    navigator.share({
      title: `${dest.name} - LittleManBigWorld`,
      text: dest.tagline,
      url: window.location.href
    });
  } else {
    showStubToast('Link copied! (Share API not available on this device)');
  }
}

// --- Toast helper ---
function showStubToast(msg) {
  document.getElementById('stubToastMsg').textContent = msg;
  const toast = new bootstrap.Toast(document.getElementById('stubToast'));
  toast.show();
}

// --- Start ---
init();
