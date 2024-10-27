// sw.js
self.addEventListener('push', function(event) {
    const options = {
        body: event.data ? event.data.text() : 'Default message',
        icon: 'icon.png', // Path to your icon
        badge: 'badge.png' // Path to your badge
    };

    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow(' http://kokos-labs.github.io') // URL to open on click
    );
});
