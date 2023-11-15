// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// Importation des  services
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as refDatabase, set, get } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile ,
} from "firebase/auth";

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
const auth = getAuth(app); 
const db = getFirestore(app);


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
const certiesRef2 = collection(db, 'mensualites');
const effectif6 = document.getElementById('effectif6');
const effectif5 = document.getElementById('effectif5');
const effectif4 = document.getElementById('effectif4');
const effectif3 = document.getElementById('effectif3');






onSnapshot(eleve, (snapshot) => {
  let eleves = [];
  snapshot.docs.forEach((doc) => {
    eleves.push({ ...doc.data(), id: doc.id });
  });
  eleves.sort((a, b) => b.dateDajout - a.dateDajout);
  let effectifClass6 = [];
  let effectifClass5 = [];
  let effectifClass4 = [];
  let effectifClass3 = [];


  eleves.forEach((utili) => {
    if (utili.classe === '6ème') {
      effectifClass6.push(utili.classe);
      effectif6.innerHTML = effectifClass6.length + '  élèves';
    }
    if (utili.classe === '5ème') {
      effectifClass5.push(utili.classe);
      effectif5.innerHTML = effectifClass5.length + '  élèves';
    }
    if (utili.classe === '4ème') {
      effectifClass4.push(utili.classe);
      effectif4.innerHTML = effectifClass4.length + ' élèves';
    }
    if (utili.classe === '3ème') {
      effectifClass3.push(utili.classe);

      effectif3.innerHTML = effectifClass3.length + ' élèves';

    }

    
  });
});

// recuperation Paiements effectués

onSnapshot(certiesRef2, (snapshot) => {
  let certiesRef2 = [];
  snapshot.docs.forEach((doc) => {
    certiesRef2.push({ ...doc.data(), id: doc.id });
  });
  certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);

  const paiement6 = document.getElementById('paiement6');
  const paiement5 = document.getElementById('paiement5');
  const paiement4 = document.getElementById('paiement4');
  const paiement3 = document.getElementById('paiement3');


  let PaiementsEffec6 = [];
  let PaiementsEffec5 = [];
  let PaiementsEffec4 = [];
  let PaiementsEffec3 = [];

  certiesRef2.forEach((utili) => {

    if (utili.classe === '6ème') {
      
      PaiementsEffec6.push(utili.montantpay);

      paiement6.innerHTML =
        Math.round(
          (PaiementsEffec6.length / parseInt(effectif6.innerHTML)) * 100
        ) + '%';
    }
    if (utili.classe === '5ème') {
      PaiementsEffec5.push(utili.montantpay);

      paiement5.innerHTML =
        Math.round(
          (PaiementsEffec5.length / parseInt(effectif5.innerHTML)) * 100
        ) + '%';
    }
    if (utili.classe === '4ème') {
      PaiementsEffec4.push(utili.montantpay);
      let sum = (PaiementsEffec4.length / parseInt(effectif4.innerHTML)) * 100

      if (PaiementsEffec4.length === "0") {
        paiement4.innerHTML = "0%"
      } else {
        paiement4.innerHTML =
        Math.round(
          sum
        ) + '%';
      }
      
    }
    if (utili.classe === '3ème') {
      PaiementsEffec3.push(utili.montantpay);
      paiement3.innerHTML =
        Math.round(
          (PaiementsEffec3.length / parseInt(effectif3.innerHTML)) * 100
        ) + '%';
    }
  });
});




let circularProgress = document.querySelector('.circular-progress');
let progressValue = document.querySelector('.progress-value');

let progressStartValue = 0;
let progressEndValue = 90;
let speed = 70;

let progress = setInterval(() => {
  progressStartValue++;

  progressValue.textContent = `${progressStartValue}%`;
  circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${
    progressStartValue * 3.6
  }deg, #ededed 0deg)`;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
  //   console.log(progressStartValue);
}, speed);




// partie ladji 
let date = new Date();
let year = date.getFullYear()
let month = date.getMonth() + 1;
let day = date.getDate();
// onSnapshot(eleve, (snapshot) => {
//   let eleves = [];
//   snapshot.docs.forEach((doc) => {
//     eleves.push({ ...doc.data(), id: doc.id });
//   });
//   eleves.forEach((utili) => { 

    
//   });
// })

const myTbody1 = document.querySelector('.myTd1');
const myTbody2 = document.querySelector('.myTd2');
const totalIns = document.querySelector('.totalIns');
const totalMens = document.querySelector('.totalMens');

myTbody1.innerHTML = `<span>${day}</span><span>/${month}<sapn>/${year}</span>`
myTbody2.innerHTML = `<span>${day}</span><span>/${month}<sapn>/${year}</span>`

getDocs(eleve).then((snapshot) => {
  let eleve = [];
  snapshot.docs.forEach((doc) => {
    eleve.push({ ...doc.data(), id: doc.id });
  });
  let totalInscription = 0;
  eleve.forEach((utili) => {
    totalInscription += parseInt(utili.montantInsc);
  });
  
  totalIns.innerHTML = `<b>${totalInscription}</b>`
});

getDocs(certiesRef2).then((snapshot) => {
  let certiesRef2 = [];
  snapshot.docs.forEach((doc) => {
    certiesRef2.push({ ...doc.data(), id: doc.id });
  });
  let totalMensualiter = 0;
  certiesRef2.forEach((utili) => {
    totalMensualiter += parseInt(utili.montantpay);
  });
  totalMens.innerHTML = `<b>${totalMensualiter}</b>`
});