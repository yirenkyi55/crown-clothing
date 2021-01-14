import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBWX_JKy2NY-55Gzd5gPhSJdRoT1topRko',
  authDomain: 'crwn-db-4e914.firebaseapp.com',
  projectId: 'crwn-db-4e914',
  storageBucket: 'crwn-db-4e914.appspot.com',
  messagingSenderId: '894158633460',
  appId: '1:894158633460:web:8188d1aacee500f496e1a1',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
