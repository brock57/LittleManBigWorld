/* ===== LittleManBigWorld — localStorage Persistence ===== */

const STORAGE_KEY = 'lmbw_state';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const state = JSON.parse(raw);
    const likedSet = new Set(state.liked || []);

    DESTINATIONS.forEach(d => {
      if (likedSet.has(d.id)) {
        d.liked = true;
        d.likes += 1; // User contributed one like
      }
    });
  } catch (e) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function markLiked(destId) {
  const state = _readRaw();
  const liked = new Set(state.liked || []);
  liked.add(destId);
  state.liked = [...liked];
  state.seen = state.seen || [];
  if (!state.seen.includes(destId)) state.seen.push(destId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function markSkipped(destId) {
  const state = _readRaw();
  state.seen = state.seen || [];
  if (!state.seen.includes(destId)) state.seen.push(destId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getSeenIds() {
  return new Set(_readRaw().seen || []);
}

function getLikedIds() {
  return new Set(_readRaw().liked || []);
}

function clearState() {
  localStorage.removeItem(STORAGE_KEY);
}

function _readRaw() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}
