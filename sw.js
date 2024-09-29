self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        'https://your-tilda-site.com',
        'https://your-tilda-site.com/styles.css', // Пример ссылки на CSS
        'https://your-tilda-site.com/script.js', // Пример ссылки на JS
        'https://your-github-repo-url/icon.png', // Ссылка на иконку
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
