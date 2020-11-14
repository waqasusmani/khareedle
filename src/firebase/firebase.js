import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBoswWx4cxTMtbjjFfFsB9UEi7LUwgiQs8",
    authDomain: "khareedle-saylani-assignment.firebaseapp.com",
    databaseURL: "https://khareedle-saylani-assignment.firebaseio.com",
    projectId: "khareedle-saylani-assignment",
    storageBucket: "khareedle-saylani-assignment.appspot.com",
    messagingSenderId: "802702152509",
    appId: "1:802702152509:web:08c919ff280912bad46b54",
    measurementId: "G-T6PP3Y7RW9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  };