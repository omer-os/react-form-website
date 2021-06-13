import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyA0AKZ3oGdIpdzMDvSmAUHE-HoyIVKM2Rg",
    authDomain: "notekeeperapp-3063d.firebaseapp.com",
    projectId: "notekeeperapp-3063d",
    storageBucket: "notekeeperapp-3063d.appspot.com",
    messagingSenderId: "597042828359",
    appId: "1:597042828359:web:92db55d22d8fe969934d62",
    measurementId: "G-5M331Y5GWY"
  };
  
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();