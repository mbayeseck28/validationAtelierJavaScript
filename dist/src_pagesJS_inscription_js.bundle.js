"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvalidationatelierjs"] = self["webpackChunkvalidationatelierjs"] || []).push([["src_pagesJS_inscription_js"],{

/***/ "./src/pagesJS/inscription.js":
/*!************************************!*\
  !*** ./src/pagesJS/inscription.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\r\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\r\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\r\n  projectId: \"validation-atelier-js\",\r\n  storageBucket: \"validation-atelier-js.appspot.com\",\r\n  messagingSenderId: \"466332062090\",\r\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\",\r\n};\r\n\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app); \r\n\r\n\r\n\r\nconst handleRegistration = async (event) => {\r\n  event.preventDefault();\r\n  \r\n  const emailInput = document.getElementById(\"email\");\r\n  const passwordInput = document.getElementById(\"password\");\r\n  const nomInput = document.getElementById(\"nom\");\r\n  const prenomInput = document.getElementById(\"prenom\");\r\n  const statusInput = document.getElementById(\"status\");\r\n  const adresseInput = document.getElementById(\"adresse\");\r\n  const telInput = document.getElementById(\"tel\");\r\n  const adresseecoleInput = document.getElementById(\"adresseecole\");\r\n  const emailecoleInput = document.getElementById(\"emailecole\");\r\n  const secteurInput = document.getElementById(\"secteur\");\r\n  const nomecoleInput = document.getElementById(\"nomecole\");\r\n  \r\n    const email = emailInput.value;\r\n    const password = passwordInput.value;\r\n    const nom = nomInput.value;\r\n    const prenom = prenomInput.value;\r\n    const status = statusInput.value;\r\n    const adresse = adresseInput.value;\r\n    const tel = telInput.value;\r\n    const adresseecole = adresseecoleInput.value;\r\n    const emailecole = emailecoleInput.value;\r\n    const secteur = secteurInput.value;\r\n    const nomecole = nomInput.value;\r\n    const srcProfil = \"../../../src/assets/images/profil.jpeg\";\r\n    \r\n    try {\r\n      const userCredential = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(\r\n        auth,\r\n        email,\r\n        password\r\n        );\r\n        const user = userCredential.user;\r\n        \r\n        const userData = {\r\n          nom: nom,\r\n          prenom: prenom,\r\n          status: status,\r\n          adresse: adresse,\r\n          tel: tel,\r\n          adresseecole: adresseecole,\r\n          emailecole: emailecole,\r\n          secteur: secteur,\r\n          nomecole: nomecole,\r\n          email: email,\r\n          password: password,\r\n          url: srcProfil,\r\n      };\r\n      \r\n      const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, \"utilisateurs\");\r\n      console.log(userRef);\r\n      await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(userRef, userData);\r\n      \r\n      alert(\"Utilisateur enregistré avec succès\");\r\n      \r\n      // Vous pouvez rediriger l'utilisateur vers une autre page ici si nécessaire\r\n    } catch (error) {\r\n      const errorCode = error.code;\r\n      const errorMessage = error.message;\r\n      console.error(\"Erreur lors de l'inscription :\", errorCode, errorMessage);\r\n    }\r\n    emailInput.value = \"\"\r\n    passwordInput.value = \"\"\r\n    nomInput.value = \"\"\r\n    prenomInput.value = \"\"\r\n    statusInput.value = \"\"\r\n    adresseInput.value = \"\"\r\n    telInput.value = \"\"\r\n    adresseecoleInput.value = \"\"\r\n    emailecoleInput.value = \"\"\r\n    secteurInput.value = \"\"\r\n    nomecoleInput.value = \"\"\r\n\r\n  };\r\n\r\nconsole.log('page inscription')\r\nconst registrationForm = document.getElementById(\"registration-form\");\r\nregistrationForm.addEventListener(\"submit\", handleRegistration);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9pbnNjcmlwdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFNQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWxpZGF0aW9uYXRlbGllcmpzLy4vc3JjL3BhZ2VzSlMvaW5zY3JpcHRpb24uanM/MzFlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldEF1dGgsXHJcbiAgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gIG9uQXV0aFN0YXRlQ2hhbmdlZCxcclxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQge1xyXG4gIGdldEZpcmVzdG9yZSxcclxuICBjb2xsZWN0aW9uLFxyXG4gIGFkZERvYyxcclxuICBkb2MsXHJcbiAgZ2V0RG9jLFxyXG4gIG9uU25hcHNob3QsXHJcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUNTUm8yRVp3bzVMUUlPNzVGZXZJQnZFS2JERDYxSE51WVwiLFxyXG4gIGF1dGhEb21haW46IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzLmZpcmViYXNlYXBwLmNvbVwiLFxyXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vdmFsaWRhdGlvbi1hdGVsaWVyLWpzLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxyXG4gIHByb2plY3RJZDogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanNcIixcclxuICBzdG9yYWdlQnVja2V0OiBcInZhbGlkYXRpb24tYXRlbGllci1qcy5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQ2NjMzMjA2MjA5MFwiLFxyXG4gIGFwcElkOiBcIjE6NDY2MzMyMDYyMDkwOndlYjpmZmJlNDVlZjRhNzM3MWE3YjViODczXCIsXHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTsgXHJcblxyXG5cclxuXHJcbmNvbnN0IGhhbmRsZVJlZ2lzdHJhdGlvbiA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgXHJcbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxcIik7XHJcbiAgY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFzc3dvcmRcIik7XHJcbiAgY29uc3Qgbm9tSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbVwiKTtcclxuICBjb25zdCBwcmVub21JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJlbm9tXCIpO1xyXG4gIGNvbnN0IHN0YXR1c0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNcIik7XHJcbiAgY29uc3QgYWRyZXNzZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZHJlc3NlXCIpO1xyXG4gIGNvbnN0IHRlbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWxcIik7XHJcbiAgY29uc3QgYWRyZXNzZWVjb2xlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkcmVzc2VlY29sZVwiKTtcclxuICBjb25zdCBlbWFpbGVjb2xlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsZWNvbGVcIik7XHJcbiAgY29uc3Qgc2VjdGV1cklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWN0ZXVyXCIpO1xyXG4gIGNvbnN0IG5vbWVjb2xlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vbWVjb2xlXCIpO1xyXG4gIFxyXG4gICAgY29uc3QgZW1haWwgPSBlbWFpbElucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZElucHV0LnZhbHVlO1xyXG4gICAgY29uc3Qgbm9tID0gbm9tSW5wdXQudmFsdWU7XHJcbiAgICBjb25zdCBwcmVub20gPSBwcmVub21JbnB1dC52YWx1ZTtcclxuICAgIGNvbnN0IHN0YXR1cyA9IHN0YXR1c0lucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgYWRyZXNzZSA9IGFkcmVzc2VJbnB1dC52YWx1ZTtcclxuICAgIGNvbnN0IHRlbCA9IHRlbElucHV0LnZhbHVlO1xyXG4gICAgY29uc3QgYWRyZXNzZWVjb2xlID0gYWRyZXNzZWVjb2xlSW5wdXQudmFsdWU7XHJcbiAgICBjb25zdCBlbWFpbGVjb2xlID0gZW1haWxlY29sZUlucHV0LnZhbHVlO1xyXG4gICAgY29uc3Qgc2VjdGV1ciA9IHNlY3RldXJJbnB1dC52YWx1ZTtcclxuICAgIGNvbnN0IG5vbWVjb2xlID0gbm9tSW5wdXQudmFsdWU7XHJcbiAgICBjb25zdCBzcmNQcm9maWwgPSBcIi4uLy4uLy4uL3NyYy9hc3NldHMvaW1hZ2VzL3Byb2ZpbC5qcGVnXCI7XHJcbiAgICBcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHVzZXJDcmVkZW50aWFsID0gYXdhaXQgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkKFxyXG4gICAgICAgIGF1dGgsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmRcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2VyQ3JlZGVudGlhbC51c2VyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICAgICAgbm9tOiBub20sXHJcbiAgICAgICAgICBwcmVub206IHByZW5vbSxcclxuICAgICAgICAgIHN0YXR1czogc3RhdHVzLFxyXG4gICAgICAgICAgYWRyZXNzZTogYWRyZXNzZSxcclxuICAgICAgICAgIHRlbDogdGVsLFxyXG4gICAgICAgICAgYWRyZXNzZWVjb2xlOiBhZHJlc3NlZWNvbGUsXHJcbiAgICAgICAgICBlbWFpbGVjb2xlOiBlbWFpbGVjb2xlLFxyXG4gICAgICAgICAgc2VjdGV1cjogc2VjdGV1cixcclxuICAgICAgICAgIG5vbWVjb2xlOiBub21lY29sZSxcclxuICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgIHVybDogc3JjUHJvZmlsLFxyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgY29uc3QgdXNlclJlZiA9IGNvbGxlY3Rpb24oZGIsIFwidXRpbGlzYXRldXJzXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyh1c2VyUmVmKTtcclxuICAgICAgYXdhaXQgYWRkRG9jKHVzZXJSZWYsIHVzZXJEYXRhKTtcclxuICAgICAgXHJcbiAgICAgIGFsZXJ0KFwiVXRpbGlzYXRldXIgZW5yZWdpc3Ryw6kgYXZlYyBzdWNjw6hzXCIpO1xyXG4gICAgICBcclxuICAgICAgLy8gVm91cyBwb3V2ZXogcmVkaXJpZ2VyIGwndXRpbGlzYXRldXIgdmVycyB1bmUgYXV0cmUgcGFnZSBpY2kgc2kgbsOpY2Vzc2FpcmVcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGVycm9yQ29kZSA9IGVycm9yLmNvZGU7XHJcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2luc2NyaXB0aW9uIDpcIiwgZXJyb3JDb2RlLCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgZW1haWxJbnB1dC52YWx1ZSA9IFwiXCJcclxuICAgIHBhc3N3b3JkSW5wdXQudmFsdWUgPSBcIlwiXHJcbiAgICBub21JbnB1dC52YWx1ZSA9IFwiXCJcclxuICAgIHByZW5vbUlucHV0LnZhbHVlID0gXCJcIlxyXG4gICAgc3RhdHVzSW5wdXQudmFsdWUgPSBcIlwiXHJcbiAgICBhZHJlc3NlSW5wdXQudmFsdWUgPSBcIlwiXHJcbiAgICB0ZWxJbnB1dC52YWx1ZSA9IFwiXCJcclxuICAgIGFkcmVzc2VlY29sZUlucHV0LnZhbHVlID0gXCJcIlxyXG4gICAgZW1haWxlY29sZUlucHV0LnZhbHVlID0gXCJcIlxyXG4gICAgc2VjdGV1cklucHV0LnZhbHVlID0gXCJcIlxyXG4gICAgbm9tZWNvbGVJbnB1dC52YWx1ZSA9IFwiXCJcclxuXHJcbiAgfTtcclxuXHJcbmNvbnNvbGUubG9nKCdwYWdlIGluc2NyaXB0aW9uJylcclxuY29uc3QgcmVnaXN0cmF0aW9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVnaXN0cmF0aW9uLWZvcm1cIik7XHJcbnJlZ2lzdHJhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVSZWdpc3RyYXRpb24pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pagesJS/inscription.js\n");

/***/ })

}]);