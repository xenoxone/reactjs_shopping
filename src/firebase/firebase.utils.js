import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBTDBaWvylAgyLxFv6IS7driLlWb0jbuzw",
    authDomain: "crwn-db-react-452ea.firebaseapp.com",
    projectId: "crwn-db-react-452ea",
    storageBucket: "crwn-db-react-452ea.appspot.com",
    messagingSenderId: "612915268123",
    appId: "1:612915268123:web:546b2a83078b66a2cc46be",
    measurementId: "G-ZWHBRGPF67"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;