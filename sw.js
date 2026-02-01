const CACHE_NAME = 'lmbw-v5';
const SHELL = [
  './',
  './index.html',
  './trending.html',
  './search.html',
  './profile.html',
  './css/bootstrap.min.css',
  './css/app.css',
  './js/bootstrap.bundle.min.js',
  './js/app.js',
  './js/destinations.js',
  './js/storage.js',
  './manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
