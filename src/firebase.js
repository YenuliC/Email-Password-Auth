// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmqWjlhuR2JUcWoavYOVlTpUhgrQeDMwA",
  authDomain: "react-auth-tutorial-32064.firebaseapp.com",
  projectId: "react-auth-tutorial-32064",
  storageBucket: "react-auth-tutorial-32064.appspot.com",
  messagingSenderId: "390380637996",
  appId: "1:390380637996:web:8843d46e72ab94aa13e689"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
// export { getAuth };
