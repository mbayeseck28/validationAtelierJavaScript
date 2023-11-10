// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// Importation des  services
import {
  addDoc,
  collection,
  documentId,
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

// Récupérer la collection
const eleve = collection(db, 'inscScolarite');
let eleves;
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
  eleves = eleve;
  const list = document.querySelector('#list');
  list.innerHTML = '';

  eleve.forEach((utili) => {
    const list = document.querySelector('#list');
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <td class="mx-auto text-center d-none d-lg-block m-0">${utili.nom}</td>
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
});
console.log(eleves);
const rechercheInput = document.querySelector('#formEleve');
rechercheInput.addEventListener('input', (e) => {
  const elementSaisie = e.target.value;
  document.getElementById('list').innerHTML = '';
  const collectionFilter = eleves.filter(
    (element) =>
      element.nom.toLowerCase().includes(elementSaisie.toLowerCase()) ||
      element.prenom.toLowerCase().includes(elementSaisie.toLowerCase())
  );

  if (collectionFilter.length) {
    // document.getElementById('erreurRefProff').innerHTML = '';
    console.log(collectionFilter);
  } else {
    // document.getElementById('erreurRefProff').innerHTML =
    //   'Aucun resultat trouver';
  }
});
