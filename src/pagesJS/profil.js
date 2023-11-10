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

// if(userCredential.user){
//     console.log('yes');
// }

// import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Utilisateur connecté");
        var userEmail = user.email;
        const userRef = collection(db, "utilisateurs");
        onSnapshot(userRef, (snapshot) => {
          let userRef = [];
          snapshot.docs.forEach((doc) => {
            userRef.push({...doc.data(), id: doc.id })
          })
          userRef.forEach((utilisateur => {
            if (utilisateur.email == userEmail) {                
                const email = document.getElementById("userEmail");
                const password = document.getElementById("password");
                const nom = document.getElementById("userNom");
                const prenom = document.getElementById("userPrenom");
                const status = document.getElementById("userStatus");
                const adresse = document.getElementById("userAdress");
                const tel = document.getElementById("userTel");
                const adresseecole = document.getElementById("adresseEcole");
                const emailecole = document.getElementById("emailEcole");
                const secteur = document.getElementById("secteurEcole");
                const nomecole = document.getElementById("nomEcole");
                
                prenom.innerText = utilisateur.prenom
                nom.innerText = utilisateur.nom
                status.innerText = utilisateur.status
                adresse.innerText = utilisateur.adresse
                email.innerText = utilisateur.email
                tel.innerText = utilisateur.tel
                nomecole.innerText = utilisateur.nomecole
                adresseecole.innerText = utilisateur.adresseecole
                emailecole.innerText = utilisateur.emailecole
                secteur.innerText = utilisateur.secteur

  
            }
          }))
        });
    } else {
        console.log("Aucun utilisateur connecté");
    }
});


console.log("page profil");