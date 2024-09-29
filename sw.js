self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        'https://urgmer.ru',
        'https://urgmer.ru/styles.css', // Замените на правильный URL, если нужно
        'https://urgmer.ru/sw.js', // Замените на правильный URL, если нужно
        'https://raw.githubusercontent.com/Daniil50976/Meropriatia/main/icon.png',
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

window.OneSignal = window.OneSignal || [];
OneSignal.push(function() {
    OneSignal.init({
        appId: "ВАШ_APP_ID", // Замените на ваш App ID из OneSignal
        notifyButton: {
            enable: true, // Включите кнопку уведомлений
        },
        welcomeNotification: {
            title: "Спасибо за подписку!",
            message: "Вы будете получать уведомления о новых мероприятиях."
        }
    });
});
