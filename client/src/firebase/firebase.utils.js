import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDNV4r4PFIpLXwSxhKxX_r2JxpEv546baA",
  authDomain: "crwn-db-f6c32.firebaseapp.com",
  databaseURL: "https://crwn-db-f6c32.firebaseio.com",
  projectId: "crwn-db-f6c32",
  storageBucket: "crwn-db-f6c32.appspot.com",
  messagingSenderId: "164066280420",
  appId: "1:164066280420:web:a97f11af38a42c7d65bdf1",
  measurementId: "G-8PZRYY8BLY"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
