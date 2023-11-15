// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Importation des  services
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY",
  authDomain: "validation-atelier-js.firebaseapp.com",
  projectId: "validation-atelier-js",
  storageBucket: "validation-atelier-js.appspot.com",
  messagingSenderId: "466332062090",
  appId: "1:466332062090:web:ffbe45ef4a7371a7b5b873",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Récupérer la collection
const eleve = collection(db, "inscScolarite");
const certiesRef2 = collection(db, "mensualites");

let effectifClass6;
let effectifClass5;
let effectifClass4;
let effectifClass3;

const effectif6 = document.getElementById("effectif6");
const effectif5 = document.getElementById("effectif5");
const effectif4 = document.getElementById("effectif4");
const effectif3 = document.getElementById("effectif3");

onSnapshot(eleve, (snapshot) => {
  let eleves = [];
  snapshot.docs.forEach((doc) => {
    eleves.push({ ...doc.data(), id: doc.id });
  });
  eleves.sort((a, b) => b.dateDajout - a.dateDajout);
  console.log(eleves);
  effectifClass6 = eleves.filter((utili) => utili.classe === "6ème").length;
  effectifClass5 = eleves.filter((utili) => utili.classe === "5ème").length;
  effectifClass4 = eleves.filter((utili) => utili.classe === "4ème").length;
  effectifClass3 = eleves.filter((utili) => utili.classe === "3ème").length;

  effectif6.innerHTML = effectifClass6 + " élèves";
  effectif5.innerHTML = effectifClass5 + " élèves";
  effectif4.innerHTML = effectifClass4 + " élèves";
  effectif3.innerHTML = effectifClass3 + " élèves";
});


const btnAfficherPaiements = document.getElementById('btnAfficherPaiements');
const selectMois = document.getElementById('selectMois');

btnAfficherPaiements.addEventListener('click', () => {
  const moisSelectionne = selectMois.value;

  onSnapshot(certiesRef2, (snapshot) => {
    let certiesRef2 = [];
    snapshot.docs.forEach((doc) => {
      certiesRef2.push({ ...doc.data(), id: doc.id });
    });
    certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);

    let PaiementsEffec6 = certiesRef2.filter((utili) => utili.classe === '6ème' && utili.mois === moisSelectionne);
    let PaiementsEffec5 = certiesRef2.filter((utili) => utili.classe === '5ème' && utili.mois === moisSelectionne);
    let PaiementsEffec4 = certiesRef2.filter((utili) => utili.classe === '4ème' && utili.mois === moisSelectionne);
    let PaiementsEffec3 = certiesRef2.filter((utili) => utili.classe === '3ème' && utili.mois === moisSelectionne);

    paiement6.innerHTML =
    Math.round((PaiementsEffec6.length / effectifClass6) * 100) + "%";
  paiement5.innerHTML =
    Math.round((PaiementsEffec5.length / effectifClass5) * 100) + "%";
  paiement4.innerHTML =
    Math.round((PaiementsEffec4.length / effectifClass4) * 100) + "%";
  paiement3.innerHTML =
    Math.round((PaiementsEffec3.length / effectifClass3) * 100) + "%";
  });
});


onSnapshot(certiesRef2, (snapshot) => {
  let certiesRef2 = [];
  snapshot.docs.forEach((doc) => {
    certiesRef2.push({ ...doc.data(), id: doc.id });
  });
  certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);
  console.log(certiesRef2);
  let PaiementsEffec6 = certiesRef2.filter(
    (utili) => utili.classe === "6ème" && utili.mois === "novembre"
  );
  let PaiementsEffec5 = certiesRef2.filter(
    (utili) => utili.classe === "5ème" && utili.mois === "novembre"
  );
  let PaiementsEffec4 = certiesRef2.filter(
    (utili) => utili.classe === "4ème" && utili.mois === "novembre"
  );
  let PaiementsEffec3 = certiesRef2.filter(
    (utili) => utili.classe === "3ème" && utili.mois === "novembre"
  );

  paiement6.innerHTML =
    Math.round((PaiementsEffec6.length / effectifClass6) * 100) + "%";
  paiement5.innerHTML =
    Math.round((PaiementsEffec5.length / effectifClass5) * 100) + "%";
  paiement4.innerHTML =
    Math.round((PaiementsEffec4.length / effectifClass4) * 100) + "%";
  paiement3.innerHTML =
    Math.round((PaiementsEffec3.length / effectifClass3) * 100) + "%";
});

/*****PARTIE PROGRESS BAR****/
let circularProgress = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");

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

// partie ladji HISTORIQUE
let date = new Date();
let year = date.getFullYear();
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

const myTbody1 = document.querySelector(".myTd1");
const myTbody2 = document.querySelector(".myTd2");
const totalIns = document.querySelector(".totalIns");
const totalMens = document.querySelector(".totalMens");

myTbody1.innerHTML = `<span>${day}</span><span>/${month}<sapn>/${year}</span>`;
myTbody2.innerHTML = `<span>${day}</span><span>/${month}<sapn>/${year}</span>`;

getDocs(eleve).then((snapshot) => {
  let eleve = [];
  snapshot.docs.forEach((doc) => {
    eleve.push({ ...doc.data(), id: doc.id });
  });
  let totalInscription = 0;
  eleve.forEach((utili) => {
    totalInscription += parseInt(utili.montantInsc);
  });

  totalIns.innerHTML = `<b>${totalInscription}</b>`;
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
  // console.log(certiesRef2);
  totalMens.innerHTML = `<b>${totalMensualiter}</b>`;
});
