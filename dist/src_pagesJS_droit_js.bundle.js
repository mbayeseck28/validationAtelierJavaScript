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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\ndocument.getElementById(\"bouton\").addEventListener(\"click\", (e) => {\r\n  const one = document.querySelector(\".one\");\r\n  one.classList.add(\"transition-left\");\r\n\r\n  setTimeout(() => {\r\n      one.style.display = \"none\";\r\n      one.classList.remove(\"transition-left\");\r\n  }, 500);\r\n\r\n  document.querySelector(\".center2\").style.display = \"block\";\r\n});\r\n\r\n// Import the necessary functions from the required SDKs\r\n// Importer les fonctions dont vous avez besoin à partir des SDKs dont vous avez besoin\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\r\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\r\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\r\n  projectId: \"validation-atelier-js\",\r\n  storageBucket: \"validation-atelier-js.appspot.com\",\r\n  messagingSenderId: \"466332062090\",\r\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\"\r\n};\r\n\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\r\nconst contenuRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, 'droit', 'mZ2VxP5Ea2aAzJlzN9QV');\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n  // Charger le contenu depuis Firestore dès que la page est prête\r\n  getDataFromFirestore()\r\n});\r\n\r\nfunction getDataFromFirestore() {\r\n  console.log(\"Tentative de récupération du contenu depuis Firestore...\");\r\n  console.log(\"ContenuRef :\", contenuRef);\r\n\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDoc)(contenuRef)\r\n    .then((doc) => {\r\n      console.log(\"Réponse de Firestore :\", doc);\r\n      if (doc.exists()) {\r\n        const data = doc.data();\r\n        console.log(\"Données du document :\", data);\r\n        // Mettez à jour le contenu de l'éditeur avec les données de Firestore\r\n        document.getElementById('editor-container').innerHTML = data.contenu;\r\n        console.log(\"Contenu mis à jour :\", data.contenu);\r\n      } else {\r\n        console.log(\"Aucun document trouvé !\");\r\n      }\r\n    })\r\n    .catch((error) => {\r\n      console.error(\"Erreur lors de la récupération du document depuis Firestore:\", error);\r\n    });\r\n}\r\n\r\nfunction sauvegarderContenuDansFirestore() {\r\n  \r\n  const contenuDiv = document.getElementById('editor-container').innerHTML;\r\n\r\n  console.log(\"Contenu à sauvegarder :\", contenuDiv);\r\n\r\n\r\n\r\n\r\n  // Save the content to Firestore\r\n  return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(contenuRef, {\r\n    contenu: contenuDiv,\r\n    timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)(),\r\n  })\r\n    .then(() => {\r\n      console.log('Content saved successfully in Firestore!');\r\n    })\r\n    .catch((error) => {\r\n      console.error(\"Error saving content:\", error);\r\n    });\r\n}\r\n\r\ndocument.getElementById(\"modif\").addEventListener(\"click\",  () => {\r\n  sauvegarderContenuDansFirestore();\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9kcm9pdC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFsaWRhdGlvbmF0ZWxpZXJqcy8uL3NyYy9wYWdlc0pTL2Ryb2l0LmpzPzBlNGIiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib3V0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgY29uc3Qgb25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vbmVcIik7XHJcbiAgb25lLmNsYXNzTGlzdC5hZGQoXCJ0cmFuc2l0aW9uLWxlZnRcIik7XHJcblxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBvbmUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBvbmUuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zaXRpb24tbGVmdFwiKTtcclxuICB9LCA1MDApO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbnRlcjJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufSk7XHJcblxyXG4vLyBJbXBvcnQgdGhlIG5lY2Vzc2FyeSBmdW5jdGlvbnMgZnJvbSB0aGUgcmVxdWlyZWQgU0RLc1xyXG4vLyBJbXBvcnRlciBsZXMgZm9uY3Rpb25zIGRvbnQgdm91cyBhdmV6IGJlc29pbiDDoCBwYXJ0aXIgZGVzIFNES3MgZG9udCB2b3VzIGF2ZXogYmVzb2luXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tICdmaXJlYmFzZS9hcHAnO1xyXG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUsIGRvYywgZ2V0RG9jLCBzZXREb2MsIHNlcnZlclRpbWVzdGFtcCwgZ2V0RG9jRnJvbVNlcnZlciB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XHJcblxyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUNTUm8yRVp3bzVMUUlPNzVGZXZJQnZFS2JERDYxSE51WVwiLFxyXG4gIGF1dGhEb21haW46IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdmFsaWRhdGlvbi1hdGVsaWVyLWpzLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanNcIixcclxuICBzdG9yYWdlQnVja2V0OiBcInZhbGlkYXRpb24tYXRlbGllci1qcy5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQ2NjMzMjA2MjA5MFwiLFxyXG4gIGFwcElkOiBcIjE6NDY2MzMyMDYyMDkwOndlYjpmZmJlNDVlZjRhNzM3MWE3YjViODczXCJcclxufTtcclxuXHJcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG5jb25zdCBjb250ZW51UmVmID0gZG9jKGRiLCAnZHJvaXQnLCAnbVoyVnhQNUVhMmFBekpsek45UVYnKTtcclxuXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIC8vIENoYXJnZXIgbGUgY29udGVudSBkZXB1aXMgRmlyZXN0b3JlIGTDqHMgcXVlIGxhIHBhZ2UgZXN0IHByw6p0ZVxyXG4gIGdldERhdGFGcm9tRmlyZXN0b3JlKClcclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhRnJvbUZpcmVzdG9yZSgpIHtcclxuICBjb25zb2xlLmxvZyhcIlRlbnRhdGl2ZSBkZSByw6ljdXDDqXJhdGlvbiBkdSBjb250ZW51IGRlcHVpcyBGaXJlc3RvcmUuLi5cIik7XHJcbiAgY29uc29sZS5sb2coXCJDb250ZW51UmVmIDpcIiwgY29udGVudVJlZik7XHJcblxyXG4gIGdldERvYyhjb250ZW51UmVmKVxyXG4gICAgLnRoZW4oKGRvYykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlLDqXBvbnNlIGRlIEZpcmVzdG9yZSA6XCIsIGRvYyk7XHJcbiAgICAgIGlmIChkb2MuZXhpc3RzKCkpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gZG9jLmRhdGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkRvbm7DqWVzIGR1IGRvY3VtZW50IDpcIiwgZGF0YSk7XHJcbiAgICAgICAgLy8gTWV0dGV6IMOgIGpvdXIgbGUgY29udGVudSBkZSBsJ8OpZGl0ZXVyIGF2ZWMgbGVzIGRvbm7DqWVzIGRlIEZpcmVzdG9yZVxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItY29udGFpbmVyJykuaW5uZXJIVE1MID0gZGF0YS5jb250ZW51O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGVudSBtaXMgw6Agam91ciA6XCIsIGRhdGEuY29udGVudSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBdWN1biBkb2N1bWVudCB0cm91dsOpICFcIik7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkdSBkb2N1bWVudCBkZXB1aXMgRmlyZXN0b3JlOlwiLCBlcnJvcik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2F1dmVnYXJkZXJDb250ZW51RGFuc0ZpcmVzdG9yZSgpIHtcclxuICBcclxuICBjb25zdCBjb250ZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1jb250YWluZXInKS5pbm5lckhUTUw7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwiQ29udGVudSDDoCBzYXV2ZWdhcmRlciA6XCIsIGNvbnRlbnVEaXYpO1xyXG5cclxuXHJcblxyXG5cclxuICAvLyBTYXZlIHRoZSBjb250ZW50IHRvIEZpcmVzdG9yZVxyXG4gIHJldHVybiBzZXREb2MoY29udGVudVJlZiwge1xyXG4gICAgY29udGVudTogY29udGVudURpdixcclxuICAgIHRpbWVzdGFtcDogc2VydmVyVGltZXN0YW1wKCksXHJcbiAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgc2F2ZWQgc3VjY2Vzc2Z1bGx5IGluIEZpcmVzdG9yZSEnKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgY29udGVudDpcIiwgZXJyb3IpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kaWZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICAoKSA9PiB7XHJcbiAgc2F1dmVnYXJkZXJDb250ZW51RGFuc0ZpcmVzdG9yZSgpO1xyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pagesJS/droit.js\n");

/***/ })

}]);