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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\ndocument.getElementById(\"bouton\").addEventListener(\"click\", (e) => {\r\n  const one = document.querySelector(\".one\");\r\n  one.classList.add(\"transition-left\");\r\n\r\n  setTimeout(() => {\r\n      one.style.display = \"none\";\r\n      one.classList.remove(\"transition-left\");\r\n  }, 500);\r\n\r\n  document.querySelector(\".center2\").style.display = \"block\";\r\n});\r\n\r\n// Import the necessary functions from the required SDKs\r\n// Importer les fonctions dont vous avez besoin à partir des SDKs dont vous avez besoin\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY\",\r\n  authDomain: \"validation-atelier-js.firebaseapp.com\",\r\n  databaseURL: \"https://validation-atelier-js-default-rtdb.firebaseio.com\",\r\n  projectId: \"validation-atelier-js\",\r\n  storageBucket: \"validation-atelier-js.appspot.com\",\r\n  messagingSenderId: \"466332062090\",\r\n  appId: \"1:466332062090:web:ffbe45ef4a7371a7b5b873\"\r\n};\r\n\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\r\nconst contenuRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(db, 'droit', 'mZ2VxP5Ea2aAzJlzN9QV');\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", async function () {\r\n  // Charger le contenu depuis Firestore dès que la page est prête\r\n  await getDataFromFirestore();\r\n});\r\n\r\n// db.collection(\"droit\").doc(\"mZ2VxP5Ea2aAzJlzN9QV\")\r\n//     .onSnapshot((doc) => {\r\n//         console.log(\"Current data: \", doc.data());\r\n//         updateStarCount(postElement, doc.data().HTML );\r\n//     });\r\n\r\n//     function updateStarCount(el, val) {\r\n//       el.innerHTML = `${val} post`;\r\n//       consol.log(val);\r\n//     }\r\n// async function getDataFromFirestore() {\r\n//   console.log(\"Tentative de récupération du contenu depuis Firestore...\");\r\n\r\n//   try {\r\n//     const docSnap = await getDoc(contenuRef);\r\n\r\n//     if (docSnap.exists()) {\r\n//       console.log(\"Document data:\", docSnap.data());\r\n\r\n//       // Assurez-vous que l'élément avec l'ID 'editor-container' existe sur votre page HTML\r\n//       const editorContainer = document.getElementById('editor-container');\r\n\r\n//       if (editorContainer) {\r\n//         editorContainer.innerText = docSnap.data().HTML;\r\n\r\n//       } else {\r\n//         console.error(\"L'élément avec l'ID 'editor-container' n'a pas été trouvé sur la page.\");\r\n//       }\r\n//     } else {\r\n//       console.log(\"Aucun document trouvé !\");\r\n//     }\r\n//   } catch (error) {\r\n//     console.error(\"Erreur lors de la récupération des données depuis Firestore:\", error);\r\n//   }\r\n// }\r\n\r\n\r\n//   getDoc(contenuRef)\r\n//     .then((docSnap) => {\r\n//       console.log(\"Réponse de Firestore :\", doc);\r\n//       if (docSnap.exists()) {\r\n//         const data = docSnap.data().contenu;\r\n//         console.log(\"Données du document :\", data);\r\n//         // Mettez à jour le contenu de l'éditeur avec les données de Firestore\r\n//         document.getElementById('editor-container').textContent = \"\";\r\n//         document.getElementById('editor-container').textContent = data;\r\n//         console.log(\"Contenu mis à jour :\", data);\r\n//       } else {\r\n//         console.log(\"Aucun document trouvé !\");\r\n//       }\r\n//     })\r\n//     .catch((error) => {\r\n//       console.error(\"Erreur lors de la récupération du document depuis Firestore:\", error);\r\n//     });\r\n// }\r\n\r\nconst contenus = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, \"textes\")\r\n\r\n \r\nconst addForm = document.querySelector(\".ajouter\");\r\naddForm.addEventListener(\"submit\", (e) => {\r\n  e.preventDefault()\r\n\r\n\r\n  ;(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(contenus, {\r\n    title1 : addForm.titre1.value,\r\n    title2 :addForm.titre2.value,\r\n    title3 : addForm.titre3.value,\r\n    soustitre1: addForm.soutitre1.value,\r\n    soustitre2 : addForm.soutitre2.value,\r\n    dateDajout : (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.serverTimestamp)()\r\n  })\r\n})\r\n\r\n// function sauvegarderContenuDansFirestore() {\r\n  \r\n//   const contenuDiv = document.getElementById('editor-container').innerText;\r\n\r\n\r\n//   console.log(\"Contenu à sauvegarder :\", contenuDiv);\r\n\r\n\r\n\r\n\r\n//   // Save the content to Firestore\r\n//   return setDoc(contenuRef, {\r\n//     contenu: contenuDiv,\r\n//     timestamp: serverTimestamp(),\r\n//   })\r\n//     .then(() => {\r\n//       console.log('Content saved successfully in Firestore!');\r\n//     })\r\n//     .catch((error) => {\r\n//       console.error(\"Error saving content:\", error);\r\n//     });\r\n// }\r\n\r\n// document.getElementById(\"modif\").addEventListener(\"click\",  () => {\r\n//   sauvegarderContenuDansFirestore();\r\n// })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9kcm9pdC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YWxpZGF0aW9uYXRlbGllcmpzLy4vc3JjL3BhZ2VzSlMvZHJvaXQuanM/MGU0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvdXRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBjb25zdCBvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9uZVwiKTtcclxuICBvbmUuY2xhc3NMaXN0LmFkZChcInRyYW5zaXRpb24tbGVmdFwiKTtcclxuXHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIG9uZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgIG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwidHJhbnNpdGlvbi1sZWZ0XCIpO1xyXG4gIH0sIDUwMCk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2VudGVyMlwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59KTtcclxuXHJcbi8vIEltcG9ydCB0aGUgbmVjZXNzYXJ5IGZ1bmN0aW9ucyBmcm9tIHRoZSByZXF1aXJlZCBTREtzXHJcbi8vIEltcG9ydGVyIGxlcyBmb25jdGlvbnMgZG9udCB2b3VzIGF2ZXogYmVzb2luIMOgIHBhcnRpciBkZXMgU0RLcyBkb250IHZvdXMgYXZleiBiZXNvaW5cclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSwgY29sbGVjdGlvbiwgZG9jLCBnZXREb2MsIHNldERvYywgc2VydmVyVGltZXN0YW1wLCBnZXREb2NGcm9tU2VydmVyLCBhZGREb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xyXG5cclxuXHJcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xyXG4gIGFwaUtleTogXCJBSXphU3lDU1JvMkVad281TFFJTzc1RmV2SUJ2RUtiREQ2MUhOdVlcIixcclxuICBhdXRoRG9tYWluOiBcInZhbGlkYXRpb24tYXRlbGllci1qcy5maXJlYmFzZWFwcC5jb21cIixcclxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL3ZhbGlkYXRpb24tYXRlbGllci1qcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwidmFsaWRhdGlvbi1hdGVsaWVyLWpzXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJ2YWxpZGF0aW9uLWF0ZWxpZXItanMuYXBwc3BvdC5jb21cIixcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI0NjYzMzIwNjIwOTBcIixcclxuICBhcHBJZDogXCIxOjQ2NjMzMjA2MjA5MDp3ZWI6ZmZiZTQ1ZWY0YTczNzFhN2I1Yjg3M1wiXHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcclxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcclxuY29uc3QgY29udGVudVJlZiA9IGRvYyhkYiwgJ2Ryb2l0JywgJ21aMlZ4UDVFYTJhQXpKbHpOOVFWJyk7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gIC8vIENoYXJnZXIgbGUgY29udGVudSBkZXB1aXMgRmlyZXN0b3JlIGTDqHMgcXVlIGxhIHBhZ2UgZXN0IHByw6p0ZVxyXG4gIGF3YWl0IGdldERhdGFGcm9tRmlyZXN0b3JlKCk7XHJcbn0pO1xyXG5cclxuLy8gZGIuY29sbGVjdGlvbihcImRyb2l0XCIpLmRvYyhcIm1aMlZ4UDVFYTJhQXpKbHpOOVFWXCIpXHJcbi8vICAgICAub25TbmFwc2hvdCgoZG9jKSA9PiB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50IGRhdGE6IFwiLCBkb2MuZGF0YSgpKTtcclxuLy8gICAgICAgICB1cGRhdGVTdGFyQ291bnQocG9zdEVsZW1lbnQsIGRvYy5kYXRhKCkuSFRNTCApO1xyXG4vLyAgICAgfSk7XHJcblxyXG4vLyAgICAgZnVuY3Rpb24gdXBkYXRlU3RhckNvdW50KGVsLCB2YWwpIHtcclxuLy8gICAgICAgZWwuaW5uZXJIVE1MID0gYCR7dmFsfSBwb3N0YDtcclxuLy8gICAgICAgY29uc29sLmxvZyh2YWwpO1xyXG4vLyAgICAgfVxyXG4vLyBhc3luYyBmdW5jdGlvbiBnZXREYXRhRnJvbUZpcmVzdG9yZSgpIHtcclxuLy8gICBjb25zb2xlLmxvZyhcIlRlbnRhdGl2ZSBkZSByw6ljdXDDqXJhdGlvbiBkdSBjb250ZW51IGRlcHVpcyBGaXJlc3RvcmUuLi5cIik7XHJcblxyXG4vLyAgIHRyeSB7XHJcbi8vICAgICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZ2V0RG9jKGNvbnRlbnVSZWYpO1xyXG5cclxuLy8gICAgIGlmIChkb2NTbmFwLmV4aXN0cygpKSB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiRG9jdW1lbnQgZGF0YTpcIiwgZG9jU25hcC5kYXRhKCkpO1xyXG5cclxuLy8gICAgICAgLy8gQXNzdXJlei12b3VzIHF1ZSBsJ8OpbMOpbWVudCBhdmVjIGwnSUQgJ2VkaXRvci1jb250YWluZXInIGV4aXN0ZSBzdXIgdm90cmUgcGFnZSBIVE1MXHJcbi8vICAgICAgIGNvbnN0IGVkaXRvckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0b3ItY29udGFpbmVyJyk7XHJcblxyXG4vLyAgICAgICBpZiAoZWRpdG9yQ29udGFpbmVyKSB7XHJcbi8vICAgICAgICAgZWRpdG9yQ29udGFpbmVyLmlubmVyVGV4dCA9IGRvY1NuYXAuZGF0YSgpLkhUTUw7XHJcblxyXG4vLyAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJMJ8OpbMOpbWVudCBhdmVjIGwnSUQgJ2VkaXRvci1jb250YWluZXInIG4nYSBwYXMgw6l0w6kgdHJvdXbDqSBzdXIgbGEgcGFnZS5cIik7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKFwiQXVjdW4gZG9jdW1lbnQgdHJvdXbDqSAhXCIpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGRvbm7DqWVzIGRlcHVpcyBGaXJlc3RvcmU6XCIsIGVycm9yKTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcblxyXG4vLyAgIGdldERvYyhjb250ZW51UmVmKVxyXG4vLyAgICAgLnRoZW4oKGRvY1NuYXApID0+IHtcclxuLy8gICAgICAgY29uc29sZS5sb2coXCJSw6lwb25zZSBkZSBGaXJlc3RvcmUgOlwiLCBkb2MpO1xyXG4vLyAgICAgICBpZiAoZG9jU25hcC5leGlzdHMoKSkge1xyXG4vLyAgICAgICAgIGNvbnN0IGRhdGEgPSBkb2NTbmFwLmRhdGEoKS5jb250ZW51O1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9ubsOpZXMgZHUgZG9jdW1lbnQgOlwiLCBkYXRhKTtcclxuLy8gICAgICAgICAvLyBNZXR0ZXogw6Agam91ciBsZSBjb250ZW51IGRlIGwnw6lkaXRldXIgYXZlYyBsZXMgZG9ubsOpZXMgZGUgRmlyZXN0b3JlXHJcbi8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1jb250YWluZXInKS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbi8vICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXRvci1jb250YWluZXInKS50ZXh0Q29udGVudCA9IGRhdGE7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJDb250ZW51IG1pcyDDoCBqb3VyIDpcIiwgZGF0YSk7XHJcbi8vICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJBdWN1biBkb2N1bWVudCB0cm91dsOpICFcIik7XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0pXHJcbi8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkdSBkb2N1bWVudCBkZXB1aXMgRmlyZXN0b3JlOlwiLCBlcnJvcik7XHJcbi8vICAgICB9KTtcclxuLy8gfVxyXG5cclxuY29uc3QgY29udGVudXMgPSBjb2xsZWN0aW9uKGRiLCBcInRleHRlc1wiKVxyXG5cclxuIFxyXG5jb25zdCBhZGRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ham91dGVyXCIpO1xyXG5hZGRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcblxyXG4gIGFkZERvYyhjb250ZW51cywge1xyXG4gICAgdGl0bGUxIDogYWRkRm9ybS50aXRyZTEudmFsdWUsXHJcbiAgICB0aXRsZTIgOmFkZEZvcm0udGl0cmUyLnZhbHVlLFxyXG4gICAgdGl0bGUzIDogYWRkRm9ybS50aXRyZTMudmFsdWUsXHJcbiAgICBzb3VzdGl0cmUxOiBhZGRGb3JtLnNvdXRpdHJlMS52YWx1ZSxcclxuICAgIHNvdXN0aXRyZTIgOiBhZGRGb3JtLnNvdXRpdHJlMi52YWx1ZSxcclxuICAgIGRhdGVEYWpvdXQgOiBzZXJ2ZXJUaW1lc3RhbXAoKVxyXG4gIH0pXHJcbn0pXHJcblxyXG4vLyBmdW5jdGlvbiBzYXV2ZWdhcmRlckNvbnRlbnVEYW5zRmlyZXN0b3JlKCkge1xyXG4gIFxyXG4vLyAgIGNvbnN0IGNvbnRlbnVEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdG9yLWNvbnRhaW5lcicpLmlubmVyVGV4dDtcclxuXHJcblxyXG4vLyAgIGNvbnNvbGUubG9nKFwiQ29udGVudSDDoCBzYXV2ZWdhcmRlciA6XCIsIGNvbnRlbnVEaXYpO1xyXG5cclxuXHJcblxyXG5cclxuLy8gICAvLyBTYXZlIHRoZSBjb250ZW50IHRvIEZpcmVzdG9yZVxyXG4vLyAgIHJldHVybiBzZXREb2MoY29udGVudVJlZiwge1xyXG4vLyAgICAgY29udGVudTogY29udGVudURpdixcclxuLy8gICAgIHRpbWVzdGFtcDogc2VydmVyVGltZXN0YW1wKCksXHJcbi8vICAgfSlcclxuLy8gICAgIC50aGVuKCgpID0+IHtcclxuLy8gICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgc2F2ZWQgc3VjY2Vzc2Z1bGx5IGluIEZpcmVzdG9yZSEnKTtcclxuLy8gICAgIH0pXHJcbi8vICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgY29udGVudDpcIiwgZXJyb3IpO1xyXG4vLyAgICAgfSk7XHJcbi8vIH1cclxuXHJcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kaWZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICAoKSA9PiB7XHJcbi8vICAgc2F1dmVnYXJkZXJDb250ZW51RGFuc0ZpcmVzdG9yZSgpO1xyXG4vLyB9KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pagesJS/droit.js\n");

/***/ })

}]);