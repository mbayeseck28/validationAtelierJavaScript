
import { initializeApp } from "firebase/app";

import {
  collection,
  doc,
  onSnapshot,
  getFirestore,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from 'firebase/firestore';

import {
  getAuth,
  signOut,
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


/************     DECONNEXION       ***********/ 
const btnDeconnexion = document.getElementById('btnDeconnexion');
const signOutButtonPressed = async (e) => {
  e.preventDefault();
  try {
    await signOut(auth);
    console.log("Deconnecté");
    window.location.href = '../../pages/auth/login/login.html';
  } catch (error) {
    console.log(error.code);
  }
}
btnDeconnexion.addEventListener("click", signOutButtonPressed);


let proff;

export function getProfesseurs(personnel) {
  const db = getFirestore();
  const collectionProff = collection(db, 'professeurs');

  onSnapshot(collectionProff, (snapshot) => {
    let professeurs = [];
    snapshot.docs.forEach((doc) => {
      professeurs.push({ ...doc.data(), id: doc.id });
    });
    professeurs.sort((a, b) => b.dateDajout - a.dateDajout);
    proff = professeurs;
    personnel(professeurs);
    gestionProfesseurs(professeurs);
  });
}

export function gestionProfesseurs(utilisateurs) {
  const container = document.getElementById('container');
  container.innerHTML = '';

  utilisateurs.forEach((utilisateur) => {
    let ligne = document.createElement('tr');
    ligne.innerHTML = `
                <td class="mx-auto text-center m-0  d-none d-lg-block m-0">${utilisateur.nom}</td>
                <td class="mx-auto text-center m-0">${utilisateur.prenom}</td>
                <td class="mx-auto text-center m-0 d-none d-lg-block">${utilisateur.matiere}</td>
                <td class="mx-auto text-center m-0">${utilisateur.coordonnee}</td>
                <td class="mx-auto text-center m-0 d-none d-lg-block">${utilisateur.classe}</td>
                <td class="mx-auto text-center m-0 py-auto ">
                    <button class="btn bouton me-1 my-1 supprimer text-white rounded-circle" data-id=${utilisateur.id}>
                        <i class="fa-solid fa-trash-can supprimer" data-id=${utilisateur.id}></i>
                    </button>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" 
                        class="btn bouton modifier me-1 my-1 rounded-circle text-white" data-id=${utilisateur.id}>
                        <i class="fa-solid fa-pencil modifier" data-id=${utilisateur.id}></i>
                    </button>
                </td>
            `;

    container.appendChild(ligne);
    let loaderContainer = document.querySelector(".loader6");
    loaderContainer.style.display = "none";
  });
}

export function ajouterProfesseur(form) {
  const db = getFirestore();
  const professeurs = collection(db, 'professeurs');
  const erreurProf = document.getElementById('erreurProf');
  if (
    form.nom.value &&
    form.prenom.value &&
    form.matiere.value &&
    form.classe.value &&
    form.coordonnee.value
  ) {
    addDoc(professeurs, {
      nom: form.nom.value,
      prenom: form.prenom.value,
      matiere: form.matiere.value,
      classe: form.classe.value,
      coordonnee: form.coordonnee.value,
      dateDajout: serverTimestamp(),
    }).then(() => {
      form.reset();
      erreurProf.style.display = 'none';
    });
  } else {
    erreurProf.style.display = 'block';
    erreurProf.innerHTML = 'Merci de remplir les champs ';
    alert('Merci de remplir le champs');
    console.log('Merci de remplir le champs');
  }
}

export function rechercheProff(rechercheInput, emplo) {
  rechercheInput.addEventListener('input', (e) => {
    const elementSaisie = e.target.value;
    document.getElementById('container').innerHTML = '';
    const collectionFilter = emplo.filter(
      (element) =>
        element.nom.toLowerCase().includes(elementSaisie.toLowerCase()) ||
        element.prenom.toLowerCase().includes(elementSaisie.toLowerCase())
    );

    if (collectionFilter.length) {
      document.getElementById('erreurRefProff').innerHTML = '';
      gestionProfesseurs(collectionFilter);
    } else {
      document.getElementById('erreurRefProff').innerHTML =
        'Aucun resultat trouver';
    }
  });
}

export function modifierProfesseur(id, nouveauProfesseur) {
  const db = getFirestore();
  const professeurs = collection(db, 'professeurs');
  const docRef = doc(professeurs, id);
  const form = document.querySelector('.addToFirebase');
  updateDoc(docRef, nouveauProfesseur).then(() => {
    form.reset();
    console.log('Document modifié avec succès !');
  });
}

export function supprimerProfesseur(id) {
  const db = getFirestore();
  const professeurs = collection(db, 'professeurs');
  const docRef = doc(professeurs, id);

  deleteDoc(docRef).then(() => {
    console.log('Document supprimé avec succès !');
  });
}

export { proff };
