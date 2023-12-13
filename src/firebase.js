// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const firebaseConfig = {
    apiKey: "AIzaSyCx5bKP1xej96W7ayf0CUGm0ognsCtZFI8",
    authDomain: "sharebite-4c56e.firebaseapp.com",
    databaseURL: "https://sharebite-4c56e-default-rtdb.firebaseio.com/",
    projectId: "sharebite-4c56e",
    storageBucket: "sharebite-4c56e.appspot.com",
    messagingSenderId: "4976226832",
    appId: "1:4976226832:web:729866a1c23c7b70ea1095",
    measurementId: "G-0T3641WZ74"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// -----------------
const database = getDatabase(firebaseApp);
const MySwal = withReactContent(Swal);

export {firebaseApp, auth, database, MySwal};