// const emailAdmin = document.querySelector('.input1')
// const mdpAdmin = document.querySelector('.input2')
// const btnConnexion = document.querySelector('.btnConnexion')

// console.log(emailAdmin,mdpAdmin,btnConnexion);

// btnConnexion.addEventListener('click', ()=>{
    // const emailAdminValide = "admin@gmail.com"
    // const mdpAdminValide = "admin2023"
    // if (emailAdmin.value === emailAdminValide && mdpAdmin.value === mdpAdminValide){
    //     console.log("Conexxion reussit");
    //     window.location.href="../auth/inscription/inscription.html";
    // }else{
    //     alert('Email ou mot de passe incorrect')
    //     emailAdmin.value = ""
    //     mdpAdmin.value = ""
    //     console.log("echec connexion");
    // }
    
// })


import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  onSnapshot,
  fromTo,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY",
  authDomain: "validation-atelier-js.firebaseapp.com",
  databaseURL: "https://validation-atelier-js-default-rtdb.firebaseio.com",
  projectId: "validation-atelier-js",
  storageBucket: "validation-atelier-js.appspot.com",
  messagingSenderId: "466332062090",
  appId: "1:466332062090:web:ffbe45ef4a7371a7b5b873"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const handleLogin = async (event) => {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log('Utilisateur connecté');
    const emailAdminValide = "admin@gmail.com"
    const mdpAdminValide = "admin2023"

    if (email === emailAdminValide && password === mdpAdminValide){
        console.log("Conexxion reussit");
        window.location.href="../auth/inscription/inscription.html";
    }else{
        alert('Email ou mot de passe incorrect')
        emailAdmin.value = ""
        mdpAdmin.value = ""
        console.log("echec connexion");
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(`Erreur lors de la connexion :
identifiants incorrects`);
  }
};

const loginForm = document.getElementById('signup');
console.log('page connexion');
loginForm.addEventListener('submit', handleLogin);

/*******************************CHARGEMENT DE LA PAGE ***********************/
gsap.fromTo(
  '.loading-page',
  { opacity: 1 },
  {
    opacity: 0,
    display: 'none',
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  '.logo-name',
  {
    y: 50,
    opacity: 0,
  },
  {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 1,
  }
);
