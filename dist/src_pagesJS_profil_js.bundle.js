"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_profil_js"],{

/***/ "./src/pagesJS/profil.js":
/*!*******************************!*\
  !*** ./src/pagesJS/profil.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"../../node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"../../node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"../../node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\n\n\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\n  projectId: \"validation-atelier-js\",\n  storageBucket: \"validation-atelier-js.appspot.com\",\n  messagingSenderId: \"466332062090\",\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\",\n};\n\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app); \n\n\n(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, (user) => {\n    if (user) {\n        console.log(\"Utilisateur connecté\");\n        var userEmail = user.email;\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, \"utilisateurs\");\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(userRef, (snapshot) => {\n          let userRef = [];\n          snapshot.docs.forEach((doc) => {\n            userRef.push({...doc.data(), id: doc.id })\n          })\n          userRef.forEach((utilisateur => {\n            if (utilisateur.email == userEmail) {    \n                const btnEnregistrerInfo = document.getElementById('btnEnregistrerInfo')            \n                const email = document.getElementById(\"userEmail\");\n                const password = document.getElementById(\"password\");\n                const nom = document.getElementById(\"userNom\");\n                const prenom = document.getElementById(\"userPrenom\");\n                const status = document.getElementById(\"userStatus\");\n                const adresse = document.getElementById(\"userAdress\");\n                const tel = document.getElementById(\"userTel\");\n                const adresseecole = document.getElementById(\"adresseEcole\");\n                const emailecole = document.getElementById(\"emailEcole\");\n                const secteur = document.getElementById(\"secteurEcole\");\n                const nomecole = document.getElementById(\"nomEcole\");\n\n                prenom.value = utilisateur.prenom\n                nom.value = utilisateur.nom\n                status.value = utilisateur.status\n                adresse.value = utilisateur.adresse\n                email.value = utilisateur.email\n                tel.value = utilisateur.tel\n                nomecole.value = utilisateur.nomecole\n                adresseecole.value = utilisateur.adresseecole\n                emailecole.value = utilisateur.emailecole\n                secteur.value = utilisateur.secteur\n\n                \n                formProfil.addEventListener(\"submit\", modifProfi);\n\n                function modifProfi(e) {\n                  e.preventDefault();\n\n                  // Mettez à jour les valeurs des champs de l'utilisateur\n                  utilisateur.prenom = prenom.value\n                  utilisateur.nom = nom.value\n                  utilisateur.status = status.value\n                  utilisateur.adresse = adresse.value\n                  utilisateur.email = email.value\n                  utilisateur.tel = tel.value\n                  utilisateur.nomecole = nomecole.value\n                  utilisateur.adresseecole = adresseecole.value\n                  utilisateur.emailecole = emailecole.value\n                  utilisateur.secteur = secteur.value\n\n                  // Créez une référence au document de l'utilisateur dans Firestore\n                  const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"utilisateurs\", utilisateur.id);\n\n                  // Mettez à jour le document dans Firestore\n                  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(userDocRef, {\n                    prenom: prenom.value,\n                    nom: nom.value,\n                    status: status.value,\n                    adresse: adresse.value,\n                    email: email.value,\n                    tel: tel.value,\n                    nomecole: nomecole.value,\n                    adresseecole: adresseecole.value,\n                    emailecole: emailecole.value,\n                    secteur: secteur.value,\n                  }).catch((error) => {\n                    console.error(\"Error updating document: \", error);\n                  });\n\n                  alert('modification effectuer avec succés')\n                }\n\n            }\n          }))\n        });\n    } else {\n        console.log(\"Aucun utilisateur connecté\");\n    }\n});\n\n\nconsole.log(\"page profil\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9wcm9maWwuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBTUE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbGlkYXRpb25hdGVsaWVyanMvLi9zcmMvcGFnZXNKUy9wcm9maWwuanM/MmFhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHtcbiAgZ2V0QXV0aCxcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHtcbiAgZ2V0RmlyZXN0b3JlLFxuICBjb2xsZWN0aW9uLFxuICBhZGREb2MsXG4gIGRvYyxcbiAgdXBkYXRlRG9jLFxuICBnZXREb2MsXG4gIG9uU25hcHNob3QsXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDU1JvMkVad281TFFJTzc1RmV2SUJ2RUtiREQ2MUhOdVlcIixcbiAgYXV0aERvbWFpbjogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanMuZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdmFsaWRhdGlvbi1hdGVsaWVyLWpzLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQ2NjMzMjA2MjA5MFwiLFxuICBhcHBJZDogXCIxOjQ2NjMzMjA2MjA5MDp3ZWI6ZmZiZTQ1ZWY0YTczNzFhN2I1Yjg3M1wiLFxufTtcblxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTsgXG5cblxub25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsICh1c2VyKSA9PiB7XG4gICAgaWYgKHVzZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJVdGlsaXNhdGV1ciBjb25uZWN0w6lcIik7XG4gICAgICAgIHZhciB1c2VyRW1haWwgPSB1c2VyLmVtYWlsO1xuICAgICAgICBjb25zdCB1c2VyUmVmID0gY29sbGVjdGlvbihkYiwgXCJ1dGlsaXNhdGV1cnNcIik7XG4gICAgICAgIG9uU25hcHNob3QodXNlclJlZiwgKHNuYXBzaG90KSA9PiB7XG4gICAgICAgICAgbGV0IHVzZXJSZWYgPSBbXTtcbiAgICAgICAgICBzbmFwc2hvdC5kb2NzLmZvckVhY2goKGRvYykgPT4ge1xuICAgICAgICAgICAgdXNlclJlZi5wdXNoKHsuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgICB1c2VyUmVmLmZvckVhY2goKHV0aWxpc2F0ZXVyID0+IHtcbiAgICAgICAgICAgIGlmICh1dGlsaXNhdGV1ci5lbWFpbCA9PSB1c2VyRW1haWwpIHsgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgYnRuRW5yZWdpc3RyZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkVucmVnaXN0cmVySW5mbycpICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJFbWFpbFwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIik7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyTm9tXCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZW5vbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlclByZW5vbVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJTdGF0dXNcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRyZXNzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlckFkcmVzc1wiKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVzZXJUZWxcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgYWRyZXNzZWVjb2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZHJlc3NlRWNvbGVcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWxlY29sZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxFY29sZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWN0ZXVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWN0ZXVyRWNvbGVcIik7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9tZWNvbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbUVjb2xlXCIpO1xuXG4gICAgICAgICAgICAgICAgcHJlbm9tLnZhbHVlID0gdXRpbGlzYXRldXIucHJlbm9tXG4gICAgICAgICAgICAgICAgbm9tLnZhbHVlID0gdXRpbGlzYXRldXIubm9tXG4gICAgICAgICAgICAgICAgc3RhdHVzLnZhbHVlID0gdXRpbGlzYXRldXIuc3RhdHVzXG4gICAgICAgICAgICAgICAgYWRyZXNzZS52YWx1ZSA9IHV0aWxpc2F0ZXVyLmFkcmVzc2VcbiAgICAgICAgICAgICAgICBlbWFpbC52YWx1ZSA9IHV0aWxpc2F0ZXVyLmVtYWlsXG4gICAgICAgICAgICAgICAgdGVsLnZhbHVlID0gdXRpbGlzYXRldXIudGVsXG4gICAgICAgICAgICAgICAgbm9tZWNvbGUudmFsdWUgPSB1dGlsaXNhdGV1ci5ub21lY29sZVxuICAgICAgICAgICAgICAgIGFkcmVzc2VlY29sZS52YWx1ZSA9IHV0aWxpc2F0ZXVyLmFkcmVzc2VlY29sZVxuICAgICAgICAgICAgICAgIGVtYWlsZWNvbGUudmFsdWUgPSB1dGlsaXNhdGV1ci5lbWFpbGVjb2xlXG4gICAgICAgICAgICAgICAgc2VjdGV1ci52YWx1ZSA9IHV0aWxpc2F0ZXVyLnNlY3RldXJcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvcm1Qcm9maWwuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBtb2RpZlByb2ZpKTtcblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vZGlmUHJvZmkoZSkge1xuICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAvLyBNZXR0ZXogw6Agam91ciBsZXMgdmFsZXVycyBkZXMgY2hhbXBzIGRlIGwndXRpbGlzYXRldXJcbiAgICAgICAgICAgICAgICAgIHV0aWxpc2F0ZXVyLnByZW5vbSA9IHByZW5vbS52YWx1ZVxuICAgICAgICAgICAgICAgICAgdXRpbGlzYXRldXIubm9tID0gbm9tLnZhbHVlXG4gICAgICAgICAgICAgICAgICB1dGlsaXNhdGV1ci5zdGF0dXMgPSBzdGF0dXMudmFsdWVcbiAgICAgICAgICAgICAgICAgIHV0aWxpc2F0ZXVyLmFkcmVzc2UgPSBhZHJlc3NlLnZhbHVlXG4gICAgICAgICAgICAgICAgICB1dGlsaXNhdGV1ci5lbWFpbCA9IGVtYWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgICB1dGlsaXNhdGV1ci50ZWwgPSB0ZWwudmFsdWVcbiAgICAgICAgICAgICAgICAgIHV0aWxpc2F0ZXVyLm5vbWVjb2xlID0gbm9tZWNvbGUudmFsdWVcbiAgICAgICAgICAgICAgICAgIHV0aWxpc2F0ZXVyLmFkcmVzc2VlY29sZSA9IGFkcmVzc2VlY29sZS52YWx1ZVxuICAgICAgICAgICAgICAgICAgdXRpbGlzYXRldXIuZW1haWxlY29sZSA9IGVtYWlsZWNvbGUudmFsdWVcbiAgICAgICAgICAgICAgICAgIHV0aWxpc2F0ZXVyLnNlY3RldXIgPSBzZWN0ZXVyLnZhbHVlXG5cbiAgICAgICAgICAgICAgICAgIC8vIENyw6lleiB1bmUgcsOpZsOpcmVuY2UgYXUgZG9jdW1lbnQgZGUgbCd1dGlsaXNhdGV1ciBkYW5zIEZpcmVzdG9yZVxuICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckRvY1JlZiA9IGRvYyhkYiwgXCJ1dGlsaXNhdGV1cnNcIiwgdXRpbGlzYXRldXIuaWQpO1xuXG4gICAgICAgICAgICAgICAgICAvLyBNZXR0ZXogw6Agam91ciBsZSBkb2N1bWVudCBkYW5zIEZpcmVzdG9yZVxuICAgICAgICAgICAgICAgICAgdXBkYXRlRG9jKHVzZXJEb2NSZWYsIHtcbiAgICAgICAgICAgICAgICAgICAgcHJlbm9tOiBwcmVub20udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG5vbTogbm9tLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cy52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgYWRyZXNzZTogYWRyZXNzZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICB0ZWw6IHRlbC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbm9tZWNvbGU6IG5vbWVjb2xlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBhZHJlc3NlZWNvbGU6IGFkcmVzc2VlY29sZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZW1haWxlY29sZTogZW1haWxlY29sZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2VjdGV1cjogc2VjdGV1ci52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZG9jdW1lbnQ6IFwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgYWxlcnQoJ21vZGlmaWNhdGlvbiBlZmZlY3R1ZXIgYXZlYyBzdWNjw6lzJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSlcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBdWN1biB1dGlsaXNhdGV1ciBjb25uZWN0w6lcIik7XG4gICAgfVxufSk7XG5cblxuY29uc29sZS5sb2coXCJwYWdlIHByb2ZpbFwiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pagesJS/profil.js\n");

/***/ })

}]);