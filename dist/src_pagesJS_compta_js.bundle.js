"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_compta_js"],{

/***/ "./src/pagesJS/compta.js":
/*!*******************************!*\
  !*** ./src/pagesJS/compta.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n// Import the functions you need from the SDKs you need\r\n\r\n// Importation des  services\r\n\r\n\r\n// Your web app's Firebase configuration\r\nconst firebaseConfig = {\r\n  apiKey: 'AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY',\r\n  authDomain: 'validation-atelier-js.firebaseapp.com',\r\n  projectId: 'validation-atelier-js',\r\n  storageBucket: 'validation-atelier-js.appspot.com',\r\n  messagingSenderId: '466332062090',\r\n  appId: '1:466332062090:web:ffbe45ef4a7371a7b5b873',\r\n};\r\n\r\n// Initialize Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\r\n\r\n// Récupérer la collection\r\nconst eleve = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, 'inscScolarite');\r\nconst certiesRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, 'inscrireActivite');\r\nconst certiesRef2 = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, 'mensualites');\r\nlet veri \r\n\r\n;(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)(eleve, (snapshot) => {\r\n  let eleve = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    eleve.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  eleve.sort((a, b) => b.dateDajout - a.dateDajout);\r\n  veri = eleve\r\n  console.log(veri);\r\n  const list = document.querySelector('#list');\r\n  list.innerHTML = '';\r\n\r\n  eleve.forEach((utili) => {\r\n    const list = document.querySelector('#list');\r\n    const tr = document.createElement('tr');\r\n\r\n    tr.innerHTML = `\r\n    <td class=\"text-start ps-2 py-2 border border-1\">${utili.prenom}</td> <td class=\"text-start ps-2 py-2 border border-1\">${utili.nom}</td> <td class=\"text-center py-2 border border-1\">${utili.montantInsc} Fcfa</td>`;\r\n    list.appendChild(tr);\r\n  });\r\n});\r\n\r\n// Enregistrer des données dans le Firebase\r\n\r\nconst form = document.querySelector('.addToFirebase');\r\nform.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  //Ajouter un nouveau document avec un id généré\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(eleve, {\r\n    nom: form.nom.value,\r\n    prenom: form.prenom.value,\r\n    type: form.type.value,\r\n    classe: form.classeSelect.value,\r\n    montantInsc: form.montantPaye.value,\r\n    dateDajout: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)(),\r\n  }).then(() => form.reset());\r\n});\r\n// Montant à inscrire\r\nlet selectElement = document.getElementById('classeSelect');\r\nselectElement.addEventListener('change', function () {\r\n  let selectedOption = selectElement.options[selectElement.selectedIndex];\r\n  let selectedValue = selectedOption.value;\r\n  console.log(selectedValue);\r\n\r\n  document.getElementById('montantPaye').value = montant(selectedValue);\r\n});\r\n\r\nfunction montant(classe) {\r\n  const montantMapping = {\r\n    sizieme: 25000,\r\n    cinquieme: 25000,\r\n    quatrieme: 30000,\r\n    troisieme: 35000,\r\n  };\r\n\r\n  return montantMapping[classe] || 0;\r\n}\r\n\r\n// Alert Après ajout\r\nconst alertPlaceholder = document.getElementById('liveAlertPlaceholder');\r\nconst appendAlert = (message, type) => {\r\n  const wrapper = document.createElement('div');\r\n  wrapper.innerHTML = [\r\n    `<div class=\"alert alert-${type} alert-dismissible\" role=\"alert\">`,\r\n    `   <div>${message}</div>`,\r\n    '   <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>',\r\n    '</div>',\r\n  ].join('');\r\n\r\n  alertPlaceholder.append(wrapper);\r\n};\r\n\r\nconst alertTrigger = document.getElementById('liveAlertBtn');\r\nif (alertTrigger) {\r\n  alertTrigger.addEventListener('click', () => {\r\n    appendAlert('Linscription est effectué avec succès', 'success');\r\n  });\r\n}\r\n// _________________________\r\n// Parti Ladji Timéra\r\n\r\n// Mensualite\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)(certiesRef2, (snapshot) => {\r\n  let certiesRef2 = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    certiesRef2.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);\r\n  const list = document.querySelector('.mytbodyIns');\r\n  list.innerHTML = '';\r\n\r\n  // console.log(certiesRef2);\r\n  certiesRef2.forEach((utili) => {\r\n    const list = document.querySelector('.mytbodyIns');\r\n    const tr = document.createElement('tr');\r\n\r\n    tr.innerHTML = `\r\n    <td class=\"text-start ps-2 py-2 border border-1\">${\r\n      utili.prenom\r\n    }</td> <td class=\"text-start ps-2 py-2 border border-1\">${\r\n      utili.nom\r\n    }</td> <td class=\"text-center py-2 border border-1\">${utili.montantpay.toLocaleString(\r\n      'en-US'\r\n    )} Fcfa</td>`;\r\n    list.appendChild(tr);\r\n  });\r\n});\r\n\r\nconst myForm = document.querySelector('.myForm');\r\n\r\nmyForm.addEventListener('submit', (e) => {\r\n  e.preventDefault();\r\n  //Ajouter un nouveau document avec un id généré\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(certiesRef2, {\r\n    nom: myForm.nom.value,\r\n    prenom: myForm.prenom.value,\r\n    type: myForm.type.value,\r\n    classe: myForm.classeSelect2.value,\r\n    montantpay: myForm.montantAPaye.value,\r\n    dateDajout: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)(),\r\n  }).then(() => myForm.reset());\r\n});\r\n// Montant à inscrire\r\nlet selectElement2 = document.getElementById('classeSelect2');\r\nselectElement2.addEventListener('change', function () {\r\n  let selectedOption = selectElement2.options[selectElement2.selectedIndex];\r\n  let selectedValue = selectedOption.value;\r\n  console.log(selectedValue);\r\n  document.getElementById('montantAPaye').value = montant2(selectedValue);\r\n});\r\n\r\nfunction montant2(classe) {\r\n  const montantMapping = {\r\n    sizieme: 10000,\r\n    cinquieme: 15000,\r\n    quatrieme: 20000,\r\n    troisieme: 25000,\r\n  };\r\n\r\n  return montantMapping[classe] || 0;\r\n}\r\n\r\n//___________________________________________________\r\n// //partie pape cheikh\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)(eleve, (snapshot) => {\r\n  let eleve = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    eleve.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  const revenue = document.getElementById('revenue');\r\n  revenue.innerHTML = ''\r\n  eleve.forEach((utili) => {\r\n    let trbody = document.createElement('tr');\r\n    trbody.innerHTML = `\r\n      <td class=\"border border-1\">${utili.dateDajout.toDate().toLocaleDateString()}</td>\r\n        <td class=\"text-center\">${utili.type}</td>\r\n        <td class=\"text-center border border-1\">${utili.prenom} ${\r\n      utili.nom\r\n    }</td>\r\n        <td class=\"border border-1\">${utili.montantInsc.toLocaleString(\r\n          'en-US'\r\n        )} Fcfa</td>\r\n        `;\r\n    revenue.appendChild(trbody);\r\n  });\r\n});\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.onSnapshot)(certiesRef2, (snapshot) => {\r\n  let certiesRef2 = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    certiesRef2.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  const mens = document.getElementById('mens');\r\n  mens.innerHTML = ''\r\n  certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);\r\n\r\n\r\n\r\n  certiesRef2.forEach((utili) => {\r\n    let trbody = document.createElement('tr');\r\n    trbody.innerHTML = `\r\n      <td class=\"border border-1\">${utili.dateDajout\r\n        .toDate()\r\n        .toLocaleDateString()}</td>\r\n        <td class=\"text-center\">${utili.type}</td>\r\n        <td class=\"text-center border border-1\">${utili.prenom} ${\r\n      utili.nom\r\n    }</td>\r\n        <td class=\"border border-1\">${utili.montantpay}Fcfa</td>\r\n        `;\r\n    mens.appendChild(trbody);\r\n\r\n    // console.log(utili.type);\r\n  });\r\n});\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(eleve).then((snapshot) => {\r\n  let eleve = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    eleve.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  let totalInscription = 0;\r\n  eleve.forEach((utili) => {\r\n    totalInscription += parseInt(utili.montantInsc);\r\n  });\r\n  console.log(totalInscription);\r\n});\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(certiesRef2).then((snapshot) => {\r\n  let certiesRef2 = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    certiesRef2.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  let totalCertieRef2 = 0;\r\n  certiesRef2.forEach((utili) => {\r\n    totalCertieRef2 += parseInt(utili.montantpay);\r\n  });\r\n  console.log(totalCertieRef2);\r\n});\r\n\r\n// console.log(total);\r\n\r\nfunction totalGlobal(data) {\r\n  return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(data).then((snapshot) => {\r\n    let items = [];\r\n    snapshot.docs.forEach((doc) => {\r\n      items.push({ ...doc.data(), id: doc.id });\r\n    });\r\n    return items;\r\n  });\r\n}\r\n\r\nPromise.all([totalGlobal(eleve), totalGlobal(certiesRef2)])\r\n  .then(([eleveData, certiesRef2Data]) => {\r\n    let totalInscription = eleveData.reduce(\r\n      (total, utili) => total + parseInt(utili.montantInsc),\r\n      0\r\n    );\r\n    let totalCertieRef2 = certiesRef2Data.reduce(\r\n      (total, utili) => total + parseInt(utili.montantpay),\r\n      0\r\n    );\r\n\r\n    let totaleDuRevenu = totalInscription + totalCertieRef2;\r\n\r\n    //Calcule du revenue total\r\nfunction CalculDeLaSommeTotale() {\r\n  \r\n  const total = document.getElementById('total');\r\n  total.innerHTML = '';\r\n  let trfoot = document.createElement('tr');\r\n  trfoot.innerHTML = `\r\n    <td colspan=\"3\"><b>Total</b></td>\r\n    <td><b>${totaleDuRevenu.toLocaleString('en-US')} Fcfa </b></td>\r\n    `;\r\n  total.appendChild(trfoot);\r\n  const revTotal = document.getElementById('revenuTotal');\r\n  revTotal.innerHTML = `${totaleDuRevenu.toLocaleString(\r\n    'en-US'\r\n  )} <span class=\"fw-bold\">FCFA</span>`;\r\n  console.log('Total global:', totaleDuRevenu);\r\n}\r\nCalculDeLaSommeTotale()\r\n})\r\n  .catch((error) => {\r\n    console.error(\"Une erreur s'est produite :\", error);\r\n  });\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9jb21wdGEuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbGlkYXRpb25hdGVsaWVyanMvLi9zcmMvcGFnZXNKUy9jb21wdGEuanM/MTAxNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAsIG9uTG9nIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuLy8gSW1wb3J0YXRpb24gZGVzICBzZXJ2aWNlc1xyXG5pbXBvcnQge1xyXG4gIGFkZERvYyxcclxuICBjb2xsZWN0aW9uLFxyXG4gIGdldERvY3MsXHJcbiAgZ2V0RmlyZXN0b3JlLFxyXG4gIG9uU25hcHNob3QsXHJcbiAgc2VydmVyVGltZXN0YW1wLFxyXG59IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogJ0FJemFTeUNTUm8yRVp3bzVMUUlPNzVGZXZJQnZFS2JERDYxSE51WScsXHJcbiAgYXV0aERvbWFpbjogJ3ZhbGlkYXRpb24tYXRlbGllci1qcy5maXJlYmFzZWFwcC5jb20nLFxyXG4gIHByb2plY3RJZDogJ3ZhbGlkYXRpb24tYXRlbGllci1qcycsXHJcbiAgc3RvcmFnZUJ1Y2tldDogJ3ZhbGlkYXRpb24tYXRlbGllci1qcy5hcHBzcG90LmNvbScsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6ICc0NjYzMzIwNjIwOTAnLFxyXG4gIGFwcElkOiAnMTo0NjYzMzIwNjIwOTA6d2ViOmZmYmU0NWVmNGE3MzcxYTdiNWI4NzMnLFxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcblxyXG4vLyBSw6ljdXDDqXJlciBsYSBjb2xsZWN0aW9uXHJcbmNvbnN0IGVsZXZlID0gY29sbGVjdGlvbihkYiwgJ2luc2NTY29sYXJpdGUnKTtcclxuY29uc3QgY2VydGllc1JlZiA9IGNvbGxlY3Rpb24oZGIsICdpbnNjcmlyZUFjdGl2aXRlJyk7XHJcbmNvbnN0IGNlcnRpZXNSZWYyID0gY29sbGVjdGlvbihkYiwgJ21lbnN1YWxpdGVzJyk7XHJcbmxldCB2ZXJpIFxyXG5cclxub25TbmFwc2hvdChlbGV2ZSwgKHNuYXBzaG90KSA9PiB7XHJcbiAgbGV0IGVsZXZlID0gW107XHJcbiAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIGVsZXZlLnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xyXG4gIH0pO1xyXG4gIGVsZXZlLnNvcnQoKGEsIGIpID0+IGIuZGF0ZURham91dCAtIGEuZGF0ZURham91dCk7XHJcbiAgdmVyaSA9IGVsZXZlXHJcbiAgY29uc29sZS5sb2codmVyaSk7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXN0Jyk7XHJcbiAgbGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgZWxldmUuZm9yRWFjaCgodXRpbGkpID0+IHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGlzdCcpO1xyXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG5cclxuICAgIHRyLmlubmVySFRNTCA9IGBcclxuICAgIDx0ZCBjbGFzcz1cInRleHQtc3RhcnQgcHMtMiBweS0yIGJvcmRlciBib3JkZXItMVwiPiR7dXRpbGkucHJlbm9tfTwvdGQ+IDx0ZCBjbGFzcz1cInRleHQtc3RhcnQgcHMtMiBweS0yIGJvcmRlciBib3JkZXItMVwiPiR7dXRpbGkubm9tfTwvdGQ+IDx0ZCBjbGFzcz1cInRleHQtY2VudGVyIHB5LTIgYm9yZGVyIGJvcmRlci0xXCI+JHt1dGlsaS5tb250YW50SW5zY30gRmNmYTwvdGQ+YDtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQodHIpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbi8vIEVucmVnaXN0cmVyIGRlcyBkb25uw6llcyBkYW5zIGxlIEZpcmViYXNlXHJcblxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRvRmlyZWJhc2UnKTtcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAvL0Fqb3V0ZXIgdW4gbm91dmVhdSBkb2N1bWVudCBhdmVjIHVuIGlkIGfDqW7DqXLDqVxyXG4gIGFkZERvYyhlbGV2ZSwge1xyXG4gICAgbm9tOiBmb3JtLm5vbS52YWx1ZSxcclxuICAgIHByZW5vbTogZm9ybS5wcmVub20udmFsdWUsXHJcbiAgICB0eXBlOiBmb3JtLnR5cGUudmFsdWUsXHJcbiAgICBjbGFzc2U6IGZvcm0uY2xhc3NlU2VsZWN0LnZhbHVlLFxyXG4gICAgbW9udGFudEluc2M6IGZvcm0ubW9udGFudFBheWUudmFsdWUsXHJcbiAgICBkYXRlRGFqb3V0OiBzZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICB9KS50aGVuKCgpID0+IGZvcm0ucmVzZXQoKSk7XHJcbn0pO1xyXG4vLyBNb250YW50IMOgIGluc2NyaXJlXHJcbmxldCBzZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsYXNzZVNlbGVjdCcpO1xyXG5zZWxlY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICBsZXQgc2VsZWN0ZWRPcHRpb24gPSBzZWxlY3RFbGVtZW50Lm9wdGlvbnNbc2VsZWN0RWxlbWVudC5zZWxlY3RlZEluZGV4XTtcclxuICBsZXQgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLnZhbHVlO1xyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkVmFsdWUpO1xyXG5cclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9udGFudFBheWUnKS52YWx1ZSA9IG1vbnRhbnQoc2VsZWN0ZWRWYWx1ZSk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbW9udGFudChjbGFzc2UpIHtcclxuICBjb25zdCBtb250YW50TWFwcGluZyA9IHtcclxuICAgIHNpemllbWU6IDI1MDAwLFxyXG4gICAgY2lucXVpZW1lOiAyNTAwMCxcclxuICAgIHF1YXRyaWVtZTogMzAwMDAsXHJcbiAgICB0cm9pc2llbWU6IDM1MDAwLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBtb250YW50TWFwcGluZ1tjbGFzc2VdIHx8IDA7XHJcbn1cclxuXHJcbi8vIEFsZXJ0IEFwcsOocyBham91dFxyXG5jb25zdCBhbGVydFBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpdmVBbGVydFBsYWNlaG9sZGVyJyk7XHJcbmNvbnN0IGFwcGVuZEFsZXJ0ID0gKG1lc3NhZ2UsIHR5cGUpID0+IHtcclxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd3JhcHBlci5pbm5lckhUTUwgPSBbXHJcbiAgICBgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LSR7dHlwZX0gYWxlcnQtZGlzbWlzc2libGVcIiByb2xlPVwiYWxlcnRcIj5gLFxyXG4gICAgYCAgIDxkaXY+JHttZXNzYWdlfTwvZGl2PmAsXHJcbiAgICAnICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tY2xvc2VcIiBkYXRhLWJzLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPjwvYnV0dG9uPicsXHJcbiAgICAnPC9kaXY+JyxcclxuICBdLmpvaW4oJycpO1xyXG5cclxuICBhbGVydFBsYWNlaG9sZGVyLmFwcGVuZCh3cmFwcGVyKTtcclxufTtcclxuXHJcbmNvbnN0IGFsZXJ0VHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXZlQWxlcnRCdG4nKTtcclxuaWYgKGFsZXJ0VHJpZ2dlcikge1xyXG4gIGFsZXJ0VHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGFwcGVuZEFsZXJ0KCdMaW5zY3JpcHRpb24gZXN0IGVmZmVjdHXDqSBhdmVjIHN1Y2PDqHMnLCAnc3VjY2VzcycpO1xyXG4gIH0pO1xyXG59XHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19cclxuLy8gUGFydGkgTGFkamkgVGltw6lyYVxyXG5cclxuLy8gTWVuc3VhbGl0ZVxyXG5cclxub25TbmFwc2hvdChjZXJ0aWVzUmVmMiwgKHNuYXBzaG90KSA9PiB7XHJcbiAgbGV0IGNlcnRpZXNSZWYyID0gW107XHJcbiAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIGNlcnRpZXNSZWYyLnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xyXG4gIH0pO1xyXG4gIGNlcnRpZXNSZWYyLnNvcnQoKGEsIGIpID0+IGIuZGF0ZURham91dCAtIGEuZGF0ZURham91dCk7XHJcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teXRib2R5SW5zJyk7XHJcbiAgbGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgLy8gY29uc29sZS5sb2coY2VydGllc1JlZjIpO1xyXG4gIGNlcnRpZXNSZWYyLmZvckVhY2goKHV0aWxpKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15dGJvZHlJbnMnKTtcclxuICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuXHJcbiAgICB0ci5pbm5lckhUTUwgPSBgXHJcbiAgICA8dGQgY2xhc3M9XCJ0ZXh0LXN0YXJ0IHBzLTIgcHktMiBib3JkZXIgYm9yZGVyLTFcIj4ke1xyXG4gICAgICB1dGlsaS5wcmVub21cclxuICAgIH08L3RkPiA8dGQgY2xhc3M9XCJ0ZXh0LXN0YXJ0IHBzLTIgcHktMiBib3JkZXIgYm9yZGVyLTFcIj4ke1xyXG4gICAgICB1dGlsaS5ub21cclxuICAgIH08L3RkPiA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlciBweS0yIGJvcmRlciBib3JkZXItMVwiPiR7dXRpbGkubW9udGFudHBheS50b0xvY2FsZVN0cmluZyhcclxuICAgICAgJ2VuLVVTJ1xyXG4gICAgKX0gRmNmYTwvdGQ+YDtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQodHIpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teUZvcm0nKTtcclxuXHJcbm15Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICAvL0Fqb3V0ZXIgdW4gbm91dmVhdSBkb2N1bWVudCBhdmVjIHVuIGlkIGfDqW7DqXLDqVxyXG4gIGFkZERvYyhjZXJ0aWVzUmVmMiwge1xyXG4gICAgbm9tOiBteUZvcm0ubm9tLnZhbHVlLFxyXG4gICAgcHJlbm9tOiBteUZvcm0ucHJlbm9tLnZhbHVlLFxyXG4gICAgdHlwZTogbXlGb3JtLnR5cGUudmFsdWUsXHJcbiAgICBjbGFzc2U6IG15Rm9ybS5jbGFzc2VTZWxlY3QyLnZhbHVlLFxyXG4gICAgbW9udGFudHBheTogbXlGb3JtLm1vbnRhbnRBUGF5ZS52YWx1ZSxcclxuICAgIGRhdGVEYWpvdXQ6IHNlcnZlclRpbWVzdGFtcCgpLFxyXG4gIH0pLnRoZW4oKCkgPT4gbXlGb3JtLnJlc2V0KCkpO1xyXG59KTtcclxuLy8gTW9udGFudCDDoCBpbnNjcmlyZVxyXG5sZXQgc2VsZWN0RWxlbWVudDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xhc3NlU2VsZWN0MicpO1xyXG5zZWxlY3RFbGVtZW50Mi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IHNlbGVjdGVkT3B0aW9uID0gc2VsZWN0RWxlbWVudDIub3B0aW9uc1tzZWxlY3RFbGVtZW50Mi5zZWxlY3RlZEluZGV4XTtcclxuICBsZXQgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkT3B0aW9uLnZhbHVlO1xyXG4gIGNvbnNvbGUubG9nKHNlbGVjdGVkVmFsdWUpO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb250YW50QVBheWUnKS52YWx1ZSA9IG1vbnRhbnQyKHNlbGVjdGVkVmFsdWUpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIG1vbnRhbnQyKGNsYXNzZSkge1xyXG4gIGNvbnN0IG1vbnRhbnRNYXBwaW5nID0ge1xyXG4gICAgc2l6aWVtZTogMTAwMDAsXHJcbiAgICBjaW5xdWllbWU6IDE1MDAwLFxyXG4gICAgcXVhdHJpZW1lOiAyMDAwMCxcclxuICAgIHRyb2lzaWVtZTogMjUwMDAsXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIG1vbnRhbnRNYXBwaW5nW2NsYXNzZV0gfHwgMDtcclxufVxyXG5cclxuLy9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cclxuLy8gLy9wYXJ0aWUgcGFwZSBjaGVpa2hcclxuXHJcbm9uU25hcHNob3QoZWxldmUsIChzbmFwc2hvdCkgPT4ge1xyXG4gIGxldCBlbGV2ZSA9IFtdO1xyXG4gIHNuYXBzaG90LmRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBlbGV2ZS5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcclxuICB9KTtcclxuICBjb25zdCByZXZlbnVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldmVudWUnKTtcclxuICByZXZlbnVlLmlubmVySFRNTCA9ICcnXHJcbiAgZWxldmUuZm9yRWFjaCgodXRpbGkpID0+IHtcclxuICAgIGxldCB0cmJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgdHJib2R5LmlubmVySFRNTCA9IGBcclxuICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIGJvcmRlci0xXCI+JHt1dGlsaS5kYXRlRGFqb3V0LnRvRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4ke3V0aWxpLnR5cGV9PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlciBib3JkZXIgYm9yZGVyLTFcIj4ke3V0aWxpLnByZW5vbX0gJHtcclxuICAgICAgdXRpbGkubm9tXHJcbiAgICB9PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgYm9yZGVyLTFcIj4ke3V0aWxpLm1vbnRhbnRJbnNjLnRvTG9jYWxlU3RyaW5nKFxyXG4gICAgICAgICAgJ2VuLVVTJ1xyXG4gICAgICAgICl9IEZjZmE8L3RkPlxyXG4gICAgICAgIGA7XHJcbiAgICByZXZlbnVlLmFwcGVuZENoaWxkKHRyYm9keSk7XHJcbiAgfSk7XHJcbn0pO1xyXG5vblNuYXBzaG90KGNlcnRpZXNSZWYyLCAoc25hcHNob3QpID0+IHtcclxuICBsZXQgY2VydGllc1JlZjIgPSBbXTtcclxuICBzbmFwc2hvdC5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgY2VydGllc1JlZjIucHVzaCh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSk7XHJcbiAgfSk7XHJcbiAgY29uc3QgbWVucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW5zJyk7XHJcbiAgbWVucy5pbm5lckhUTUwgPSAnJ1xyXG4gIGNlcnRpZXNSZWYyLnNvcnQoKGEsIGIpID0+IGIuZGF0ZURham91dCAtIGEuZGF0ZURham91dCk7XHJcblxyXG5cclxuXHJcbiAgY2VydGllc1JlZjIuZm9yRWFjaCgodXRpbGkpID0+IHtcclxuICAgIGxldCB0cmJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xyXG4gICAgdHJib2R5LmlubmVySFRNTCA9IGBcclxuICAgICAgPHRkIGNsYXNzPVwiYm9yZGVyIGJvcmRlci0xXCI+JHt1dGlsaS5kYXRlRGFqb3V0XHJcbiAgICAgICAgLnRvRGF0ZSgpXHJcbiAgICAgICAgLnRvTG9jYWxlRGF0ZVN0cmluZygpfTwvdGQ+XHJcbiAgICAgICAgPHRkIGNsYXNzPVwidGV4dC1jZW50ZXJcIj4ke3V0aWxpLnR5cGV9PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJ0ZXh0LWNlbnRlciBib3JkZXIgYm9yZGVyLTFcIj4ke3V0aWxpLnByZW5vbX0gJHtcclxuICAgICAgdXRpbGkubm9tXHJcbiAgICB9PC90ZD5cclxuICAgICAgICA8dGQgY2xhc3M9XCJib3JkZXIgYm9yZGVyLTFcIj4ke3V0aWxpLm1vbnRhbnRwYXl9RmNmYTwvdGQ+XHJcbiAgICAgICAgYDtcclxuICAgIG1lbnMuYXBwZW5kQ2hpbGQodHJib2R5KTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh1dGlsaS50eXBlKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5nZXREb2NzKGVsZXZlKS50aGVuKChzbmFwc2hvdCkgPT4ge1xyXG4gIGxldCBlbGV2ZSA9IFtdO1xyXG4gIHNuYXBzaG90LmRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBlbGV2ZS5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcclxuICB9KTtcclxuICBsZXQgdG90YWxJbnNjcmlwdGlvbiA9IDA7XHJcbiAgZWxldmUuZm9yRWFjaCgodXRpbGkpID0+IHtcclxuICAgIHRvdGFsSW5zY3JpcHRpb24gKz0gcGFyc2VJbnQodXRpbGkubW9udGFudEluc2MpO1xyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKHRvdGFsSW5zY3JpcHRpb24pO1xyXG59KTtcclxuXHJcbmdldERvY3MoY2VydGllc1JlZjIpLnRoZW4oKHNuYXBzaG90KSA9PiB7XHJcbiAgbGV0IGNlcnRpZXNSZWYyID0gW107XHJcbiAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgIGNlcnRpZXNSZWYyLnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xyXG4gIH0pO1xyXG4gIGxldCB0b3RhbENlcnRpZVJlZjIgPSAwO1xyXG4gIGNlcnRpZXNSZWYyLmZvckVhY2goKHV0aWxpKSA9PiB7XHJcbiAgICB0b3RhbENlcnRpZVJlZjIgKz0gcGFyc2VJbnQodXRpbGkubW9udGFudHBheSk7XHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2codG90YWxDZXJ0aWVSZWYyKTtcclxufSk7XHJcblxyXG4vLyBjb25zb2xlLmxvZyh0b3RhbCk7XHJcblxyXG5mdW5jdGlvbiB0b3RhbEdsb2JhbChkYXRhKSB7XHJcbiAgcmV0dXJuIGdldERvY3MoZGF0YSkudGhlbigoc25hcHNob3QpID0+IHtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG4gICAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgaXRlbXMucHVzaCh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpdGVtcztcclxuICB9KTtcclxufVxyXG5cclxuUHJvbWlzZS5hbGwoW3RvdGFsR2xvYmFsKGVsZXZlKSwgdG90YWxHbG9iYWwoY2VydGllc1JlZjIpXSlcclxuICAudGhlbigoW2VsZXZlRGF0YSwgY2VydGllc1JlZjJEYXRhXSkgPT4ge1xyXG4gICAgbGV0IHRvdGFsSW5zY3JpcHRpb24gPSBlbGV2ZURhdGEucmVkdWNlKFxyXG4gICAgICAodG90YWwsIHV0aWxpKSA9PiB0b3RhbCArIHBhcnNlSW50KHV0aWxpLm1vbnRhbnRJbnNjKSxcclxuICAgICAgMFxyXG4gICAgKTtcclxuICAgIGxldCB0b3RhbENlcnRpZVJlZjIgPSBjZXJ0aWVzUmVmMkRhdGEucmVkdWNlKFxyXG4gICAgICAodG90YWwsIHV0aWxpKSA9PiB0b3RhbCArIHBhcnNlSW50KHV0aWxpLm1vbnRhbnRwYXkpLFxyXG4gICAgICAwXHJcbiAgICApO1xyXG5cclxuICAgIGxldCB0b3RhbGVEdVJldmVudSA9IHRvdGFsSW5zY3JpcHRpb24gKyB0b3RhbENlcnRpZVJlZjI7XHJcblxyXG4gICAgLy9DYWxjdWxlIGR1IHJldmVudWUgdG90YWxcclxuZnVuY3Rpb24gQ2FsY3VsRGVMYVNvbW1lVG90YWxlKCkge1xyXG4gIFxyXG4gIGNvbnN0IHRvdGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsJyk7XHJcbiAgdG90YWwuaW5uZXJIVE1MID0gJyc7XHJcbiAgbGV0IHRyZm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgdHJmb290LmlubmVySFRNTCA9IGBcclxuICAgIDx0ZCBjb2xzcGFuPVwiM1wiPjxiPlRvdGFsPC9iPjwvdGQ+XHJcbiAgICA8dGQ+PGI+JHt0b3RhbGVEdVJldmVudS50b0xvY2FsZVN0cmluZygnZW4tVVMnKX0gRmNmYSA8L2I+PC90ZD5cclxuICAgIGA7XHJcbiAgdG90YWwuYXBwZW5kQ2hpbGQodHJmb290KTtcclxuICBjb25zdCByZXZUb3RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXZlbnVUb3RhbCcpO1xyXG4gIHJldlRvdGFsLmlubmVySFRNTCA9IGAke3RvdGFsZUR1UmV2ZW51LnRvTG9jYWxlU3RyaW5nKFxyXG4gICAgJ2VuLVVTJ1xyXG4gICl9IDxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkZDRkE8L3NwYW4+YDtcclxuICBjb25zb2xlLmxvZygnVG90YWwgZ2xvYmFsOicsIHRvdGFsZUR1UmV2ZW51KTtcclxufVxyXG5DYWxjdWxEZUxhU29tbWVUb3RhbGUoKVxyXG59KVxyXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJVbmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlIDpcIiwgZXJyb3IpO1xyXG4gIH0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pagesJS/compta.js\n");

/***/ })

}]);