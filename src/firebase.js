// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDZPn2hNY9prxbF_qrXFNql7105fDs26tI",
  authDomain: "whatsapp-clone-93f08.firebaseapp.com",
  projectId: "whatsapp-clone-93f08",
  storageBucket: "whatsapp-clone-93f08.appspot.com",
  messagingSenderId: "427328919068",
  appId: "1:427328919068:web:2ace2e6d8e18cf922931d9",
  measurementId: "G-454X1H5SN5"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;