// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Importation des  services
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as refDatabase, set, get } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
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
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    // console.log("Utilisateur connecté");
    var userEmail = user.email;
    const userRef = collection(db, "utilisateurs");
    onSnapshot(userRef, (snapshot) => {
      let userRef = [];
      snapshot.docs.forEach((doc) => {
        userRef.push({ ...doc.data(), id: doc.id });
      });
      userRef.forEach((utilisateur) => {
        // Créez une référence au document de l'utilisateur dans Firestore
        const userDocRef = doc(db, "utilisateurs", utilisateur.id);

        if (utilisateur.email == userEmail) {
          const ProfilNav = document.querySelector(".ProfilNav");
          const profilVoir = document.querySelector(".profilVoir");
          const nomUser = document.querySelector(".nomUser");
          const statusUser = document.querySelector(".statusUser");
          ProfilNav.src = utilisateur.url;
          profilVoir.src = utilisateur.url;
          nomUser.innerText = utilisateur.prenom + " " + utilisateur.nom;
          statusUser.innerText = utilisateur.status;
        }
      });
    });
  } else {
    console.log("Aucun utilisateur connecté");
  }
});

function deconnexion() {
  console.log("function deconnexion");
  const btnGreen = document.querySelector(".btnGreen");
  btnGreen.addEventListener("click", function () {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Utilisateur déconnecté");
        window.location.href = "../../pages/auth/login/login.html";
      })
      .catch((error) => {
        console.error("Erreur lors de la déconnexion :", error);
      });
  });
}
deconnexion();

// Récupérer la collection
const eleve = collection(db, "inscScolarite");
const certiesRef2 = collection(db, "mensualites");
let sum = 0;

let effectifClass6;
let effectifClass5;
let effectifClass4;
let effectifClass3;

const effectif6 = document.getElementById("effectif6");
const effectif5 = document.getElementById("effectif5");
const effectif4 = document.getElementById("effectif4");
const effectif3 = document.getElementById("effectif3");
let noPay
onSnapshot(eleve, (snapshot) => {
  let eleves = [];
  snapshot.docs.forEach((doc) => {
    eleves.push({ ...doc.data(), id: doc.id });
  });
  eleves.sort((a, b) => b.dateDajout - a.dateDajout);
  noPay = eleves
  // console.log(eleves);
  effectifClass6 = eleves.filter((utili) => utili.classe === "6ème").length;
  effectifClass5 = eleves.filter((utili) => utili.classe === "5ème").length;
  effectifClass4 = eleves.filter((utili) => utili.classe === "4ème").length;
  effectifClass3 = eleves.filter((utili) => utili.classe === "3ème").length;

  effectif6.innerHTML = effectifClass6 ;
  effectif5.innerHTML = effectifClass5 ;
  effectif4.innerHTML = effectifClass4;
  effectif3.innerHTML = effectifClass3;
});

// onSnapshot(certiesRef2, (snapshot) => {
//   let certiesRef2 = [];
//   snapshot.docs.forEach((doc) => {
//     certiesRef2.push({ ...doc.data(), id: doc.id });
//   });
//   certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);

//   // console.log(certiesRef2);
//   let PaiementsEffec6 = certiesRef2.filter(
//     (utili) => utili.classe === "6ème" && utili.mois === "novembre"
//   );
//   let PaiementsEffec5 = certiesRef2.filter(
//     (utili) => utili.classe === "5ème" && utili.mois === "novembre"
//   );
//   let PaiementsEffec4 = certiesRef2.filter(
//     (utili) => utili.classe === "4ème" && utili.mois === "novembre"
//   );
//   let PaiementsEffec3 = certiesRef2.filter(
//     (utili) => utili.classe === "3ème" && utili.mois === "novembre"
//   );

//   paiement6.innerHTML =
//     Math.round((PaiementsEffec6.length / effectifClass6) * 100) + "%";
//   paiement5.innerHTML =
//     Math.round((PaiementsEffec5.length / effectifClass5) * 100) + "%";
//   paiement4.innerHTML =
//     Math.round((PaiementsEffec4.length / effectifClass4) * 100) + "%";
//   paiement3.innerHTML =
//     Math.round((PaiementsEffec3.length / effectifClass3) * 100) + "%";
  
//   sum =
//     parseFloat(paiement6.innerHTML) +
//     parseFloat(paiement5.innerHTML) +
//     parseFloat(paiement4.innerHTML) +
//     parseFloat(paiement3.innerHTML);

//     sum = sum / 4;
//     sum = sum.toFixed(0);
    
    
  
//     /*****PARTIE PROGRESS BAR****/
  
//     let circularProgress = document.querySelector(".circular-progress");
//     let progressValue = document.querySelector(".progress-value");
  
//     let progressStartValue = 0;
//     let progressEndValue = typeof sum !== "undefined" ? sum : 0;
//     let speed = 70;
  
//     if (isNaN(sum)) {
      
//     } else if (sum === "0") {
//       progressStartValue = 0;
//       progressValue.textContent = `${progressStartValue}%`;
//       circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${
//         progressStartValue * 3.6
//       }deg, #ededed 0deg)`;
//     } else if (!isNaN(sum) && sum !== "0") {
//       let progress = setInterval(() => {
//         progressStartValue++;
  
//         progressValue.textContent = `${progressStartValue}%`;
//         circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${
//           progressStartValue * 3.6
//         }deg, #ededed 0deg)`;
  
//         if (progressStartValue == progressEndValue) {
//           clearInterval(progress);
//         }
//       }, speed);
//       sum = ""
//       console.log(sum);
//     }

// });


const selectMois = document.getElementById("selectMois");

// const dateDuJour = new Date();
// const moisActuel = dateDuJour.getMonth() + 1;

// console.log(dateDuJour, moisActuel);
// selectMois.value = moisActuel.toString();

// selectMois.addEventListener("change", (e) => {
//   const moisSelectionne = selectMois.value;
//   // const mois = e.target.value;
//   console.log(moisSelectionne);
//   sum = "0"
//   onSnapshot(certiesRef2, (snapshot) => {
//     let certiesRef2 = [];
//     snapshot.docs.forEach((doc) => {
//       certiesRef2.push({ ...doc.data(), id: doc.id });
//     });
//     certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);

//     let PaiementsEffec6 = certiesRef2.filter(
//       (utili) => utili.classe === "6ème" && utili.mois === moisSelectionne
//     );
//     let PaiementsEffec5 = certiesRef2.filter(
//       (utili) => utili.classe === "5ème" && utili.mois === moisSelectionne
//     );
//     let PaiementsEffec4 = certiesRef2.filter(
//       (utili) => utili.classe === "4ème" && utili.mois === moisSelectionne
//     );
//     let PaiementsEffec3 = certiesRef2.filter(
//       (utili) => utili.classe === "3ème" && utili.mois === moisSelectionne
//     );

//     paiement6.innerHTML =
//       Math.round((PaiementsEffec6.length / effectifClass6) * 100) + "%";
//     paiement5.innerHTML =
//       Math.round((PaiementsEffec5.length / effectifClass5) * 100) + "%";
//     paiement4.innerHTML =
//       Math.round((PaiementsEffec4.length / effectifClass4) * 100) + "%";
//     paiement3.innerHTML =
//       Math.round((PaiementsEffec3.length / effectifClass3) * 100) + "%";
//   });
//   sum = ""
//   sum =
//     parseFloat(paiement6.innerHTML) +
//     parseFloat(paiement5.innerHTML) +
//     parseFloat(paiement4.innerHTML) +
//     parseFloat(paiement3.innerHTML);

//   sum = sum / 4;
//   sum = sum.toFixed(0);
  
//   // console.log(sum);
//   // console.log(Number.isNaN(sum));

//   /*****PARTIE PROGRESS BAR****/

//   let circularProgress = document.querySelector(".circular-progress");
//   let progressValue = document.querySelector(".progress-value");

//   let progressStartValue = 0;
//   let progressEndValue = typeof sum !== "undefined" ? sum : 0;
//   let speed = 70;

//   if (isNaN(sum)) {
    
//   } else if (sum === "0") {
//     progressStartValue = 0;
//     progressValue.textContent = `${progressStartValue}%`;
//     circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${
//       progressStartValue * 3.6
//     }deg, #ededed 0deg)`;
//   } else if (!isNaN(sum) && sum !== "0") {
//     let progress = setInterval(() => {
//       progressStartValue++;

//       progressValue.textContent = `${progressStartValue}%`;
//       circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${
//         progressStartValue * 3.6
//       }deg, #ededed 0deg)`;

//       if (progressStartValue == progressEndValue) {
//         clearInterval(progress);
//       }
//     }, speed);
//     sum = ""
//     console.log(sum);
//   }

//   //  }

//   // }

//   // let progress = setInterval(() => {
//   //         progressStartValue++;

//   //         progressValue.textContent = `${progressStartValue}%`;
//   //         circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${
//   //           progressStartValue * 3.6
//   //         }deg, #ededed 0deg)`;

//   //         if (progressStartValue == progressEndValue) {
//   //           clearInterval(progress);
//   //         }
//   //       }, speed);
// });
sum = ''
console.log(sum);
selectMois.addEventListener("change", (e) => {
  paiementMensualiter()
  

  // console.log(moisSelectionne);
  // sum = "";
  // onSnapshot(certiesRef2, (snapshot) => {
  //   let certiesRef2 = [];
  //   snapshot.docs.forEach((doc) => {
  //     certiesRef2.push({ ...doc.data(), id: doc.id });
  //   });
  //   certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);
 
  //   let PaiementsEffec6 = certiesRef2.filter(
  //     (utili) => utili.classe === "6ème" && utili.mois === moisSelectionne
  //   );
  //   let PaiementsEffec5 = certiesRef2.filter(
  //     (utili) => utili.classe === "5ème" && utili.mois === moisSelectionne
  //   );
  //   let PaiementsEffec4 = certiesRef2.filter(
  //     (utili) => utili.classe === "4ème" && utili.mois === moisSelectionne
  //   );
  //   let PaiementsEffec3 = certiesRef2.filter(
  //     (utili) => utili.classe === "3ème" && utili.mois === moisSelectionne
  //   );
 
  //   paiement6.innerHTML =
  //     Math.round((PaiementsEffec6.length / effectifClass6) * 100) + "%";
  //   paiement5.innerHTML =
  //     Math.round((PaiementsEffec5.length / effectifClass5) * 100) + "%";
  //   paiement4.innerHTML =
  //     Math.round((PaiementsEffec4.length / effectifClass4) * 100) + "%";
  //   paiement3.innerHTML =
  //     Math.round((PaiementsEffec3.length / effectifClass3) * 100) + "%";
  // });
  // sum =
  //   parseFloat(paiement6.innerHTML) +
  //   parseFloat(paiement5.innerHTML) +
  //   parseFloat(paiement4.innerHTML) +
  //   parseFloat(paiement3.innerHTML);
 
  // sum = sum / 4;
  // sum = sum.toFixed(0);
 
  // let circularProgress = document.querySelector(".circular-progress");
  // let progressValue = document.querySelector(".progress-value");
 
  // let progressStartValue = 0;
  // let progressEndValue = typeof sum !== "undefined" ? sum : 0;
  // let speed = 70;
 
  // if (isNaN(sum)) {
  //   // Ne faites rien si sum est NaN
  // } else if (sum === "0") {
  //   progressStartValue = 0;
  //   progressValue.textContent = `${progressStartValue}%`;
  //   circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${
  //     progressStartValue * 3.6
  //   }deg, #ededed 0deg)`;
  // } else if (!isNaN(sum) && sum !== "0") {
  //   let progress = setInterval(() => {
  //     progressStartValue++;
 
  //     progressValue.textContent = `${progressStartValue}%`;
  //     circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${
  //       progressStartValue * 3.6
  //     }deg, #ededed 0deg)`;
 
  //     if (progressStartValue == progressEndValue) {
  //       clearInterval(progress);
  //     }
  //   }, speed);
  //   console.log(moisSelectionne, sum);
  // }
 });

 

function paiementMensualiter() {
  onSnapshot(certiesRef2, (snapshot) => {
    let certiesRef2 = [];
    snapshot.docs.forEach((doc) => {
      certiesRef2.push({ ...doc.data(), id: doc.id });
    });
    certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);

    const moisSelectionne = selectMois.value;
    const PaiementsEffec = certiesRef2.filter(
      (utili) => utili.classe === "6ème" && utili.mois === moisSelectionne
    );
    const PaiementsEffe5 = certiesRef2.filter(
      (utili) => utili.classe === "5ème" && utili.mois === moisSelectionne
    );
    const PaiementsEffe4 = certiesRef2.filter(
      (utili) => utili.classe === "4ème" && utili.mois === moisSelectionne
    );
    const PaiementsEffe3 = certiesRef2.filter(
      (utili) => utili.classe === "3ème" && utili.mois === moisSelectionne
    );

    const tousElevesClasse6 = noPay.filter((eleve) => eleve.classe === "6ème");
    const tousElevesClasse5 = noPay.filter((eleve) => eleve.classe === "5ème");
    const tousElevesClasse4 = noPay.filter((eleve) => eleve.classe === "4ème");
    const tousElevesClasse3 = noPay.filter((eleve) => eleve.classe === "3ème");

    
    const elevesNonPayesClasse6 = tousElevesClasse6.filter((eleve) => {
      return !PaiementsEffec.some((pai) => pai.prenom === eleve.prenom);
    });
    const elevesNonPayesClasse5 = tousElevesClasse5.filter((eleve) => {
      return !PaiementsEffe5.some((pai) => pai.prenom === eleve.prenom);
    });
    const elevesNonPayesClasse4 = tousElevesClasse4.filter((eleve) => {
      return !PaiementsEffe4.some((pai) => pai.prenom === eleve.prenom);
    });
    const elevesNonPayesClasse3 = tousElevesClasse3.filter((eleve) => {
      return !PaiementsEffe3.some((pai) => pai.prenom === eleve.prenom);
    });


    const list = document.querySelector('#list');
    const list5 = document.querySelector('#list1');
    const list4 = document.querySelector('#list2');
    const list3 = document.querySelector('#list3');
    console.log(list5);
    list.innerHTML = ""
    elevesNonPayesClasse6.forEach(utili => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
      <td class="mx-auto text-center m-0">${utili.nom}</td>
      <td class="mx-auto text-center m-0">${utili.prenom}</td>
      <td class="mx-auto text-center m-0 d-none d-lg-block">Non payé </td>
      `;
      list.appendChild(tr);
    })

    list5.innerHTML = ""
    elevesNonPayesClasse5.forEach(utili => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
      <td class="mx-auto text-center m-0">${utili.nom}</td>
      <td class="mx-auto text-center m-0">${utili.prenom}</td>
      <td class="mx-auto text-center m-0">Non payé </td>
      `;
      list5.appendChild(tr);
    })

    list4.innerHTML = ""
    elevesNonPayesClasse4.forEach(utili => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
      <td class="mx-auto text-center m-0">${utili.nom}</td>
      <td class="mx-auto text-center m-0">${utili.prenom}</td>
      <td class="mx-auto text-center m-0">Non payé </td>
      `;
      list4.appendChild(tr);
    })

    list3.innerHTML = ""
    elevesNonPayesClasse3.forEach(utili => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
      <td class="mx-auto text-center m-0">${utili.nom}</td>
      <td class="mx-auto text-center m-0">${utili.prenom}</td>
      <td class="mx-auto text-center m-0">Non payé </td>
      `;
      list3.appendChild(tr);
    })
   
    let PaiementsEffec6 = certiesRef2.filter(
      (utili) => utili.classe === "6ème" && utili.mois === moisSelectionne
    );
    let PaiementsEffec5 = certiesRef2.filter(
      (utili) => utili.classe === "5ème" && utili.mois === moisSelectionne
    );
    let PaiementsEffec4 = certiesRef2.filter(
      (utili) => utili.classe === "4ème" && utili.mois === moisSelectionne
    );
    let PaiementsEffec3 = certiesRef2.filter(
      (utili) => utili.classe === "3ème" && utili.mois === moisSelectionne
    );
    let classe6 = noPay.filter(
      (utili) => utili.classe === "6ème" 
      );
      

      classe6.forEach((pai) => {
          let nonPayer = PaiementsEffec6.filter(
            (utili) => utili.prenom  !== pai.prenom
            );
            console.log(nonPayer);
        })

      console.log(classe6, PaiementsEffec6, );
    paiement6.innerHTML =
      Math.round((PaiementsEffec6.length / effectifClass6) * 100) + "%";
    paiement5.innerHTML =
      Math.round((PaiementsEffec5.length / effectifClass5) * 100) + "%";
    paiement4.innerHTML =
      Math.round((PaiementsEffec4.length / effectifClass4) * 100) + "%";
    paiement3.innerHTML =
      Math.round((PaiementsEffec3.length / effectifClass3) * 100) + "%";
  });

 let  sum =
  parseFloat(paiement6.innerHTML) +
  parseFloat(paiement5.innerHTML) +
  parseFloat(paiement4.innerHTML) +
  parseFloat(paiement3.innerHTML);

sum = sum / 4;
sum = sum.toFixed(0);
console.log(sum);
} 
paiementMensualiter()
 

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

  totalIns.innerHTML = `<b>${totalInscription.toLocaleString('en-US')} Fcfa</b>`;
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
  totalMens.innerHTML = `<b>${totalMensualiter.toLocaleString('en-US')} Fcfa</b>`;
});
