import { initializeApp } from "firebase/app";

import {
  doc,
  updateDoc,
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import {
  nombreProfesseur,
  nombreEmployer,
  nombreAssocie,
} from "./acceuilpersonnel.js";

import {
  getProfesseurs,
  ajouterProfesseur,
  proff,
  modifierProfesseur,
  supprimerProfesseur,
  rechercheProff,
} from "./professeurs.js";

import { 
  gestionAssocie,
  asso,
  ajouterAssocier,
  rechercheAssocie 
} from "./associe.js";

import {
  getEmployer,
  ajouterEmployer,
  emplo,
  supprimerEmployer,
  modifierEmployer,
  recherche,
} from "./employer.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile ,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBQ3SrfEimEPtzCFyxR0vWBK8BJ_K4Ma48",
  authDomain: "mixte-feewi.firebaseapp.com",
  projectId: "mixte-feewi",
  storageBucket: "mixte-feewi.appspot.com",
  messagingSenderId: "1083213454329",
  appId: "1:1083213454329:web:df3deafe22a82ad34e3b28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
const auth = getAuth(app);

/******* PARTIE ACCUEIL **********/
nombreProfesseur();
nombreEmployer();
nombreAssocie();


/******* PARTIE Porfil nav bar  **********/

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
  }
});

/*******PARTIE PROFESSEURS ET EMPLOYER******/
let id;

getProfesseurs(function (professeurs) {
  // console.log(professeurs);
  const rechercheInput = document.getElementById("formProff");
  // console.log(rechercheInput);
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

/* PARTIE ASSOCIER */
const ajoutAsso = document.getElementById("ajoutAsso");
const formAssocie = document.getElementById("formAssocie");

gestionAssocie();
ajoutAsso.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(formAssocie);
  ajouterAssocier(formAssocie);
});


/*******************PARTIE EMPLOYER***************************** */
const formEmployer = document.querySelector(".formEmployer");
const ajouterEmpl = document.getElementById("ajouterEmployer");
const btnModifierEmplo = document.getElementById("modifierEmployer");
const nomEmplo = document.getElementById("nomEmplo");
const prenomEmplo = document.getElementById("prenomEmplo");
const coordonneeEmplo = document.getElementById("coordonneeEmplo");
const adresse = document.getElementById("adresse");
const domaine = document.getElementById("domaine");

getEmployer(function (employer) {
  // console.log(employer);
  const rechercheInput = document.getElementById("rechercheEmployer");
  // console.log(rechercheInput);
  recherche(rechercheInput, employer);
});

ajouterEmpl.addEventListener("click", (e) => {
    e.preventDefault();
    ajouterEmployer(formEmployer);
  });

btnModifierEmplo.addEventListener("click", (e) => {
  e.preventDefault();

  btnModifierEmplo.style.display = "none";
  ajouterEmpl.style.display = "block";

  const nouveauEmployer = {
    nom: nomEmplo.value,
    prenom: prenomEmplo.value,
    domaine: domaine.value,
    coordonnee: coordonneeEmplo.value,
    adresse: adresse.value,
  };

  modifierEmployer(id, nouveauEmployer);
});

// supprimer et modifier un employe
document.addEventListener("click", function (e) {
//   e.preventDefault();
  if (e.target.classList.contains("modifier")) {
    id = e.target.getAttribute("data-id");
    const employerModifier = emplo.find((u) => u.id === id);
    console.log(emplo);
    console.log(employerModifier);

    nomEmplo.value = employerModifier.nom;
    prenomEmplo.value = employerModifier.prenom;
    domaine.value = employerModifier.domaine;
    coordonneeEmplo.value = employerModifier.coordonnee;
    adresse.value = employerModifier.adresse;

    btnModifierEmplo.style.display = "block";
    ajouterEmpl.style.display = "none";
  } else if (e.target.classList.contains("supprimer")) {
    const id = e.target.getAttribute("data-id");

    supprimerEmployer(id);
  }
});
