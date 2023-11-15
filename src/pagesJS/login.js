import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  onSnapshot,
  fromTo
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQ3SrfEimEPtzCFyxR0vWBK8BJ_K4Ma48",
  authDomain: "mixte-feewi.firebaseapp.com",
  projectId: "mixte-feewi",
  storageBucket: "mixte-feewi.appspot.com",
  messagingSenderId: "1083213454329",
  appId: "1:1083213454329:web:df3deafe22a82ad34e3b28"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 
const handleLogin = async (event) => {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Utilisateur connecté");
      window.location.href = "../../accueil/acceuil.html";
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Erreur lors de la connexion :
identifiants incorrects`);
    }
  };
  
  const loginForm = document.getElementById("signup");
  console.log("page connexion");
  loginForm.addEventListener("submit", handleLogin);

/*******************************CHARGEMENT DE LA PAGE ***********************/ 
gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
      y: 50,
      opacity: 0,
  },
  {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 1.5,
  }
);
