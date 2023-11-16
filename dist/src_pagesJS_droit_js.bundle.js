"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_droit_js"],{

/***/ "./src/pagesJS/droit.js":
/*!******************************!*\
  !*** ./src/pagesJS/droit.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\ndocument.getElementById(\"bouton\").addEventListener(\"click\", (e) => {\r\n    \r\n    const one = document.querySelector(\".one\");\r\n    one.classList.add(\"transition-left\");\r\n\r\n    \r\n    setTimeout(() => {\r\n        one.style.display = \"none\";\r\n        one.classList.remove(\"transition-left\");\r\n    }, 500); \r\n\r\n   \r\n    document.querySelector(\".center2\").style.display = \"block\";\r\n});\r\n\r\n\r\n// Importer les fonctions dont vous avez besoin à partir des SDKs dont vous avez besoin\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Configuration de votre application web Firebase\r\nconst firebaseConfig = {\r\n\r\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\r\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\r\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\r\n  projectId: \"validation-atelier-js\",\r\n  storageBucket: \"validation-atelier-js.appspot.com\",\r\n  messagingSenderId: \"466332062090\",\r\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\"\r\n\r\n};\r\n\r\n// Initialiser Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\r\n\r\n/******************  affiche photo profil Nav bar  **********************/\r\n(0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, (user) => {\r\n  if (user) {\r\n    console.log('Utilisateur connecté');\r\n    var userEmail = user.email;\r\n    const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, 'utilisateurs');\r\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.onSnapshot)(userRef, (snapshot) => {\r\n      let userRef = [];\r\n      snapshot.docs.forEach((doc) => {\r\n        userRef.push({ ...doc.data(), id: doc.id });\r\n      });\r\n      userRef.forEach((utilisateur) => {\r\n        // Créez une référence au document de l'utilisateur dans Firestore\r\n        const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, 'utilisateurs', utilisateur.id);\r\n\r\n        if (utilisateur.email == userEmail) {\r\n          const ProfilNav = document.querySelector('.ProfilNav');\r\n          const profilVoir = document.querySelector('.profilVoir');\r\n          const nomUser = document.querySelector('.nomUser');\r\n          const statusUser = document.querySelector('.statusUser');\r\n          ProfilNav.src = utilisateur.url;\r\n          profilVoir.src = utilisateur.url;\r\n          nomUser.innerText = utilisateur.prenom + ' ' + utilisateur.nom;\r\n          statusUser.innerText = utilisateur.status;\r\n        }\r\n      });\r\n    });\r\n  } else {\r\n    console.log('Aucun utilisateur connecté');\r\n    window.location.href = '../../pages/auth/login/login.html';\r\n  }\r\n});\r\n\r\n\r\n/************     DECONNEXION       ***********/ \r\nconst btnDeconnexion = document.getElementById('btnDeconnexion');\r\nconst signOutButtonPressed = async (e) => {\r\n  e.preventDefault();\r\n  try {\r\n    await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\r\n    console.log(\"Deconnecté\");\r\n    window.location.href = '../../pages/auth/login/login.html';\r\n  } catch (error) {\r\n    console.log(error.code);\r\n  }\r\n}\r\nbtnDeconnexion.addEventListener(\"click\", signOutButtonPressed);\r\n\r\n\r\n// Référence Firestore\r\nconst contenuRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, 'droit', 'HnVUd5sHwFWRB0gmidmo');\r\n\r\nfunction enregistrerModifications() {\r\n  // Récupérer le contenu de la div\r\n  const contenuDiv = document.getElementById('editor-container').textContent;\r\n\r\n\r\n  // Enregistrer le contenu dans Firestore\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)(contenuRef, {\r\n    contenu: contenuDiv,\r\n    timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp)(),\r\n  })\r\n  .then(() => {\r\n    console.log('Contenu enregistré avec succès dans Firestore!');\r\n  })\r\n  .catch((error) => {\r\n    console.error(\"Erreur lors de l'enregistrement du contenu:\", error);\r\n  });\r\n}\r\n\r\ndocument.getElementById(\"modif\").addEventListener(\"click\", enregistrerModifications);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9kcm9pdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWxpZGF0aW9uYXRlbGllcmpzLy4vc3JjL3BhZ2VzSlMvZHJvaXQuanM/MGU0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdXRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3Qgb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVcIik7XHJcbiAgICBvbmUuY2xhc3NMaXN0LmFkZChcInRyYW5zaXRpb24tbGVmdFwiKTtcclxuXHJcbiAgICBcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG9uZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgb25lLmNsYXNzTGlzdC5yZW1vdmUoXCJ0cmFuc2l0aW9uLWxlZnRcIik7XHJcbiAgICB9LCA1MDApOyBcclxuXHJcbiAgIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jZW50ZXIyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbn0pO1xyXG5cclxuXHJcbi8vIEltcG9ydGVyIGxlcyBmb25jdGlvbnMgZG9udCB2b3VzIGF2ZXogYmVzb2luIMOgIHBhcnRpciBkZXMgU0RLcyBkb250IHZvdXMgYXZleiBiZXNvaW5cclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgc2lnbk91dCxcclxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgb25BdXRoU3RhdGVDaGFuZ2VkLFxyXG4gIHVwZGF0ZVByb2ZpbGUsXHJcbn0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XHJcblxyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGNvbGxlY3Rpb24sIG9uU25hcHNob3QsIGRvYywgc2V0RG9jLCBzZXJ2ZXJUaW1lc3RhbXAgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5cclxuLy8gQ29uZmlndXJhdGlvbiBkZSB2b3RyZSBhcHBsaWNhdGlvbiB3ZWIgRmlyZWJhc2VcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcblxyXG4gIGFwaUtleTogXCJBSXphU3lDU1JvMkVad281TFFJTzc1RmV2SUJ2RUtiREQ2MUhOdVlcIixcclxuICBhdXRoRG9tYWluOiBcInZhbGlkYXRpb24tYXRlbGllci1qcy5maXJlYmFzZWFwcC5jb21cIixcclxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3ZhbGlkYXRpb24tYXRlbGllci1qcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanMuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0NjYzMzIwNjIwOTBcIixcclxuICBhcHBJZDogXCIxOjQ2NjMzMjA2MjA5MDp3ZWI6ZmZiZTQ1ZWY0YTczNzFhN2I1Yjg3M1wiXHJcblxyXG59O1xyXG5cclxuLy8gSW5pdGlhbGlzZXIgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqICBhZmZpY2hlIHBob3RvIHByb2ZpbCBOYXYgYmFyICAqKioqKioqKioqKioqKioqKioqKioqL1xyXG5vbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuICBpZiAodXNlcikge1xyXG4gICAgY29uc29sZS5sb2coJ1V0aWxpc2F0ZXVyIGNvbm5lY3TDqScpO1xyXG4gICAgdmFyIHVzZXJFbWFpbCA9IHVzZXIuZW1haWw7XHJcbiAgICBjb25zdCB1c2VyUmVmID0gY29sbGVjdGlvbihkYiwgJ3V0aWxpc2F0ZXVycycpO1xyXG4gICAgb25TbmFwc2hvdCh1c2VyUmVmLCAoc25hcHNob3QpID0+IHtcclxuICAgICAgbGV0IHVzZXJSZWYgPSBbXTtcclxuICAgICAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICB1c2VyUmVmLnB1c2goeyAuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgdXNlclJlZi5mb3JFYWNoKCh1dGlsaXNhdGV1cikgPT4ge1xyXG4gICAgICAgIC8vIENyw6lleiB1bmUgcsOpZsOpcmVuY2UgYXUgZG9jdW1lbnQgZGUgbCd1dGlsaXNhdGV1ciBkYW5zIEZpcmVzdG9yZVxyXG4gICAgICAgIGNvbnN0IHVzZXJEb2NSZWYgPSBkb2MoZGIsICd1dGlsaXNhdGV1cnMnLCB1dGlsaXNhdGV1ci5pZCk7XHJcblxyXG4gICAgICAgIGlmICh1dGlsaXNhdGV1ci5lbWFpbCA9PSB1c2VyRW1haWwpIHtcclxuICAgICAgICAgIGNvbnN0IFByb2ZpbE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Qcm9maWxOYXYnKTtcclxuICAgICAgICAgIGNvbnN0IHByb2ZpbFZvaXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsVm9pcicpO1xyXG4gICAgICAgICAgY29uc3Qgbm9tVXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub21Vc2VyJyk7XHJcbiAgICAgICAgICBjb25zdCBzdGF0dXNVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1c1VzZXInKTtcclxuICAgICAgICAgIFByb2ZpbE5hdi5zcmMgPSB1dGlsaXNhdGV1ci51cmw7XHJcbiAgICAgICAgICBwcm9maWxWb2lyLnNyYyA9IHV0aWxpc2F0ZXVyLnVybDtcclxuICAgICAgICAgIG5vbVVzZXIuaW5uZXJUZXh0ID0gdXRpbGlzYXRldXIucHJlbm9tICsgJyAnICsgdXRpbGlzYXRldXIubm9tO1xyXG4gICAgICAgICAgc3RhdHVzVXNlci5pbm5lclRleHQgPSB1dGlsaXNhdGV1ci5zdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZygnQXVjdW4gdXRpbGlzYXRldXIgY29ubmVjdMOpJyk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuLi8uLi9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLmh0bWwnO1xyXG4gIH1cclxufSk7XHJcblxyXG5cclxuLyoqKioqKioqKioqKiAgICAgREVDT05ORVhJT04gICAgICAgKioqKioqKioqKiovIFxyXG5jb25zdCBidG5EZWNvbm5leGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5EZWNvbm5leGlvbicpO1xyXG5jb25zdCBzaWduT3V0QnV0dG9uUHJlc3NlZCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBzaWduT3V0KGF1dGgpO1xyXG4gICAgY29uc29sZS5sb2coXCJEZWNvbm5lY3TDqVwiKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy4uLy4uL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4uaHRtbCc7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yLmNvZGUpO1xyXG4gIH1cclxufVxyXG5idG5EZWNvbm5leGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2lnbk91dEJ1dHRvblByZXNzZWQpO1xyXG5cclxuXHJcbi8vIFLDqWbDqXJlbmNlIEZpcmVzdG9yZVxyXG5jb25zdCBjb250ZW51UmVmID0gZG9jKGRiLCAnZHJvaXQnLCAnSG5WVWQ1c0h3RldSQjBnbWlkbW8nKTtcclxuXHJcbmZ1bmN0aW9uIGVucmVnaXN0cmVyTW9kaWZpY2F0aW9ucygpIHtcclxuICAvLyBSw6ljdXDDqXJlciBsZSBjb250ZW51IGRlIGxhIGRpdlxyXG4gIGNvbnN0IGNvbnRlbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yLWNvbnRhaW5lcicpLnRleHRDb250ZW50O1xyXG5cclxuXHJcbiAgLy8gRW5yZWdpc3RyZXIgbGUgY29udGVudSBkYW5zIEZpcmVzdG9yZVxyXG4gIHNldERvYyhjb250ZW51UmVmLCB7XHJcbiAgICBjb250ZW51OiBjb250ZW51RGl2LFxyXG4gICAgdGltZXN0YW1wOiBzZXJ2ZXJUaW1lc3RhbXAoKSxcclxuICB9KVxyXG4gIC50aGVuKCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdDb250ZW51IGVucmVnaXN0csOpIGF2ZWMgc3VjY8OocyBkYW5zIEZpcmVzdG9yZSEnKTtcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2VucmVnaXN0cmVtZW50IGR1IGNvbnRlbnU6XCIsIGVycm9yKTtcclxuICB9KTtcclxufVxyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RpZlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZW5yZWdpc3RyZXJNb2RpZmljYXRpb25zKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pagesJS/droit.js\n");

/***/ })

}]);