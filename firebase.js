import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBc4cPuCY_Z11gNzQZOQrPMCtD4jzYlMb0",
    authDomain: "clone-ab9ed.firebaseapp.com",
    projectId: "clone-ab9ed",
    storageBucket: "clone-ab9ed.appspot.com",
    messagingSenderId: "900379744280",
    appId: "1:900379744280:web:86fc54f5a9f01e98fb0b6d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };


