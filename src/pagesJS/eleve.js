// Import the functions you need from the SDKs you need
// Importation des  services
// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  collection,
  doc,
  updateDoc,
  deleteDoc,
  getFirestore,
  onSnapshot,
} from 'firebase/firestore';

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
  }
});


// Récupérer la collection
const eleve = collection(db, 'inscScolarite');
let eleves;
let id;
// Realtime Update
let prixInsc = [
  {
    sizieme: 25000,
    cinquieme: 25000,
    quatrieme: 30000,
    troisieme: 35000,
  },
];

onSnapshot(eleve, (snapshot) => {
  let eleve = [];
  snapshot.docs.forEach((doc) => {
    eleve.push({ ...doc.data(), id: doc.id });
  });
  eleve.sort((a, b) => b.dateDajout - a.dateDajout);
  const list = document.querySelector('#list');
  list.innerHTML = '';
  eleves = eleve;
  console.log(eleve);
  eleve.forEach((utili) => {
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <td class="mx-auto text-center m-0">${utili.nom}</td>
    <td class="mx-auto text-center m-0">${utili.prenom}</td>
    <td class="mx-auto text-center m-0 d-none d-lg-block">${utili.classe}</td>
    <td class="mx-auto text-center m-0 py-auto ">
        <button class="btn bouton me-1 my-1 supprimer text-white rounded-circle bg-dark " data-id=${utili.id}>
            <i class="fa-solid fa-trash-can supprimer" data-id=${utili.id}></i>
        </button>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" 
            class="btn bouton modifier me-1 my-1 rounded-circle text-white bg-dark" data-id=${utili.id}>
            <i class="fa-solid fa-pencil modifier" data-id=${utili.id}></i>
        </button>
    </td>
    `;
    list.appendChild(tr);
  });
  let loaderContainer = document.querySelector('.loader18');
  loaderContainer.style.display = 'none';
});

// Rechercher un élève
const rechercheInput = document.querySelector('#formEleve');
rechercheInput.addEventListener('input', (e) => {
  const elementSaisie = e.target.value;
  document.getElementById('list').innerHTML = '';
  console.log(eleve);
  const collectionFilter = eleves.filter(
    (element) =>
      element.nom.toLowerCase().includes(elementSaisie.toLowerCase()) ||
      element.prenom.toLowerCase().includes(elementSaisie.toLowerCase())
  );

  if (collectionFilter.length) {
    document.getElementById('erreurRefProff').innerHTML = '';
    const list = document.querySelector('#list');
    list.innerHTML = '';
    collectionFilter.forEach((utili) => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
      <td class="mx-auto text-center d-none d-lg-block m-0">${utili.nom}</td>
      <td class="mx-auto text-center m-0">${utili.prenom}</td>
      <td class="mx-auto text-center  d-none d-lg-block">${utili.classe}</td>
      <td class="mx-auto text-center m-0 py-auto ">
          <button class="btn bouton me-1 my-1 supprimer text-white rounded-circle bg-dark " data-id=${utili.id}>
              <i class="fa-solid fa-trash-can supprimer" data-id=${utili.id}></i>
          </button>
          <button data-bs-toggle="modal" data-bs-target="#exampleModal" 
              class="btn bouton modifier me-1 my-1 rounded-circle text-white bg-dark" data-id=${utili.id}>
              <i class="fa-solid fa-pencil modifier" data-id=${utili.id}></i>
          </button>
      </td>
      `;
      list.appendChild(tr);
    });
  } else {
    document.getElementById('erreurRefProff').innerHTML =
      'Aucun resultat trouver';
  }
});

// Modification
const btnModifier = document.getElementById('modifier');
const list = document.querySelector('#list');
list.innerHTML = '';

btnModifier.addEventListener('click', (e) => {
  e.preventDefault();

  const nouveauEleves = {
    nom: nom.value,
    prenom: prenom.value,
    classe: classe.value,
  };
  console.log(nouveauEleves);
  const docRef = doc(eleve, id);
  const form = document.querySelector('.addToFirebase');
  updateDoc(docRef, nouveauEleves).then(() => {
    form.reset();
    console.log('Document modifié avec succès !');
  });
});

document.addEventListener('click', function (e) {
  if (e.target.classList.contains('modifier')) {
    id = e.target.getAttribute('data-id');
    const elevesModifier = eleves.find((u) => u.id === id);
    console.log(elevesModifier);

    nom.value = elevesModifier.nom;
    prenom.value = elevesModifier.prenom;
    classe.value = elevesModifier.classe;
  } else if (e.target.classList.contains('supprimer')) {
    id = e.target.getAttribute('data-id');
    const docRef = doc(eleve, id);
    deleteDoc(docRef).then(() => {
      console.log('Document supprimé avec succès !');
    });
  }
});
