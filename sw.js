const CACHE_NAME = 'offline-toolbelt-v2';

const ASSETS = [
  '/',
  '/index.html',
  '/script.js',
  '/manifest.json',
  '/pdfSanitizer.bundle.js',
  '/sw.js',
  '/icon-192.png',
  '/icon-512.png',
  // External Libraries (Critical for offline support)
  'https://unpkg.com/@zip.js/zip.js@2.6.12/dist/zip.min.js',
  'https://unpkg.com/file-saver@2.0.5/dist/FileSaver.min.js',
  'https://unpkg.com/pdf-lib@1.17.1/dist/pdf-lib.min.js',
  'https://unpkg.com/diff@5.1.0/dist/diff.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
