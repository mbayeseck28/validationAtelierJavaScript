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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\ndocument.getElementById(\"bouton\").addEventListener(\"click\", (e) => {\r\n    \r\n    const one = document.querySelector(\".one\");\r\n    one.classList.add(\"transition-left\");\r\n\r\n    \r\n    setTimeout(() => {\r\n        one.style.display = \"none\";\r\n        one.classList.remove(\"transition-left\");\r\n    }, 500); \r\n\r\n   \r\n    document.querySelector(\".center2\").style.display = \"block\";\r\n});\r\n\r\n\r\n// Importer les fonctions dont vous avez besoin à partir des SDKs dont vous avez besoin\r\n\r\n\r\n\r\n// Configuration de votre application web Firebase\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\r\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\r\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\r\n  projectId: \"validation-atelier-js\",\r\n  storageBucket: \"validation-atelier-js.appspot.com\",\r\n  messagingSenderId: \"466332062090\",\r\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\"\r\n};\r\n\r\n// Initialiser Firebase\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\r\n\r\n// Référence Firestore\r\nconst contenuRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, 'droit', 'zPxEvR7D72SaaZVQa5Wb');\r\n\r\nfunction enregistrerModifications() {\r\n  // Récupérer le contenu de la div\r\n  const contenuDiv = document.getElementById('editor-container').textContent;\r\n\r\n\r\n  // Enregistrer le contenu dans Firestore\r\n  (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)(contenuRef, {\r\n    contenu: contenuDiv,\r\n    timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)(),\r\n  })\r\n  .then(() => {\r\n    console.log('Contenu enregistré avec succès dans Firestore!');\r\n  })\r\n  .catch((error) => {\r\n    console.error(\"Erreur lors de l'enregistrement du contenu:\", error);\r\n  });\r\n}\r\n\r\ndocument.getElementById(\"modif\").addEventListener(\"click\", enregistrerModifications);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9kcm9pdC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3ZhbGlkYXRpb25hdGVsaWVyanMvLi9zcmMvcGFnZXNKUy9kcm9pdC5qcz8wZTRiIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm91dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZVwiKTtcclxuICAgIG9uZS5jbGFzc0xpc3QuYWRkKFwidHJhbnNpdGlvbi1sZWZ0XCIpO1xyXG5cclxuICAgIFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgb25lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICBvbmUuY2xhc3NMaXN0LnJlbW92ZShcInRyYW5zaXRpb24tbGVmdFwiKTtcclxuICAgIH0sIDUwMCk7IFxyXG5cclxuICAgXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNlbnRlcjJcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufSk7XHJcblxyXG5cclxuLy8gSW1wb3J0ZXIgbGVzIGZvbmN0aW9ucyBkb250IHZvdXMgYXZleiBiZXNvaW4gw6AgcGFydGlyIGRlcyBTREtzIGRvbnQgdm91cyBhdmV6IGJlc29pblxyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSAnZmlyZWJhc2UvYXBwJztcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlLCBkb2MsIHNldERvYywgc2VydmVyVGltZXN0YW1wIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuXHJcbi8vIENvbmZpZ3VyYXRpb24gZGUgdm90cmUgYXBwbGljYXRpb24gd2ViIEZpcmViYXNlXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lDU1JvMkVad281TFFJTzc1RmV2SUJ2RUtiREQ2MUhOdVlcIixcclxuICBhdXRoRG9tYWluOiBcInZhbGlkYXRpb24tYXRlbGllci1qcy5maXJlYmFzZWFwcC5jb21cIixcclxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3ZhbGlkYXRpb24tYXRlbGllci1qcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanMuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0NjYzMzIwNjIwOTBcIixcclxuICBhcHBJZDogXCIxOjQ2NjMzMjA2MjA5MDp3ZWI6ZmZiZTQ1ZWY0YTczNzFhN2I1Yjg3M1wiXHJcbn07XHJcblxyXG4vLyBJbml0aWFsaXNlciBGaXJlYmFzZVxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuXHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcblxyXG4vLyBSw6lmw6lyZW5jZSBGaXJlc3RvcmVcclxuY29uc3QgY29udGVudVJlZiA9IGRvYyhkYiwgJ2Ryb2l0JywgJ3pQeEV2UjdENzJTYWFaVlFhNVdiJyk7XHJcblxyXG5mdW5jdGlvbiBlbnJlZ2lzdHJlck1vZGlmaWNhdGlvbnMoKSB7XHJcbiAgLy8gUsOpY3Vww6lyZXIgbGUgY29udGVudSBkZSBsYSBkaXZcclxuICBjb25zdCBjb250ZW51RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1jb250YWluZXInKS50ZXh0Q29udGVudDtcclxuXHJcblxyXG4gIC8vIEVucmVnaXN0cmVyIGxlIGNvbnRlbnUgZGFucyBGaXJlc3RvcmVcclxuICBzZXREb2MoY29udGVudVJlZiwge1xyXG4gICAgY29udGVudTogY29udGVudURpdixcclxuICAgIHRpbWVzdGFtcDogc2VydmVyVGltZXN0YW1wKCksXHJcbiAgfSlcclxuICAudGhlbigoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnQ29udGVudSBlbnJlZ2lzdHLDqSBhdmVjIHN1Y2PDqHMgZGFucyBGaXJlc3RvcmUhJyk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdlbnJlZ2lzdHJlbWVudCBkdSBjb250ZW51OlwiLCBlcnJvcik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kaWZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGVucmVnaXN0cmVyTW9kaWZpY2F0aW9ucyk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pagesJS/droit.js\n");

/***/ })

}]);