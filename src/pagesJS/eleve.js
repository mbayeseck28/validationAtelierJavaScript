// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// Importation des  services
import {
  addDoc,
  doc,
  collection,
  documentId,
  getDocs,
  deleteDoc,
  updateDoc,
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
let eleves = [];
// Realtime Update

onSnapshot(eleve, (snapshot) => {
  snapshot.docs.forEach((doc) => {
    eleves.push({ ...doc.data(), id: doc.id });
  });
  eleves.sort((a, b) => b.dateDajout - a.dateDajout);
  const list = document.querySelector('#list');
  list.innerHTML = '';
  eleves.forEach((utili) => {
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
            class="btn bouton modifier me-1 my-1 rounded-circle fs-6 text-white bg-dark" data-id=${utili.id}>
            <i class="fa-solid fa-pencil modifier" data-id=${utili.id}></i>
        </button>
    </td>
    `;
    list.appendChild(tr);
  });
  let loaderContainer = document.querySelector(".loader18");
    loaderContainer.style.display = "none";
});

// Rechercher un élève
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
    document.getElementById('erreurRefProff').innerHTML = '';
    const list = document.querySelector('#list');
    list.innerHTML = '';
    collectionFilter.forEach((utili) => {
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
  } else {
    document.getElementById('erreurRefProff').innerHTML =
      'Aucun resultat trouver';
  }
});

// Modification
const btnModifier = document.getElementById('modifier');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const type = document.getElementById('type');
const classe = document.getElementById('classeSelect');
const montantInsc = document.getElementById('montantInsc');
let id;
const container = document.getElementById('list');

btnModifier.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(container);

  const nouveauEleve = {
    nom: nom.value,
    prenom: prenom.value,
    type: type.value,
    classe: classe.value,
    montantInsc: parseInt(montantInsc.value),
  };

  console.log(nouveauEleve);
  container.innerHTML = '';
  const docRef = doc(eleve, id);
  const form = document.querySelector('.addToFirebase');
  console.log(container);
  updateDoc(docRef, nouveauEleve).then(() => {
    form.reset();
    console.log('Document modifié avec succès !');
    console.log(eleves);
  });
  container.innerHTML = '';
});
document.addEventListener('click', function (e) {
  //   e.preventDefault();
  if (e.target.classList.contains('modifier')) {
    id = e.target.getAttribute('data-id');
    const EleveModifier = eleves.find((u) => u.id === id);

    nom.value = EleveModifier.nom;
    prenom.value = EleveModifier.prenom;
    type.value = EleveModifier.type;
    classe.value = EleveModifier.classe;
    montantInsc.value = EleveModifier.montantInsc;
  } else if (e.target.classList.contains('supprimer')) {
    const id = e.target.getAttribute('data-id');
    const docRef = doc(eleve, id);

    deleteDoc(docRef).then(() => {
      console.log('Document supprimé avec succès !');
    });
  }
});

// Montant à inscrire
let selectElement = document.getElementById('classeSelect');
selectElement.addEventListener('change', function () {
  let selectedOption = selectElement.options[selectElement.selectedIndex];
  let selectedValue = selectedOption.value;
  console.log(selectedValue);

  document.getElementById('montantInsc').value = montant(selectedValue);
});

function montant(classe) {
  const montantMapping = {
    sizieme: 10000,
    cinquieme: 15000,
    quatrieme: 20000,
    troisieme: 25000,
  };

  return montantMapping[classe] || 0;
}
