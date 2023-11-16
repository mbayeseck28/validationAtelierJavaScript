// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Importation des  services
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as refDatabase, set, get } from "firebase/database";
import {
  getAuth,
  signOut,
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
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ3SrfEimEPtzCFyxR0vWBK8BJ_K4Ma48",
  authDomain: "mixte-feewi.firebaseapp.com",
  projectId: "mixte-feewi",
  storageBucket: "mixte-feewi.appspot.com",
  messagingSenderId: "1083213454329",
  appId: "1:1083213454329:web:df3deafe22a82ad34e3b28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app);



/************     Profil Navbar       ***********/ 
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
  }v
}
btnDeconnexion.addEventListener("click", signOutButtonPressed);




// Récupérer la collection
const eleve = collection(db, "inscScolarite");
const certiesRef2 = collection(db, "mensualites");
let sum;

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

  effectifClass6 = eleves.filter((utili) => utili.classe === "6ème").length;
  effectifClass5 = eleves.filter((utili) => utili.classe === "5ème").length;
  effectifClass4 = eleves.filter((utili) => utili.classe === "4ème").length;
  effectifClass3 = eleves.filter((utili) => utili.classe === "3ème").length;

  effectif6.innerHTML = effectifClass6 + " élèves";
  effectif5.innerHTML = effectifClass5 + " élèves";
  effectif4.innerHTML = effectifClass4 + " élèves";
  effectif3.innerHTML = effectifClass3 + " élèves";
});

const btnAfficherPaiements = document.getElementById("btnAfficherPaiements");
const selectMois = document.getElementById("selectMois");

// const dateDuJour = new Date();
// const moisActuel = dateDuJour.getMonth() + 1;

// console.log(dateDuJour, moisActuel);
// selectMois.value = moisActuel.toString();

selectMois.addEventListener("click", (e) => {
  const moisSelectionne = selectMois.value;
  const mois = e.target.value;
  // console.log(mois);
  onSnapshot(certiesRef2, (snapshot) => {
    let certiesRef2 = [];
    snapshot.docs.forEach((doc) => {
      certiesRef2.push({ ...doc.data(), id: doc.id });
    });
    certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);

    let PaiementsEffec6 = certiesRef2.filter(
      (utili) => utili.classe === "6ème" && utili.mois === mois
    );
    let PaiementsEffec5 = certiesRef2.filter(
      (utili) => utili.classe === "5ème" && utili.mois === mois
    );
    let PaiementsEffec4 = certiesRef2.filter(
      (utili) => utili.classe === "4ème" && utili.mois === mois
    );
    let PaiementsEffec3 = certiesRef2.filter(
      (utili) => utili.classe === "3ème" && utili.mois === mois
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
});

onSnapshot(certiesRef2, (snapshot) => {
  let certiesRef2 = [];
  snapshot.docs.forEach((doc) => {
    certiesRef2.push({ ...doc.data(), id: doc.id });
  });
  certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);

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
  console.log(paiement3.innerHTML);
  sum =
    parseInt(paiement6.innerHTML) +
    parseInt(paiement5.innerHTML) +
    parseInt(paiement4.innerHTML) +
    parseInt(paiement3.innerHTML);

  sum = sum / 4;
  sum = Math.round(sum)
  // console.log(sum);

  
  /*****PARTIE PROGRESS BAR****/
  let circularProgress = document.querySelector(".circular-progress");
  let progressValue = document.querySelector(".progress-value");

  let progressStartValue = 0;
  let progressEndValue = sum;
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
  }, speed);
});


// partie ladji HISTORIQUE
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();

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

