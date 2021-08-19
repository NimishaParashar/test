// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.4.3/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyCtfAms4B6vHtMqxlN6m3PGYEMFPDfPmUE",
//     authDomain: "motion-d4e51.firebaseapp.com",
//     projectId: "motion-d4e51",
//     storageBucket: "motion-d4e51.appspot.com",
//     messagingSenderId: "952067818762",
//     appId: "1:952067818762:web:af332a108d71cd71f366f3",
//     measurementId: "G-4C4KS5D4S0"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

importScripts("https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtfAms4B6vHtMqxlN6m3PGYEMFPDfPmUE",
  authDomain: "motion-d4e51.firebaseapp.com",
  projectId: "motion-d4e51",
  storageBucket: "motion-d4e51.appspot.com",
  messagingSenderId: "952067818762",
  appId: "1:952067818762:web:af332a108d71cd71f366f3",
  measurementId: "G-4C4KS5D4S0",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler((payload) => {
  // console.log(payload);
  const title = payload.data.title;
  const options = {
    body: payload.data.score,
  };
  return self.registration.showNotification(title, options);
});
