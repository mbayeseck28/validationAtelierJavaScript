import { initializeApp } from "firebase/app";

import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile ,
} from "firebase/auth";

import {
  collection,
  doc,
  updateDoc,
  deleteDoc,
  getFirestore,
  onSnapshot,
} from 'firebase/firestore';

import {
  getProfesseurs,
  ajouterProfesseur,
  proff,
  modifierProfesseur,
  supprimerProfesseur,
  rechercheProff,
} from "./professeurs.js";

const firebaseConfig = {
  apiKey: "AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY",
  authDomain: "validation-atelier-js.firebaseapp.com",
  databaseURL: "https://validation-atelier-js-default-rtdb.firebaseio.com",
  projectId: "validation-atelier-js",
  storageBucket: "validation-atelier-js.appspot.com",
  messagingSenderId: "466332062090",
  appId: "1:466332062090:web:ffbe45ef4a7371a7b5b873"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 


/******************  affiche photo profil Nav bar  **********************/ 
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
          // Créez une référence au document de l'utilisateur dans Firestore
          const userDocRef = doc(db, "utilisateurs", utilisateur.id);
          
          if (utilisateur.email == userEmail) {   
              const ProfilNav = document.querySelector('.ProfilNav');
              const profilVoir = document.querySelector('.profilVoir');
              const nomUser = document.querySelector('.nomUser');
              const statusUser = document.querySelector('.statusUser') 
              ProfilNav.src = utilisateur.url;
              profilVoir.src = utilisateur.url;
              nomUser.innerText = utilisateur.prenom + ' ' + utilisateur.nom;
              statusUser.innerText = utilisateur.status;
            
          }
        }))
      });


  } else {
      console.log("Aucun utilisateur connecté");
      window.location.href = '../../pages/auth/login/login.html';
  }
});


let id;

getProfesseurs(function (professeurs) {
  console.log(professeurs);
  const rechercheInput = document.getElementById("formProff");
  console.log(rechercheInput);
  rechercheProff(rechercheInput, professeurs);
});

const form = document.querySelector(".addToFirebase");
const btnAjouter = document.getElementById("ajouter");
// // console.log(btnAjouter);
const btnModifier = document.getElementById("modifier");
const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const matiere = document.getElementById("matiere");
const coordonnee = document.getElementById("coordonnee");
const classe = document.getElementById("classe");
const container = document.getElementById("container");



btnAjouter.addEventListener("click", (e) => {
  e.preventDefault();
  ajouterProfesseur(form);
});

btnModifier.addEventListener("click", (e) => {
  e.preventDefault();

  btnModifier.style.display = "none";
  btnAjouter.style.display = "block";

  const nouveauProfesseur = {
    nom: nom.value,
    prenom: prenom.value,
    matiere: matiere.value,
    coordonnee: coordonnee.value,
    classe: classe.value,
  };

  console.log(nouveauProfesseur);
  modifierProfesseur(id, nouveauProfesseur);

  container.innerHTML = "";
  console.log(container);
  //   gestionProfesseurs();
});

// supprimer et modifier un professeur
document.addEventListener("click", function (e) {
//   e.preventDefault();
  if (e.target.classList.contains("modifier")) {
    id = e.target.getAttribute("data-id");
    const professeurModifier = proff.find((u) => u.id === id);
    console.log(professeurModifier);

    nom.value = professeurModifier.nom;
    prenom.value = professeurModifier.prenom;
    matiere.value = professeurModifier.matiere;
    coordonnee.value = professeurModifier.coordonnee;
    classe.value = professeurModifier.classe;

    btnModifier.style.display = "block";
    btnAjouter.style.display = "none";
  } else if (e.target.classList.contains("supprimer")) {
    const id = e.target.getAttribute("data-id");
    supprimerProfesseur(id);
  }
});