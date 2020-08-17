import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBZih14YoZutwQC-Tsa5tmK17r7p1n5--s",
    authDomain: "codetlc.firebaseapp.com",
    databaseURL: "https://codetlc.firebaseio.com",
    projectId: "codetlc",
    storageBucket: "codetlc.appspot.com",
    messagingSenderId: "386970263025",
    appId: "1:386970263025:web:96656243ae7349105b3850"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore}