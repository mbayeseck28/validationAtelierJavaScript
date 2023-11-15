console.log("proff");

import { initializeApp } from "firebase/app";

import {
  getProfesseurs,
  ajouterProfesseur,
  proff,
  modifierProfesseur,
  supprimerProfesseur,
  rechercheProff,
} from "./professeurs.js";

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