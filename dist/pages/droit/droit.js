// Import the functions you need from the SDKs you need
import { initializeApp, onLog } from 'firebase/app';
// Importation des  services
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY',
  authDomain: 'validation-atelier-js.firebaseapp.com',
  projectId: 'validation-atelier-js',
  storageBucket: 'validation-atelier-js.appspot.com',
  messagingSenderId: '466332062090',
  appId: '1:466332062090:web:ffbe45ef4a7371a7b5b873',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



document.getElementById("bouton").addEventListener("click", (e) => {
    
    const one = document.querySelector(".one");
    one.classList.add("transition-left");

    
    setTimeout(() => {
        one.style.display = "none";
        one.classList.remove("transition-left");
    }, 500); 

   
    document.querySelector(".center2").style.display = "block";
});
