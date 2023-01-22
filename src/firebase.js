// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkRpukuCGa_VuIN8AmLh_kV5sRli0R7mg",
  authDomain: "react-authentication-f5e09.firebaseapp.com",
  projectId: "react-authentication-f5e09",
  storageBucket: "react-authentication-f5e09.appspot.com",
  messagingSenderId: "336039129961",
  appId: "1:336039129961:web:4f0838c3e6d362c83843f8",
  measurementId: "G-QW7W6HW6TT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app