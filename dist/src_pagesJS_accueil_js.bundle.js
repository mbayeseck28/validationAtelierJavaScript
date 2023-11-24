"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_accueil_js"],{

/***/ "./src/pagesJS/accueil.js":
/*!********************************!*\
  !*** ./src/pagesJS/accueil.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n// Import the functions you need from the SDKs you need\r\n\r\n// Importation des  services\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Your web app's Firebase configuration\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\r\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\r\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\r\n  projectId: \"validation-atelier-js\",\r\n  storageBucket: \"validation-atelier-js.appspot.com\",\r\n  messagingSenderId: \"466332062090\",\r\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\",\r\n};\r\n// Initialize Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(app);\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(app);\r\n\r\n/************     Profil Navbar       ***********/\r\n(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(auth, (user) => {\r\n  if (user) {\r\n    // console.log(\"Utilisateur connecté\");\r\n    var userEmail = user.email;\r\n    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"utilisateurs\");\r\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(userRef, (snapshot) => {\r\n      let userRef = [];\r\n      snapshot.docs.forEach((doc) => {\r\n        userRef.push({ ...doc.data(), id: doc.id });\r\n      });\r\n      userRef.forEach((utilisateur) => {\r\n        // Créez une référence au document de l'utilisateur dans Firestore\r\n        const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(db, \"utilisateurs\", utilisateur.id);\r\n\r\n        if (utilisateur.email == userEmail) {\r\n          const ProfilNav = document.querySelector(\".ProfilNav\");\r\n          const profilVoir = document.querySelector(\".profilVoir\");\r\n          const nomUser = document.querySelector(\".nomUser\");\r\n          const statusUser = document.querySelector(\".statusUser\");\r\n          ProfilNav.src = utilisateur.url;\r\n          profilVoir.src = utilisateur.url;\r\n          nomUser.innerText = utilisateur.prenom + \" \" + utilisateur.nom;\r\n          statusUser.innerText = utilisateur.status;\r\n        }\r\n      });\r\n    });\r\n  } else {\r\n    console.log(\"Aucun utilisateur connecté\");\r\n    window.location.href = \"../../pages/auth/login/login.html\";\r\n  }\r\n});\r\n\r\n/************     DECONNEXION       ***********/\r\nconst btnDeconnexion = document.getElementById(\"btnDeconnexion\");\r\nconst signOutButtonPressed = async (e) => {\r\n  e.preventDefault();\r\n  try {\r\n    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(auth);\r\n    console.log(\"Deconnecté\");\r\n    window.location.href = \"../../pages/auth/login/login.html\";\r\n  } catch (error) {\r\n    console.log(error.code);\r\n  }\r\n};\r\nbtnDeconnexion.addEventListener(\"click\", signOutButtonPressed);\r\n\r\n// Récupérer la collection\r\nconst eleve = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"inscScolarite\");\r\nconst certiesRef2 = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"mensualites\");\r\n\r\nconst effectif6 = document.getElementById(\"effectif6\");\r\nconst effectif5 = document.getElementById(\"effectif5\");\r\nconst effectif4 = document.getElementById(\"effectif4\");\r\nconst effectif3 = document.getElementById(\"effectif3\");\r\n\r\nlet paiement6 = document.getElementById(\"paiement6\");\r\nlet paiement5 = document.getElementById(\"paiement5\");\r\nlet paiement4 = document.getElementById(\"paiement4\");\r\nlet paiement3 = document.getElementById(\"paiement3\");\r\n\r\nlet effectifClass6;\r\nlet effectifClass5;\r\nlet effectifClass4;\r\nlet effectifClass3;\r\nlet noPay;\r\n\r\n\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(eleve, (snapshot) => {\r\n  let eleves = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    eleves.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  eleves.sort((a, b) => b.dateDajout - a.dateDajout);\r\n\r\n  noPay = eleves;\r\n  // console.log(eleves);\r\n  effectifClass6 = eleves.filter((utili) => utili.classe === \"6ème\").length;\r\n  effectifClass5 = eleves.filter((utili) => utili.classe === \"5ème\").length;\r\n  effectifClass4 = eleves.filter((utili) => utili.classe === \"4ème\").length;\r\n  effectifClass3 = eleves.filter((utili) => utili.classe === \"3ème\").length;\r\n\r\n  effectif6.innerHTML = effectifClass6;\r\n  effectif5.innerHTML = effectifClass5;\r\n  effectif4.innerHTML = effectifClass4;\r\n  effectif3.innerHTML = effectifClass3;\r\n});\r\n\r\nconst selectMois = document.getElementById(\"selectMois\");\r\nconsole.log(selectMois.value);\r\n\r\nselectMois.addEventListener(\"change\", () => {\r\n  paiementMensualiter();\r\n});\r\n\r\nfunction getMensualiter() {\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(certiesRef2, (snapshot) => {\r\n    const moisSelectionne = selectMois.value;\r\n    let certiesRef2 = [];\r\n    snapshot.docs.forEach((doc) => {\r\n      certiesRef2.push({ ...doc.data(), id: doc.id });\r\n    });\r\n    certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);\r\n\r\n    const PaiementsEffec = certiesRef2.filter(\r\n      (utili) => utili.classe === \"6ème\" && utili.mois === moisSelectionne\r\n    );\r\n\r\n    const PaiementsEffe5 = certiesRef2.filter(\r\n      (utili) => utili.classe === \"5ème\" && utili.mois === moisSelectionne\r\n    );\r\n    const PaiementsEffe4 = certiesRef2.filter(\r\n      (utili) => utili.classe === \"4ème\" && utili.mois === moisSelectionne\r\n    );\r\n    const PaiementsEffe3 = certiesRef2.filter(\r\n      (utili) => utili.classe === \"3ème\" && utili.mois === moisSelectionne\r\n    );\r\n\r\n    const tousElevesClasse6 = noPay.filter((eleve) => eleve.classe === \"6ème\");\r\n    const tousElevesClasse5 = noPay.filter((eleve) => eleve.classe === \"5ème\");\r\n    const tousElevesClasse4 = noPay.filter((eleve) => eleve.classe === \"4ème\");\r\n    const tousElevesClasse3 = noPay.filter((eleve) => eleve.classe === \"3ème\");\r\n\r\n    const elevesNonPayesClasse6 = tousElevesClasse6.filter((eleve) => {\r\n      return !PaiementsEffec.some((pai) => pai.prenom === eleve.prenom);\r\n    });\r\n    const elevesNonPayesClasse5 = tousElevesClasse5.filter((eleve) => {\r\n      return !PaiementsEffe5.some((pai) => pai.prenom === eleve.prenom);\r\n    });\r\n    const elevesNonPayesClasse4 = tousElevesClasse4.filter((eleve) => {\r\n      return !PaiementsEffe4.some((pai) => pai.prenom === eleve.prenom);\r\n    });\r\n    const elevesNonPayesClasse3 = tousElevesClasse3.filter((eleve) => {\r\n      return !PaiementsEffe3.some((pai) => pai.prenom === eleve.prenom);\r\n    });\r\n\r\n    const list = document.querySelector(\"#list\");\r\n    const list5 = document.querySelector(\"#list1\");\r\n    const list4 = document.querySelector(\"#list2\");\r\n    const list3 = document.querySelector(\"#list3\");\r\n\r\n    afficheEleves(list, elevesNonPayesClasse6, PaiementsEffec);\r\n    afficheEleves(list5, elevesNonPayesClasse5, PaiementsEffe5);\r\n    afficheEleves(list4, elevesNonPayesClasse4, PaiementsEffe4);\r\n    afficheEleves(list3, elevesNonPayesClasse3, PaiementsEffe3);\r\n    \r\n    paiement6.innerHTML = `${\r\n      Math.round((PaiementsEffec.length / effectifClass6) * 100) + \"%\"\r\n    }`;\r\n    paiement5.innerHTML =\r\n      Math.round((PaiementsEffe5.length / effectifClass5) * 100) + \"%\";\r\n    paiement4.innerHTML =\r\n      Math.round((PaiementsEffe4.length / effectifClass4) * 100) + \"%\";\r\n    paiement3.innerHTML =\r\n      Math.round((PaiementsEffe3.length / effectifClass3) * 100) + \"%\";\r\n\r\n    let sum =\r\n      parseFloat(paiement6.innerHTML) +\r\n      parseFloat(paiement5.innerHTML) +\r\n      parseFloat(paiement4.innerHTML) +\r\n      parseFloat(paiement3.innerHTML);\r\n\r\n    sum = sum / 4;\r\n    sum = sum.toFixed(0);\r\n    progressBar(sum);\r\n  });\r\n}\r\n\r\nfunction afficheEleves(listElement, nonPayments, payments) {\r\n  listElement.innerHTML = \"\";\r\n\r\n  nonPayments.forEach((nonPayment) => {\r\n    const tr = document.createElement(\"tr\");\r\n    tr.innerHTML = `\r\n    <td class=\"mx-auto text-center m-0\">${nonPayment.nom}</td>\r\n    <td class=\"mx-auto text-center m-0\">${nonPayment.prenom}</td>\r\n    <td class=\"mx-auto text-center m-0\">Non payé</td>\r\n    `;\r\n    listElement.appendChild(tr);\r\n  });\r\n\r\n  payments.forEach((payment) => {\r\n    const tr = document.createElement(\"tr\");\r\n    tr.innerHTML = `\r\n    <td class=\"mx-auto text-center m-0\">${payment.nom}</td>\r\n    <td class=\"mx-auto text-center m-0\">${payment.prenom}</td>\r\n    <td class=\"mx-auto text-center m-0\">Payé</td>\r\n    `;\r\n    listElement.appendChild(tr);\r\n  });\r\n}\r\n\r\nfunction paiementMensualiter() {\r\n  getMensualiter();\r\n}\r\npaiementMensualiter();\r\n\r\nfunction progressBar(sum) {\r\n  let circularProgress = document.querySelector(\".circular-progress\");\r\n  let progressValue = document.querySelector(\".progress-value\");\r\n\r\n  let progressStartValue = 0;\r\n  let progressEndValue = typeof sum !== \"undefined\" ? sum : 0;\r\n  let speed = 70;\r\n\r\n  if (isNaN(sum)) {\r\n  } else if (sum === \"0\") {\r\n    progressStartValue = 0;\r\n    progressValue.textContent = `${progressStartValue}%`;\r\n    circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${\r\n      progressStartValue * 3.6\r\n    }deg, #ededed 0deg)`;\r\n  } else if (!isNaN(sum) && sum !== \"0\") {\r\n    let progress = setInterval(() => {\r\n      progressStartValue++;\r\n\r\n      progressValue.textContent = `${progressStartValue}%`;\r\n      circularProgress.style.background = `conic-gradient(rgb(32, 215, 32) ${\r\n        progressStartValue * 3.6\r\n      }deg, #ededed 0deg)`;\r\n\r\n      if (progressStartValue == progressEndValue) {\r\n        clearInterval(progress);\r\n      }\r\n    }, speed);\r\n    // console.log(moisSelectionne, sum);\r\n  }\r\n}\r\n\r\n// partie ladji HISTORIQUE\r\nlet date = new Date();\r\nlet year = date.getFullYear();\r\nlet month = date.getMonth() + 1;\r\nlet day = date.getDate();\r\n\r\nconst myTbody1 = document.querySelector(\".myTd1\");\r\nconst myTbody2 = document.querySelector(\".myTd2\");\r\nconst totalIns = document.querySelector(\".totalIns\");\r\nconst totalMens = document.querySelector(\".totalMens\");\r\n\r\nmyTbody1.innerHTML = `<span>${day}</span><span>/${month}<sapn>/${year}</span>`;\r\nmyTbody2.innerHTML = `<span>${day}</span><span>/${month}<sapn>/${year}</span>`;\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(eleve).then((snapshot) => {\r\n  let eleve = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    eleve.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  let totalInscription = 0;\r\n  eleve.forEach((utili) => {\r\n    totalInscription += parseInt(utili.montantInsc);\r\n  });\r\n\r\n  totalIns.innerHTML = `<b>${totalInscription.toLocaleString(\r\n    \"en-US\"\r\n  )} Fcfa</b>`;\r\n});\r\n\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)(certiesRef2).then((snapshot) => {\r\n  let certiesRef2 = [];\r\n  snapshot.docs.forEach((doc) => {\r\n    certiesRef2.push({ ...doc.data(), id: doc.id });\r\n  });\r\n  let totalMensualiter = 0;\r\n  certiesRef2.forEach((utili) => {\r\n    totalMensualiter += parseInt(utili.montantpay);\r\n  });\r\n\r\n  // console.log(certiesRef2);\r\n  totalMens.innerHTML = `<b>${totalMensualiter.toLocaleString(\r\n    \"en-US\"\r\n  )} Fcfa</b>`;\r\n});\r\n\r\nlet sidebar = document.querySelector(\".sidebar\");\r\nlet closeBtn = document.querySelector(\"#btn\");\r\nlet menu = document.querySelector(\"#menu\");\r\nlet myContain = document.querySelector(\".myContain\");\r\nmenu.style.color = \"#ffffff7e\";\r\n\r\ncloseBtn.addEventListener(\"click\", () => {\r\n  sidebar.classList.toggle(\"open\");\r\n  myContain.classList.toggle(\"col-md-10\");\r\n  myContain.classList.toggle(\"offset-md-1\");\r\n  myContain.classList.toggle(\"col-md-9\");\r\n  myContain.classList.toggle(\"col-lg-9\");\r\n  myContain.classList.toggle(\"offset-md-3\", \"bg-dark\");\r\n  myContain.classList.toggle(\"offset-lg-3\");\r\n  myContain.classList.toggle(\"mx-md-none\");\r\n  myContain.classList.toggle(\"mx-md-auto\");\r\n});\r\n\r\nmenu.addEventListener(\"click\", () => {\r\n  if (sidebar.classList.contains(\"displayBlock\")) {\r\n    sidebar.classList.remove(\"displayBlock\");\r\n    sidebar.style.display = \"none\";\r\n    menu.style.marginLeft = \"0px\";\r\n  } else {\r\n    sidebar.classList.add(\"displayBlock\");\r\n    sidebar.style.display = \"block\";\r\n    closeBtn.style.display = \"none\";\r\n    menu.style.marginLeft = \"150px\";\r\n  }\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9hY2N1ZWlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWxpZGF0aW9uYXRlbGllcmpzLy4vc3JjL3BhZ2VzSlMvYWNjdWVpbC5qcz8zMzU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuLy8gSW1wb3J0YXRpb24gZGVzICBzZXJ2aWNlc1xyXG5pbXBvcnQgeyBnZXRTdG9yYWdlLCByZWYsIHVwbG9hZEJ5dGVzLCBnZXREb3dubG9hZFVSTCB9IGZyb20gXCJmaXJlYmFzZS9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGdldERhdGFiYXNlLCByZWYgYXMgcmVmRGF0YWJhc2UsIHNldCwgZ2V0IH0gZnJvbSBcImZpcmViYXNlL2RhdGFiYXNlXCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0QXV0aCxcclxuICBzaWduT3V0LFxyXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbiAgdXBkYXRlUHJvZmlsZSxcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBkb2MsXHJcbiAgdXBkYXRlRG9jLFxyXG4gIGFkZERvYyxcclxuICBjb2xsZWN0aW9uLFxyXG4gIGRvY3VtZW50SWQsXHJcbiAgZ2V0RG9jcyxcclxuICBnZXRGaXJlc3RvcmUsXHJcbiAgb25TbmFwc2hvdCxcclxuICBzZXJ2ZXJUaW1lc3RhbXAsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxyXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuICBhcGlLZXk6IFwiQUl6YVN5Q1NSbzJFWndvNUxRSU83NUZldklCdkVLYkRENjFITnVZXCIsXHJcbiAgYXV0aERvbWFpbjogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanMuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgZGF0YWJhc2VVUkw6IFwiaHR0cHM6Ly92YWxpZGF0aW9uLWF0ZWxpZXItanMtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tXCIsXHJcbiAgcHJvamVjdElkOiBcInZhbGlkYXRpb24tYXRlbGllci1qc1wiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzLmFwcHNwb3QuY29tXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNDY2MzMyMDYyMDkwXCIsXHJcbiAgYXBwSWQ6IFwiMTo0NjYzMzIwNjIwOTA6d2ViOmZmYmU0NWVmNGE3MzcxYTdiNWI4NzNcIixcclxufTtcclxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuXHJcbi8qKioqKioqKioqKiogICAgIFByb2ZpbCBOYXZiYXIgICAgICAgKioqKioqKioqKiovXHJcbm9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4ge1xyXG4gIGlmICh1c2VyKSB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhcIlV0aWxpc2F0ZXVyIGNvbm5lY3TDqVwiKTtcclxuICAgIHZhciB1c2VyRW1haWwgPSB1c2VyLmVtYWlsO1xyXG4gICAgY29uc3QgdXNlclJlZiA9IGNvbGxlY3Rpb24oZGIsIFwidXRpbGlzYXRldXJzXCIpO1xyXG4gICAgb25TbmFwc2hvdCh1c2VyUmVmLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgbGV0IHVzZXJSZWYgPSBbXTtcclxuICAgICAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICB1c2VyUmVmLnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgdXNlclJlZi5mb3JFYWNoKCh1dGlsaXNhdGV1cikgPT4ge1xyXG4gICAgICAgIC8vIENyw6lleiB1bmUgcsOpZsOpcmVuY2UgYXUgZG9jdW1lbnQgZGUgbCd1dGlsaXNhdGV1ciBkYW5zIEZpcmVzdG9yZVxyXG4gICAgICAgIGNvbnN0IHVzZXJEb2NSZWYgPSBkb2MoZGIsIFwidXRpbGlzYXRldXJzXCIsIHV0aWxpc2F0ZXVyLmlkKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxpc2F0ZXVyLmVtYWlsID09IHVzZXJFbWFpbCkge1xyXG4gICAgICAgICAgY29uc3QgUHJvZmlsTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Qcm9maWxOYXZcIik7XHJcbiAgICAgICAgICBjb25zdCBwcm9maWxWb2lyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxWb2lyXCIpO1xyXG4gICAgICAgICAgY29uc3Qgbm9tVXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm9tVXNlclwiKTtcclxuICAgICAgICAgIGNvbnN0IHN0YXR1c1VzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXR1c1VzZXJcIik7XHJcbiAgICAgICAgICBQcm9maWxOYXYuc3JjID0gdXRpbGlzYXRldXIudXJsO1xyXG4gICAgICAgICAgcHJvZmlsVm9pci5zcmMgPSB1dGlsaXNhdGV1ci51cmw7XHJcbiAgICAgICAgICBub21Vc2VyLmlubmVyVGV4dCA9IHV0aWxpc2F0ZXVyLnByZW5vbSArIFwiIFwiICsgdXRpbGlzYXRldXIubm9tO1xyXG4gICAgICAgICAgc3RhdHVzVXNlci5pbm5lclRleHQgPSB1dGlsaXNhdGV1ci5zdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkF1Y3VuIHV0aWxpc2F0ZXVyIGNvbm5lY3TDqVwiKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIuLi8uLi9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLmh0bWxcIjtcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqKioqKioqKioqKiAgICAgREVDT05ORVhJT04gICAgICAgKioqKioqKioqKiovXHJcbmNvbnN0IGJ0bkRlY29ubmV4aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5EZWNvbm5leGlvblwiKTtcclxuY29uc3Qgc2lnbk91dEJ1dHRvblByZXNzZWQgPSBhc3luYyAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgc2lnbk91dChhdXRoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiRGVjb25uZWN0w6lcIik7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiLi4vLi4vcGFnZXMvYXV0aC9sb2dpbi9sb2dpbi5odG1sXCI7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLmNvZGUpO1xyXG4gIH1cclxufTtcclxuYnRuRGVjb25uZXhpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNpZ25PdXRCdXR0b25QcmVzc2VkKTtcclxuXHJcbi8vIFLDqWN1cMOpcmVyIGxhIGNvbGxlY3Rpb25cclxuY29uc3QgZWxldmUgPSBjb2xsZWN0aW9uKGRiLCBcImluc2NTY29sYXJpdGVcIik7XHJcbmNvbnN0IGNlcnRpZXNSZWYyID0gY29sbGVjdGlvbihkYiwgXCJtZW5zdWFsaXRlc1wiKTtcclxuXHJcbmNvbnN0IGVmZmVjdGlmNiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWZmZWN0aWY2XCIpO1xyXG5jb25zdCBlZmZlY3RpZjUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVmZmVjdGlmNVwiKTtcclxuY29uc3QgZWZmZWN0aWY0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZmZlY3RpZjRcIik7XHJcbmNvbnN0IGVmZmVjdGlmMyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWZmZWN0aWYzXCIpO1xyXG5cclxubGV0IHBhaWVtZW50NiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFpZW1lbnQ2XCIpO1xyXG5sZXQgcGFpZW1lbnQ1ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWllbWVudDVcIik7XHJcbmxldCBwYWllbWVudDQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhaWVtZW50NFwiKTtcclxubGV0IHBhaWVtZW50MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFpZW1lbnQzXCIpO1xyXG5cclxubGV0IGVmZmVjdGlmQ2xhc3M2O1xyXG5sZXQgZWZmZWN0aWZDbGFzczU7XHJcbmxldCBlZmZlY3RpZkNsYXNzNDtcclxubGV0IGVmZmVjdGlmQ2xhc3MzO1xyXG5sZXQgbm9QYXk7XHJcblxyXG5cclxuXHJcbm9uU25hcHNob3QoZWxldmUsIChzbmFwc2hvdCkgPT4ge1xyXG4gIGxldCBlbGV2ZXMgPSBbXTtcclxuICBzbmFwc2hvdC5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgZWxldmVzLnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xyXG4gIH0pO1xyXG4gIGVsZXZlcy5zb3J0KChhLCBiKSA9PiBiLmRhdGVEYWpvdXQgLSBhLmRhdGVEYWpvdXQpO1xyXG5cclxuICBub1BheSA9IGVsZXZlcztcclxuICAvLyBjb25zb2xlLmxvZyhlbGV2ZXMpO1xyXG4gIGVmZmVjdGlmQ2xhc3M2ID0gZWxldmVzLmZpbHRlcigodXRpbGkpID0+IHV0aWxpLmNsYXNzZSA9PT0gXCI2w6htZVwiKS5sZW5ndGg7XHJcbiAgZWZmZWN0aWZDbGFzczUgPSBlbGV2ZXMuZmlsdGVyKCh1dGlsaSkgPT4gdXRpbGkuY2xhc3NlID09PSBcIjXDqG1lXCIpLmxlbmd0aDtcclxuICBlZmZlY3RpZkNsYXNzNCA9IGVsZXZlcy5maWx0ZXIoKHV0aWxpKSA9PiB1dGlsaS5jbGFzc2UgPT09IFwiNMOobWVcIikubGVuZ3RoO1xyXG4gIGVmZmVjdGlmQ2xhc3MzID0gZWxldmVzLmZpbHRlcigodXRpbGkpID0+IHV0aWxpLmNsYXNzZSA9PT0gXCIzw6htZVwiKS5sZW5ndGg7XHJcblxyXG4gIGVmZmVjdGlmNi5pbm5lckhUTUwgPSBlZmZlY3RpZkNsYXNzNjtcclxuICBlZmZlY3RpZjUuaW5uZXJIVE1MID0gZWZmZWN0aWZDbGFzczU7XHJcbiAgZWZmZWN0aWY0LmlubmVySFRNTCA9IGVmZmVjdGlmQ2xhc3M0O1xyXG4gIGVmZmVjdGlmMy5pbm5lckhUTUwgPSBlZmZlY3RpZkNsYXNzMztcclxufSk7XHJcblxyXG5jb25zdCBzZWxlY3RNb2lzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3RNb2lzXCIpO1xyXG5jb25zb2xlLmxvZyhzZWxlY3RNb2lzLnZhbHVlKTtcclxuXHJcbnNlbGVjdE1vaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XHJcbiAgcGFpZW1lbnRNZW5zdWFsaXRlcigpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldE1lbnN1YWxpdGVyKCkge1xyXG4gIG9uU25hcHNob3QoY2VydGllc1JlZjIsIChzbmFwc2hvdCkgPT4ge1xyXG4gICAgY29uc3QgbW9pc1NlbGVjdGlvbm5lID0gc2VsZWN0TW9pcy52YWx1ZTtcclxuICAgIGxldCBjZXJ0aWVzUmVmMiA9IFtdO1xyXG4gICAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgY2VydGllc1JlZjIucHVzaCh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSk7XHJcbiAgICB9KTtcclxuICAgIGNlcnRpZXNSZWYyLnNvcnQoKGEsIGIpID0+IGIuZGF0ZURham91dCAtIGEuZGF0ZURham91dCk7XHJcblxyXG4gICAgY29uc3QgUGFpZW1lbnRzRWZmZWMgPSBjZXJ0aWVzUmVmMi5maWx0ZXIoXHJcbiAgICAgICh1dGlsaSkgPT4gdXRpbGkuY2xhc3NlID09PSBcIjbDqG1lXCIgJiYgdXRpbGkubW9pcyA9PT0gbW9pc1NlbGVjdGlvbm5lXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IFBhaWVtZW50c0VmZmU1ID0gY2VydGllc1JlZjIuZmlsdGVyKFxyXG4gICAgICAodXRpbGkpID0+IHV0aWxpLmNsYXNzZSA9PT0gXCI1w6htZVwiICYmIHV0aWxpLm1vaXMgPT09IG1vaXNTZWxlY3Rpb25uZVxyXG4gICAgKTtcclxuICAgIGNvbnN0IFBhaWVtZW50c0VmZmU0ID0gY2VydGllc1JlZjIuZmlsdGVyKFxyXG4gICAgICAodXRpbGkpID0+IHV0aWxpLmNsYXNzZSA9PT0gXCI0w6htZVwiICYmIHV0aWxpLm1vaXMgPT09IG1vaXNTZWxlY3Rpb25uZVxyXG4gICAgKTtcclxuICAgIGNvbnN0IFBhaWVtZW50c0VmZmUzID0gY2VydGllc1JlZjIuZmlsdGVyKFxyXG4gICAgICAodXRpbGkpID0+IHV0aWxpLmNsYXNzZSA9PT0gXCIzw6htZVwiICYmIHV0aWxpLm1vaXMgPT09IG1vaXNTZWxlY3Rpb25uZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0b3VzRWxldmVzQ2xhc3NlNiA9IG5vUGF5LmZpbHRlcigoZWxldmUpID0+IGVsZXZlLmNsYXNzZSA9PT0gXCI2w6htZVwiKTtcclxuICAgIGNvbnN0IHRvdXNFbGV2ZXNDbGFzc2U1ID0gbm9QYXkuZmlsdGVyKChlbGV2ZSkgPT4gZWxldmUuY2xhc3NlID09PSBcIjXDqG1lXCIpO1xyXG4gICAgY29uc3QgdG91c0VsZXZlc0NsYXNzZTQgPSBub1BheS5maWx0ZXIoKGVsZXZlKSA9PiBlbGV2ZS5jbGFzc2UgPT09IFwiNMOobWVcIik7XHJcbiAgICBjb25zdCB0b3VzRWxldmVzQ2xhc3NlMyA9IG5vUGF5LmZpbHRlcigoZWxldmUpID0+IGVsZXZlLmNsYXNzZSA9PT0gXCIzw6htZVwiKTtcclxuXHJcbiAgICBjb25zdCBlbGV2ZXNOb25QYXllc0NsYXNzZTYgPSB0b3VzRWxldmVzQ2xhc3NlNi5maWx0ZXIoKGVsZXZlKSA9PiB7XHJcbiAgICAgIHJldHVybiAhUGFpZW1lbnRzRWZmZWMuc29tZSgocGFpKSA9PiBwYWkucHJlbm9tID09PSBlbGV2ZS5wcmVub20pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBlbGV2ZXNOb25QYXllc0NsYXNzZTUgPSB0b3VzRWxldmVzQ2xhc3NlNS5maWx0ZXIoKGVsZXZlKSA9PiB7XHJcbiAgICAgIHJldHVybiAhUGFpZW1lbnRzRWZmZTUuc29tZSgocGFpKSA9PiBwYWkucHJlbm9tID09PSBlbGV2ZS5wcmVub20pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBlbGV2ZXNOb25QYXllc0NsYXNzZTQgPSB0b3VzRWxldmVzQ2xhc3NlNC5maWx0ZXIoKGVsZXZlKSA9PiB7XHJcbiAgICAgIHJldHVybiAhUGFpZW1lbnRzRWZmZTQuc29tZSgocGFpKSA9PiBwYWkucHJlbm9tID09PSBlbGV2ZS5wcmVub20pO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBlbGV2ZXNOb25QYXllc0NsYXNzZTMgPSB0b3VzRWxldmVzQ2xhc3NlMy5maWx0ZXIoKGVsZXZlKSA9PiB7XHJcbiAgICAgIHJldHVybiAhUGFpZW1lbnRzRWZmZTMuc29tZSgocGFpKSA9PiBwYWkucHJlbm9tID09PSBlbGV2ZS5wcmVub20pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdFwiKTtcclxuICAgIGNvbnN0IGxpc3Q1ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0MVwiKTtcclxuICAgIGNvbnN0IGxpc3Q0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0MlwiKTtcclxuICAgIGNvbnN0IGxpc3QzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0M1wiKTtcclxuXHJcbiAgICBhZmZpY2hlRWxldmVzKGxpc3QsIGVsZXZlc05vblBheWVzQ2xhc3NlNiwgUGFpZW1lbnRzRWZmZWMpO1xyXG4gICAgYWZmaWNoZUVsZXZlcyhsaXN0NSwgZWxldmVzTm9uUGF5ZXNDbGFzc2U1LCBQYWllbWVudHNFZmZlNSk7XHJcbiAgICBhZmZpY2hlRWxldmVzKGxpc3Q0LCBlbGV2ZXNOb25QYXllc0NsYXNzZTQsIFBhaWVtZW50c0VmZmU0KTtcclxuICAgIGFmZmljaGVFbGV2ZXMobGlzdDMsIGVsZXZlc05vblBheWVzQ2xhc3NlMywgUGFpZW1lbnRzRWZmZTMpO1xyXG4gICAgXHJcbiAgICBwYWllbWVudDYuaW5uZXJIVE1MID0gYCR7XHJcbiAgICAgIE1hdGgucm91bmQoKFBhaWVtZW50c0VmZmVjLmxlbmd0aCAvIGVmZmVjdGlmQ2xhc3M2KSAqIDEwMCkgKyBcIiVcIlxyXG4gICAgfWA7XHJcbiAgICBwYWllbWVudDUuaW5uZXJIVE1MID1cclxuICAgICAgTWF0aC5yb3VuZCgoUGFpZW1lbnRzRWZmZTUubGVuZ3RoIC8gZWZmZWN0aWZDbGFzczUpICogMTAwKSArIFwiJVwiO1xyXG4gICAgcGFpZW1lbnQ0LmlubmVySFRNTCA9XHJcbiAgICAgIE1hdGgucm91bmQoKFBhaWVtZW50c0VmZmU0Lmxlbmd0aCAvIGVmZmVjdGlmQ2xhc3M0KSAqIDEwMCkgKyBcIiVcIjtcclxuICAgIHBhaWVtZW50My5pbm5lckhUTUwgPVxyXG4gICAgICBNYXRoLnJvdW5kKChQYWllbWVudHNFZmZlMy5sZW5ndGggLyBlZmZlY3RpZkNsYXNzMykgKiAxMDApICsgXCIlXCI7XHJcblxyXG4gICAgbGV0IHN1bSA9XHJcbiAgICAgIHBhcnNlRmxvYXQocGFpZW1lbnQ2LmlubmVySFRNTCkgK1xyXG4gICAgICBwYXJzZUZsb2F0KHBhaWVtZW50NS5pbm5lckhUTUwpICtcclxuICAgICAgcGFyc2VGbG9hdChwYWllbWVudDQuaW5uZXJIVE1MKSArXHJcbiAgICAgIHBhcnNlRmxvYXQocGFpZW1lbnQzLmlubmVySFRNTCk7XHJcblxyXG4gICAgc3VtID0gc3VtIC8gNDtcclxuICAgIHN1bSA9IHN1bS50b0ZpeGVkKDApO1xyXG4gICAgcHJvZ3Jlc3NCYXIoc3VtKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWZmaWNoZUVsZXZlcyhsaXN0RWxlbWVudCwgbm9uUGF5bWVudHMsIHBheW1lbnRzKSB7XHJcbiAgbGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgbm9uUGF5bWVudHMuZm9yRWFjaCgobm9uUGF5bWVudCkgPT4ge1xyXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICB0ci5pbm5lckhUTUwgPSBgXHJcbiAgICA8dGQgY2xhc3M9XCJteC1hdXRvIHRleHQtY2VudGVyIG0tMFwiPiR7bm9uUGF5bWVudC5ub219PC90ZD5cclxuICAgIDx0ZCBjbGFzcz1cIm14LWF1dG8gdGV4dC1jZW50ZXIgbS0wXCI+JHtub25QYXltZW50LnByZW5vbX08L3RkPlxyXG4gICAgPHRkIGNsYXNzPVwibXgtYXV0byB0ZXh0LWNlbnRlciBtLTBcIj5Ob24gcGF5w6k8L3RkPlxyXG4gICAgYDtcclxuICAgIGxpc3RFbGVtZW50LmFwcGVuZENoaWxkKHRyKTtcclxuICB9KTtcclxuXHJcbiAgcGF5bWVudHMuZm9yRWFjaCgocGF5bWVudCkgPT4ge1xyXG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICB0ci5pbm5lckhUTUwgPSBgXHJcbiAgICA8dGQgY2xhc3M9XCJteC1hdXRvIHRleHQtY2VudGVyIG0tMFwiPiR7cGF5bWVudC5ub219PC90ZD5cclxuICAgIDx0ZCBjbGFzcz1cIm14LWF1dG8gdGV4dC1jZW50ZXIgbS0wXCI+JHtwYXltZW50LnByZW5vbX08L3RkPlxyXG4gICAgPHRkIGNsYXNzPVwibXgtYXV0byB0ZXh0LWNlbnRlciBtLTBcIj5QYXnDqTwvdGQ+XHJcbiAgICBgO1xyXG4gICAgbGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQodHIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYWllbWVudE1lbnN1YWxpdGVyKCkge1xyXG4gIGdldE1lbnN1YWxpdGVyKCk7XHJcbn1cclxucGFpZW1lbnRNZW5zdWFsaXRlcigpO1xyXG5cclxuZnVuY3Rpb24gcHJvZ3Jlc3NCYXIoc3VtKSB7XHJcbiAgbGV0IGNpcmN1bGFyUHJvZ3Jlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNpcmN1bGFyLXByb2dyZXNzXCIpO1xyXG4gIGxldCBwcm9ncmVzc1ZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9ncmVzcy12YWx1ZVwiKTtcclxuXHJcbiAgbGV0IHByb2dyZXNzU3RhcnRWYWx1ZSA9IDA7XHJcbiAgbGV0IHByb2dyZXNzRW5kVmFsdWUgPSB0eXBlb2Ygc3VtICE9PSBcInVuZGVmaW5lZFwiID8gc3VtIDogMDtcclxuICBsZXQgc3BlZWQgPSA3MDtcclxuXHJcbiAgaWYgKGlzTmFOKHN1bSkpIHtcclxuICB9IGVsc2UgaWYgKHN1bSA9PT0gXCIwXCIpIHtcclxuICAgIHByb2dyZXNzU3RhcnRWYWx1ZSA9IDA7XHJcbiAgICBwcm9ncmVzc1ZhbHVlLnRleHRDb250ZW50ID0gYCR7cHJvZ3Jlc3NTdGFydFZhbHVlfSVgO1xyXG4gICAgY2lyY3VsYXJQcm9ncmVzcy5zdHlsZS5iYWNrZ3JvdW5kID0gYGNvbmljLWdyYWRpZW50KHJnYigzMiwgMjE1LCAzMikgJHtcclxuICAgICAgcHJvZ3Jlc3NTdGFydFZhbHVlICogMy42XHJcbiAgICB9ZGVnLCAjZWRlZGVkIDBkZWcpYDtcclxuICB9IGVsc2UgaWYgKCFpc05hTihzdW0pICYmIHN1bSAhPT0gXCIwXCIpIHtcclxuICAgIGxldCBwcm9ncmVzcyA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgcHJvZ3Jlc3NTdGFydFZhbHVlKys7XHJcblxyXG4gICAgICBwcm9ncmVzc1ZhbHVlLnRleHRDb250ZW50ID0gYCR7cHJvZ3Jlc3NTdGFydFZhbHVlfSVgO1xyXG4gICAgICBjaXJjdWxhclByb2dyZXNzLnN0eWxlLmJhY2tncm91bmQgPSBgY29uaWMtZ3JhZGllbnQocmdiKDMyLCAyMTUsIDMyKSAke1xyXG4gICAgICAgIHByb2dyZXNzU3RhcnRWYWx1ZSAqIDMuNlxyXG4gICAgICB9ZGVnLCAjZWRlZGVkIDBkZWcpYDtcclxuXHJcbiAgICAgIGlmIChwcm9ncmVzc1N0YXJ0VmFsdWUgPT0gcHJvZ3Jlc3NFbmRWYWx1ZSkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwocHJvZ3Jlc3MpO1xyXG4gICAgICB9XHJcbiAgICB9LCBzcGVlZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtb2lzU2VsZWN0aW9ubmUsIHN1bSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBwYXJ0aWUgbGFkamkgSElTVE9SSVFVRVxyXG5sZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbmxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5sZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5sZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcblxyXG5jb25zdCBteVRib2R5MSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXlUZDFcIik7XHJcbmNvbnN0IG15VGJvZHkyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teVRkMlwiKTtcclxuY29uc3QgdG90YWxJbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvdGFsSW5zXCIpO1xyXG5jb25zdCB0b3RhbE1lbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvdGFsTWVuc1wiKTtcclxuXHJcbm15VGJvZHkxLmlubmVySFRNTCA9IGA8c3Bhbj4ke2RheX08L3NwYW4+PHNwYW4+LyR7bW9udGh9PHNhcG4+LyR7eWVhcn08L3NwYW4+YDtcclxubXlUYm9keTIuaW5uZXJIVE1MID0gYDxzcGFuPiR7ZGF5fTwvc3Bhbj48c3Bhbj4vJHttb250aH08c2Fwbj4vJHt5ZWFyfTwvc3Bhbj5gO1xyXG5cclxuZ2V0RG9jcyhlbGV2ZSkudGhlbigoc25hcHNob3QpID0+IHtcclxuICBsZXQgZWxldmUgPSBbXTtcclxuICBzbmFwc2hvdC5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xyXG4gICAgZWxldmUucHVzaCh7IC4uLmRvYy5kYXRhKCksIGlkOiBkb2MuaWQgfSk7XHJcbiAgfSk7XHJcbiAgbGV0IHRvdGFsSW5zY3JpcHRpb24gPSAwO1xyXG4gIGVsZXZlLmZvckVhY2goKHV0aWxpKSA9PiB7XHJcbiAgICB0b3RhbEluc2NyaXB0aW9uICs9IHBhcnNlSW50KHV0aWxpLm1vbnRhbnRJbnNjKTtcclxuICB9KTtcclxuXHJcbiAgdG90YWxJbnMuaW5uZXJIVE1MID0gYDxiPiR7dG90YWxJbnNjcmlwdGlvbi50b0xvY2FsZVN0cmluZyhcclxuICAgIFwiZW4tVVNcIlxyXG4gICl9IEZjZmE8L2I+YDtcclxufSk7XHJcblxyXG5nZXREb2NzKGNlcnRpZXNSZWYyKS50aGVuKChzbmFwc2hvdCkgPT4ge1xyXG4gIGxldCBjZXJ0aWVzUmVmMiA9IFtdO1xyXG4gIHNuYXBzaG90LmRvY3MuZm9yRWFjaCgoZG9jKSA9PiB7XHJcbiAgICBjZXJ0aWVzUmVmMi5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcclxuICB9KTtcclxuICBsZXQgdG90YWxNZW5zdWFsaXRlciA9IDA7XHJcbiAgY2VydGllc1JlZjIuZm9yRWFjaCgodXRpbGkpID0+IHtcclxuICAgIHRvdGFsTWVuc3VhbGl0ZXIgKz0gcGFyc2VJbnQodXRpbGkubW9udGFudHBheSk7XHJcbiAgfSk7XHJcblxyXG4gIC8vIGNvbnNvbGUubG9nKGNlcnRpZXNSZWYyKTtcclxuICB0b3RhbE1lbnMuaW5uZXJIVE1MID0gYDxiPiR7dG90YWxNZW5zdWFsaXRlci50b0xvY2FsZVN0cmluZyhcclxuICAgIFwiZW4tVVNcIlxyXG4gICl9IEZjZmE8L2I+YDtcclxufSk7XHJcblxyXG5sZXQgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcclxubGV0IGNsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG5cIik7XHJcbmxldCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51XCIpO1xyXG5sZXQgbXlDb250YWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teUNvbnRhaW5cIik7XHJcbm1lbnUuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmY3ZVwiO1xyXG5cclxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBzaWRlYmFyLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gIG15Q29udGFpbi5jbGFzc0xpc3QudG9nZ2xlKFwiY29sLW1kLTEwXCIpO1xyXG4gIG15Q29udGFpbi5jbGFzc0xpc3QudG9nZ2xlKFwib2Zmc2V0LW1kLTFcIik7XHJcbiAgbXlDb250YWluLmNsYXNzTGlzdC50b2dnbGUoXCJjb2wtbWQtOVwiKTtcclxuICBteUNvbnRhaW4uY2xhc3NMaXN0LnRvZ2dsZShcImNvbC1sZy05XCIpO1xyXG4gIG15Q29udGFpbi5jbGFzc0xpc3QudG9nZ2xlKFwib2Zmc2V0LW1kLTNcIiwgXCJiZy1kYXJrXCIpO1xyXG4gIG15Q29udGFpbi5jbGFzc0xpc3QudG9nZ2xlKFwib2Zmc2V0LWxnLTNcIik7XHJcbiAgbXlDb250YWluLmNsYXNzTGlzdC50b2dnbGUoXCJteC1tZC1ub25lXCIpO1xyXG4gIG15Q29udGFpbi5jbGFzc0xpc3QudG9nZ2xlKFwibXgtbWQtYXV0b1wiKTtcclxufSk7XHJcblxyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaWYgKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzcGxheUJsb2NrXCIpKSB7XHJcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5QmxvY2tcIik7XHJcbiAgICBzaWRlYmFyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG1lbnUuc3R5bGUubWFyZ2luTGVmdCA9IFwiMHB4XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXlCbG9ja1wiKTtcclxuICAgIHNpZGViYXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGNsb3NlQnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIG1lbnUuc3R5bGUubWFyZ2luTGVmdCA9IFwiMTUwcHhcIjtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pagesJS/accueil.js\n");

/***/ })

}]);