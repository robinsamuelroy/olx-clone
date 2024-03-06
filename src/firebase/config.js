import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'
import "firebase/compat/storage";




const firebaseConfig = {
  apiKey: "AIzaSyCYA8PI8_A3C6GdC8GsZ52HnVzF6Bt5wyQ",
  authDomain: "test-c74d3.firebaseapp.com",
  projectId: "test-c74d3",
  storageBucket: "test-c74d3.appspot.com",
  messagingSenderId: "637420815317",
  appId: "1:637420815317:web:edc2b0d36043db9972f35c",
  measurementId: "G-1GCMRR87L9"
};

export default firebase.initializeApp(firebaseConfig)