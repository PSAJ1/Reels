// Import the functions you need from the SDKs you need
import firebase from'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQTNpvlj6as6sG4u-TaZXtGa926UgdOGg",
  authDomain: "reels-on-reels.firebaseapp.com",
  projectId: "reels-on-reels",
  storageBucket: "reels-on-reels.appspot.com",
  messagingSenderId: "204247410760",
  appId: "1:204247410760:web:15402625e8c0f34656907d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth= firebase.auth();
const store =firebase.firestore();
export const database={
  user:store.collection('user'),
  getTimeStamp:firebase.firestore.FieldValue.serverTimestamp
}
export const st=firebase.storage();