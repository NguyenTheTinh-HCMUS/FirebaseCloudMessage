importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js');

// var firebaseConfig = {
//     apiKey: "AIzaSyCTfI0pAF_TKSFDG5d2b-AosxEdCPdpZUM",
//     authDomain: "tmdt20a10-admin.firebaseapp.com",
//     databaseURL: "https://tmdt20a10-admin.firebaseio.com",
//     projectId: "tmdt20a10-admin",
//     storageBucket: "tmdt20a10-admin.appspot.com",
//     messagingSenderId: "1022923126461",
//     appId: "1:1022923126461:web:444deff924b15c61f269d4",
//     measurementId: "G-QNKVHTMEHW"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// //   firebase.analytics();


//   const messaging = firebase.messaging();

// // Get registration token. Initially this makes a network call, once retrieved
// // subsequent calls to getToken will return from cache.
// messaging.getToken({ vapidKey: 'BCqbcj9zBQZ5gzUw2gAtoMqjfSGfZoN2i29pQVIDGGe3u_GtrqoOYClUr5erWRcZ8S9LrffZuxftuO4q9sdiLQI' }).then((currentToken) => {
//   if (currentToken) {
//     // Send the token to your server and update the UI if necessary
//     // ...
//     console.log(currentToken)
//   } else {
//     // Show permission request UI
//     console.log('No registration token available. Request permission to generate one.');
//     // ...
//   }
// }).catch((err) => {
//   console.log('An error occurred while retrieving token. ', err);
//   // ...
// });

// messaging.onMessage((payload) => {
//   console.log('Message received. ', payload);
//   // ...
// });


// messaging.onBackgroundMessage((payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };

//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });

var firebaseConfig = {
    apiKey: "AIzaSyCTfI0pAF_TKSFDG5d2b-AosxEdCPdpZUM",
    authDomain: "tmdt20a10-admin.firebaseapp.com",
    databaseURL: "https://tmdt20a10-admin.firebaseio.com",
    projectId: "tmdt20a10-admin",
    storageBucket: "tmdt20a10-admin.appspot.com",
    messagingSenderId: "1022923126461",
    appId: "1:1022923126461:web:444deff924b15c61f269d4",
    measurementId: "G-QNKVHTMEHW"
  };

firebase.initializeApp(firebaseConfig);
const messaging=firebase.messaging();

// messaging.setBackgroundMessageHandler(function (payload) {
//     console.log(payload);
//     const notification=JSON.parse(payload);
//     const notificationOption={
//         body:notification.body,
//         icon:notification.icon
//     };
//     return self.registration.showNotification(payload.notification.title,notificationOption);
// });
messaging.onBackgroundMessage((payload) => {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
  });
