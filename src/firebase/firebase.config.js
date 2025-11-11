// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd84GdETBR_qyEz_M9p8HAQ9xKHhUe7jY",
  authDomain: "plate-share-ab047.firebaseapp.com",
  projectId: "plate-share-ab047",
  storageBucket: "plate-share-ab047.firebasestorage.app",
  messagingSenderId: "473123315710",
  appId: "1:473123315710:web:1459b7973303e15769aaaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;