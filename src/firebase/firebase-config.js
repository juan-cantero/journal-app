import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAgeHHOnN_ehYngOvOMM0eKa5Yk81JD2-w',
  authDomain: 'journal-app-b4267.firebaseapp.com',
  databaseURL: 'https://journal-app-b4267.firebaseio.com',
  projectId: 'journal-app-b4267',
  storageBucket: 'journal-app-b4267.appspot.com',
  messagingSenderId: '193128872502',
  appId: '1:193128872502:web:18420b7897c26095b83697',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
