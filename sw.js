importScripts('https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.20.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDjs8Qva2pjuJoG0CcQ-O9PLlGhjI1dcJY",
  authDomain: "koko-labs.firebaseapp.com",
  projectId: "koko-labs",
  storageBucket: "koko-labs.appspot.com",
  messagingSenderId: "117512760360",
  appId: "1:117512760360:web:95bfefb0485872dcd6d91d",
  measurementId: "G-26P6FRSFEV"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Background message received: ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
