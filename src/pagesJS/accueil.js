// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app';
// // Importation des  services
// import {
//   addDoc,
//   collection,
//   documentId,
//   getDocs,
//   getFirestore,
//   onSnapshot,
//   serverTimestamp,
// } from 'firebase/firestore';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY',
//   authDomain: 'validation-atelier-js.firebaseapp.com',
//   projectId: 'validation-atelier-js',
//   storageBucket: 'validation-atelier-js.appspot.com',
//   messagingSenderId: '466332062090',
//   appId: '1:466332062090:web:ffbe45ef4a7371a7b5b873',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// // Récupérer la collection
// const eleve = collection(db, 'inscScolarite');
// const certiesRef2 = collection(db, 'mensualites');
// const effectif6 = document.getElementById('effectif6');
// const effectif5 = document.getElementById('effectif5');
// const effectif4 = document.getElementById('effectif4');
// const effectif3 = document.getElementById('effectif3');

// onSnapshot(eleve, (snapshot) => {
//   let eleves = [];
//   snapshot.docs.forEach((doc) => {
//     eleves.push({ ...doc.data(), id: doc.id });
//   });
//   eleves.sort((a, b) => b.dateDajout - a.dateDajout);
//   console.log(eleves);
//   let effectifClass6 = [];
//   let effectifClass5 = [];
//   let effectifClass4 = [];
//   let effectifClass3 = [];

//   eleves.forEach((utili) => {
//     if (utili.classe === 'sizieme') {
//       effectifClass6.push(utili.classe);
//       effectif6.innerHTML = effectifClass6.length + '  élèves';
//     }
//     if (utili.classe === 'cinquieme') {
//       effectifClass5.push(utili.classe);
//       effectif5.innerHTML = effectifClass5.length + '  élèves';
//     }
//     if (utili.classe === 'quatrieme') {
//       effectifClass4.push(utili.classe);
//       effectif4.innerHTML = effectifClass4.length + ' élèves';
//     }
//     if (utili.classe === 'troisieme') {
//       effectifClass3.push(utili.classe);

//       console.log(effectifClass3);
//       effectif3.innerHTML = effectifClass3.length + ' élèves';
//     }
//   });
// });

// // recuperation Paiements effectués

// onSnapshot(certiesRef2, (snapshot) => {
//   let certiesRef2 = [];
//   snapshot.docs.forEach((doc) => {
//     certiesRef2.push({ ...doc.data(), id: doc.id });
//   });
//   certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);
//   const paiement6 = document.getElementById('paiement6');
//   const paiement5 = document.getElementById('paiement5');
//   const paiement4 = document.getElementById('paiement4');
//   const paiement3 = document.getElementById('paiement3');

//   let PaiementsEffec6 = [];
//   let PaiementsEffec5 = [];
//   let PaiementsEffec4 = [];
//   let PaiementsEffec3 = [];

//   console.log(certiesRef2);
//   certiesRef2.forEach((utili) => {
//     if (utili.classe === 'sizieme') {
//       PaiementsEffec6.push(utili.montantpay);

//       paiement6.innerHTML =
//         Math.round(
//           (PaiementsEffec6.length / parseInt(effectif6.innerHTML)) * 100
//         ) + '%';
//     }
//     if (utili.classe === 'cinquieme') {
//       PaiementsEffec5.push(utili.montantpay);

//       paiement5.innerHTML =
//         Math.round(
//           (PaiementsEffec5.length / parseInt(effectif5.innerHTML)) * 100
//         ) + '%';
//     }
//     if (utili.classe === 'quatrieme') {
//       PaiementsEffec4.push(utili.montantpay);
//       console.log(paiement4);
//       paiement4.innerHTML =
//         Math.round(
//           (PaiementsEffec4.length / parseInt(effectif4.innerHTML)) * 100
//         ) + '%';
//     }
//     if (utili.classe === 'troisieme') {
//       PaiementsEffec3.push(utili.montantpay);
//       console.log(paiement3);
//       paiement3.innerHTML =
//         Math.round(
//           (PaiementsEffec3.length / parseInt(effectif3.innerHTML)) * 100
//         ) + '%';
//     }
//     // if (utili.classe === "sizieme") {
//     //   PaiementsEffec6.push(utili.montantpay);

//     //   paiement6.innerHTML =
//     //     Math.round(
//     //       (PaiementsEffec6.length / parseInt(effectif6.innerHTML)) * 100
//     //     ) + "%";
//     // }
//     // if (utili.classe === "cinquieme") {
//     //     PaiementsEffec5.push(utili.montantpay);
//     //   console.log(PaiementsEffec5.length);
//     //   console.log(parseInt(effectif5.innerHTML));
//     //     paiement5.innerHTML =
//     //       Math.round(
//     //         (PaiementsEffec5.length / parseInt(effectif5.innerHTML)) * 100
//     //       ) + "%";
//     //   }
//     //   if (utili.classe === "quatrieme") {
//     //     PaiementsEffec4.push(utili.montantpay);
//     //     console.log(paiement4);
//     //     paiement4.innerHTML =
//     //       Math.round(
//     //         (PaiementsEffec4.length / parseInt(effectif4.innerHTML)) * 100
//     //       ) + "%";
//     //   }
//     //   if (utili.classe === "troisieme") {
//     //     PaiementsEffec3.push(utili.montantpay);
//     //     console.log(paiement3);
//     //     paiement3.innerHTML =
//     //       Math.round(
//     //         (PaiementsEffec3.length / parseInt(effectif3.innerHTML)) * 100
//     //       ) + "%";
//     //   }
//   });
// });
