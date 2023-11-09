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
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY",
  authDomain: "validation-atelier-js.firebaseapp.com",
  databaseURL: "https://validation-atelier-js-default-rtdb.firebaseio.com",
  projectId: "validation-atelier-js",
  storageBucket: "validation-atelier-js.appspot.com",
  messagingSenderId: "466332062090",
  appId: "1:466332062090:web:ffbe45ef4a7371a7b5b873",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 

const handleRegistration = async (event) => {
    event.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const status = document.getElementById("status").value;
    const adresse = document.getElementById("adresse").value;
    const tel = document.getElementById("tel").value;
    const adresseecole = document.getElementById("adresseecole").value;
    const emailecole = document.getElementById("emailecole").value;
    const secteur = document.getElementById("secteur").value;
    const nomecole = document.getElementById("nomecole").value;
  
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
  
      const userData = {
        nom: nom,
        prenom: prenom,
        status: status,
        adresse: adresse,
        tel: tel,
        adresseecole: adresseecole,
        emailecole: emailecole,
        secteur: secteur,
        nomecole: nomecole,
        email: email,
        password: password,
      };
  
      const userRef = collection(db, "utilisateurs");
      await addDoc(userRef, userData);
  
      console.log(
        "Utilisateur enregistré avec succès dans la base de données Firestore"
      );
      // Vous pouvez rediriger l'utilisateur vers une autre page ici si nécessaire
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erreur lors de l'inscription :", errorCode, errorMessage);
    }
  };

console.log('page inscription')
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", handleRegistration);