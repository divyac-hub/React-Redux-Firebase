
import firebase from 'firebase'
import 'firebase/firestore' 
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAnt4-rbyLiO6f216gYBYxi6-TKUqDpcH4",
    authDomain: "empapp-3dd38.firebaseapp.com",
    databaseURL: "https://empapp-3dd38.firebaseio.com",
    projectId: "empapp-3dd38",
    storageBucket: "empapp-3dd38.appspot.com",
    messagingSenderId: "54644487364",
    appId: "1:54644487364:web:438a44d572bf54cec24591",
    measurementId: "G-1M9Y0KNBMV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;