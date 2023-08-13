import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAgo0zohDmcfsAt3G7xwZN1p72STSJUKvw',
  authDomain: 'linkedin-clone-214fa.firebaseapp.com',
  projectId: 'linkedin-clone-214fa',
  storageBucket: 'linkedin-clone-214fa.appspot.com',
  messagingSenderId: '763125889439',
  appId: '1:763125889439:web:858c1d2f4ada9c100065aa',
  measurementId: 'G-6WBH49738C',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
