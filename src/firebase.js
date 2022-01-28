import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.APP_KEY,
    authDomain: "netflix-69c0c.firebaseapp.com",
    projectId: "netflix-69c0c",
    storageBucket: "netflix-69c0c.appspot.com",
    messagingSenderId: "169141367183",
    appId: "1:169141367183:web:8bae1e449ff2033b1b9bfa",
    measurementId: "G-7Q251T7VG2"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;