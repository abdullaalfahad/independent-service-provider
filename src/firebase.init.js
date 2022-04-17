// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbSD3gDLjY4fd35UNHea0NHRdnHGNvoFk",
    authDomain: "pure-doctor.firebaseapp.com",
    projectId: "pure-doctor",
    storageBucket: "pure-doctor.appspot.com",
    messagingSenderId: "988424968154",
    appId: "1:988424968154:web:80f46f65f670582f7512e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;