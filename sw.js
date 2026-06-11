self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('schedule-tool-v2').then(function(cache) {
      return cache.addAll(['./']);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(r) {
      return r || fetch(e.request);
    })
  );
});
