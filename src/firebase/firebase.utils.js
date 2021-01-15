import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA4IM1NWLU9mgQ8dSSSu9uHRTSWHvy4Ykk',
  authDomain: 'crown-db-b3078.firebaseapp.com',
  projectId: 'crown-db-b3078',
  storageBucket: 'crown-db-b3078.appspot.com',
  messagingSenderId: '477963791317',
  appId: '1:477963791317:web:bd349b032cb2a5220d6b5c',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// When a user sign in with google, we save the data into firestore database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // We query inside firestore to see if the user already exists
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
