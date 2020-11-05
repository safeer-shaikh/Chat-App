import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDYkFIwJ6yBX-DjMxiWc0P14RrOEVKBRnk",
    authDomain: "chat-application-69239.firebaseapp.com",
    databaseURL: "https://chat-application-69239.firebaseio.com",
    projectId: "chat-application-69239",
    storageBucket: "chat-application-69239.appspot.com",
    messagingSenderId: "702264088259",
    appId: "1:702264088259:web:3201d540b9d1c610817476",
    measurementId: "G-R6295MF0HT"
  };

var Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;