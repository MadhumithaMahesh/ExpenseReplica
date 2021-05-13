import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC5YGVxwLqXIJ6znj0dg7JiWT9vUAWq1tU",
    authDomain: "expensereplica.firebaseapp.com",
    databaseURL: "https://expensereplica-default-rtdb.firebaseio.com",
    projectId: "expensereplica",
    storageBucket: "expensereplica.appspot.com",
    messagingSenderId: "578995616279",
    appId: "1:578995616279:web:87af2eb6ea7d5c88e7ba52",
    measurementId: "G-Y0290D930W"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database()


  export{firebase,database as default} 