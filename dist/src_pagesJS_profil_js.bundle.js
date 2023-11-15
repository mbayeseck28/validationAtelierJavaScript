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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/database */ \"./node_modules/firebase/database/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyBQ3SrfEimEPtzCFyxR0vWBK8BJ_K4Ma48\",\r\n  authDomain: \"mixte-feewi.firebaseapp.com\",\r\n  projectId: \"mixte-feewi\",\r\n  storageBucket: \"mixte-feewi.appspot.com\",\r\n  messagingSenderId: \"1083213454329\",\r\n  appId: \"1:1083213454329:web:df3deafe22a82ad34e3b28\"\r\n};\r\n\r\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.getAuth)(app);\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getFirestore)(app); \r\nconst database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__.getDatabase)();\r\n\r\n\r\nconst formProfil = document.getElementById('formProfil')\r\nformProfil.style.display = 'none'\r\n\r\n;(0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.onAuthStateChanged)(auth, (user) => {\r\n    if (user) {\r\n        console.log(\"Utilisateur connecté\");\r\n        var userEmail = user.email;\r\n        const userRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(db, \"utilisateurs\");\r\n        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.onSnapshot)(userRef, (snapshot) => {\r\n          let userRef = [];\r\n          snapshot.docs.forEach((doc) => {\r\n            userRef.push({...doc.data(), id: doc.id })\r\n          })\r\n          userRef.forEach((utilisateur => {\r\n            // Créez une référence au document de l'utilisateur dans Firestore\r\n            const userDocRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(db, \"utilisateurs\", utilisateur.id);\r\n            \r\n            if (utilisateur.email == userEmail) {    \r\n                const btnEnregistrerInfo = document.getElementById('btnEnregistrerInfo')            \r\n                const email = document.getElementById(\"userEmail\");\r\n                const password = document.getElementById(\"password\");\r\n                const nom = document.getElementById(\"userNom\");\r\n                const prenom = document.getElementById(\"userPrenom\");\r\n                const status = document.getElementById(\"userStatus\");\r\n                const adresse = document.getElementById(\"userAdress\");\r\n                const tel = document.getElementById(\"userTel\");\r\n                const adresseecole = document.getElementById(\"adresseEcole\");\r\n                const emailecole = document.getElementById(\"emailEcole\");\r\n                const secteur = document.getElementById(\"secteurEcole\");\r\n                const nomecole = document.getElementById(\"nomEcole\");\r\n                const imgProfil = document.getElementById('imgProfil');\r\n                const ProfilNav = document.querySelector('.ProfilNav');\r\n                const profilVoir = document.querySelector('.profilVoir');\r\n                const nomUser = document.querySelector('.nomUser');\r\n                const statusUser = document.querySelector('.statusUser')\r\n\r\n                prenom.value = utilisateur.prenom\r\n                nom.value = utilisateur.nom\r\n                status.value = utilisateur.status\r\n                adresse.value = utilisateur.adresse\r\n                email.value = utilisateur.email\r\n                tel.value = utilisateur.tel\r\n                nomecole.value = utilisateur.nomecole\r\n                adresseecole.value = utilisateur.adresseecole\r\n                emailecole.value = utilisateur.emailecole\r\n                secteur.value = utilisateur.secteur\r\n                imgProfil.src = utilisateur.url\r\n                ProfilNav.src = utilisateur.url;\r\n                profilVoir.src = utilisateur.url;\r\n                nomUser.innerText = prenom.value + ' ' + nom.value;\r\n                statusUser.innerText = status.value;\r\n                \r\n              let loaderContainer = document.querySelector(\".chargement-page\");\r\n              loaderContainer.style.display = \"none\";\r\n              formProfil.style.display = 'block'\r\n\r\n                formProfil.addEventListener(\"submit\", modifProfil);\r\n                // Nous avons un élément input de type file avec l'id 'profilePicture'\r\n                const fileInput = document.getElementById('profilePicture');\r\n\r\n                // Lorsque l'utilisateur sélectionne un fichier, nous l'obtenons\r\n                fileInput.addEventListener('change', function(e) {\r\n                  var file = e.target.files[0];\r\n                  if (!file.type.match('image.*')) {\r\n                   alert('Veuillez sélectionner un fichier image');\r\n                   return;\r\n                  }\r\n                  modifPhoto(file);\r\n                });\r\n\r\n                \r\n                //  fonction modifier information profil\r\n                function modifProfil(e) {\r\n                  e.preventDefault();\r\n                  // Mettez à jour les valeurs des champs de l'utilisateur\r\n                  utilisateur.prenom = prenom.value\r\n                  utilisateur.nom = nom.value\r\n                  utilisateur.status = status.value\r\n                  utilisateur.adresse = adresse.value\r\n                  utilisateur.email = email.value\r\n                  utilisateur.tel = tel.value\r\n                  utilisateur.nomecole = nomecole.value\r\n                  utilisateur.adresseecole = adresseecole.value\r\n                  utilisateur.emailecole = emailecole.value\r\n                  utilisateur.secteur = secteur.value\r\n\r\n                  // Mettez à jour le document dans Firestore\r\n                  ;(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {\r\n                    prenom: prenom.value,\r\n                    nom: nom.value,\r\n                    status: status.value,\r\n                    adresse: adresse.value,\r\n                    email: email.value,\r\n                    tel: tel.value,\r\n                    nomecole: nomecole.value,\r\n                    adresseecole: adresseecole.value,\r\n                    emailecole: emailecole.value,\r\n                    secteur: secteur.value,\r\n                  }).catch((error) => {\r\n                    console.error(\"Error updating document: \", error);\r\n                  });\r\n                  \r\n                  nomUser.innerText = utilisateur.prenom + ' ' + utilisateur.nom;\r\n                  statusUser.innerText = utilisateur.status;\r\n                  alert('modification effectuer avec succés')\r\n                }  \r\n                \r\n                \r\n                //  fonction modifier photo profil\r\n                function modifPhoto(file){\r\n                  // Crée une référence à Firebase Storage\r\n                  const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getStorage)();\r\n                  // Crée une référence au chemin où le fichier sera stocké\r\n                  const storageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.ref)(storage, utilisateur.nom + '/profilePicture/' + file.name);\r\n                  // Télécharge le fichier à Firebase Storage\r\n                  (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.uploadBytes)(storageRef, file).then((snapshot) => {\r\n                    console.log('Un fichier ou un blob a été téléchargé!');\r\n                    // Obtient l'URL de téléchargement du fichier\r\n                    (0,firebase_storage__WEBPACK_IMPORTED_MODULE_1__.getDownloadURL)(storageRef).then((url) => {\r\n                      // Met à jour l'URL de l'image de profil de l'utilisateur dans Firebase Auth\r\n                      (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.updateProfile)(user, {\r\n                        photoURL: url\r\n                      }).then(() => {\r\n                        // Met à jour la source de l'image de profil dans le DOM\r\n                        imgProfil.src = url;\r\n                        ProfilNav.src = url;\r\n                        profilVoir.src = url;\r\n\r\n                      // Mettez à jour la valeur du champs url de l'utilisateur dans firebase\r\n                        utilisateur.url = url;\r\n                        // Mettez à jour le document dans Firestore\r\n                        (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.updateDoc)(userDocRef, {\r\n                          url: url,\r\n                        }).catch((error) => {\r\n                          console.error(\"Error updating document: \", error);\r\n                        });\r\n                      }).catch((error) => {\r\n                        // Affiche une erreur si la mise à jour du profil échoue\r\n                        console.error('Erreur lors de la mise à jour du profil:', error);\r\n                      });\r\n                    });\r\n                  }).catch((error) => {\r\n                    // Affiche une erreur si le téléchargement du fichier échoue\r\n                    console.error('Erreur lors du téléchargement du fichier:', error);\r\n                  });\r\n                }  \r\n                \r\n            }\r\n          }))\r\n        });\r\n    } else {\r\n        console.log(\"Aucun utilisateur connecté\");\r\n    }\r\n});\r\n\r\n\r\n\r\nconsole.log(\"page profil\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXNKUy9wcm9maWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBT0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFsaWRhdGlvbmF0ZWxpZXJqcy8uL3NyYy9wYWdlc0pTL3Byb2ZpbC5qcz8yYWE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldFN0b3JhZ2UsIHJlZiwgdXBsb2FkQnl0ZXMsIGdldERvd25sb2FkVVJMIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgZ2V0RGF0YWJhc2UsIHJlZiBhcyByZWZEYXRhYmFzZSwgc2V0LCBnZXQgfSBmcm9tIFwiZmlyZWJhc2UvZGF0YWJhc2VcIjtcclxuaW1wb3J0IHtcclxuICBnZXRBdXRoLFxyXG4gIGNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQsXHJcbiAgdXBkYXRlUHJvZmlsZSAsXHJcbn0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHtcclxuICBnZXRGaXJlc3RvcmUsXHJcbiAgY29sbGVjdGlvbixcclxuICBhZGREb2MsXHJcbiAgZG9jLFxyXG4gIHVwZGF0ZURvYyxcclxuICBnZXREb2MsXHJcbiAgb25TbmFwc2hvdCxcclxufSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcblxyXG5cclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUJRM1NyZkVpbUVQdHpDRnl4UjB2V0JLOEJKX0s0TWE0OFwiLFxyXG4gIGF1dGhEb21haW46IFwibWl4dGUtZmVld2kuZmlyZWJhc2VhcHAuY29tXCIsXHJcbiAgcHJvamVjdElkOiBcIm1peHRlLWZlZXdpXCIsXHJcbiAgc3RvcmFnZUJ1Y2tldDogXCJtaXh0ZS1mZWV3aS5hcHBzcG90LmNvbVwiLFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjEwODMyMTM0NTQzMjlcIixcclxuICBhcHBJZDogXCIxOjEwODMyMTM0NTQzMjk6d2ViOmRmM2RlYWZlMjJhODJhZDM0ZTNiMjhcIlxyXG59O1xyXG5cclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7IFxyXG5jb25zdCBkYXRhYmFzZSA9IGdldERhdGFiYXNlKCk7XHJcblxyXG5cclxuY29uc3QgZm9ybVByb2ZpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtUHJvZmlsJylcclxuZm9ybVByb2ZpbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG5vbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJVdGlsaXNhdGV1ciBjb25uZWN0w6lcIik7XHJcbiAgICAgICAgdmFyIHVzZXJFbWFpbCA9IHVzZXIuZW1haWw7XHJcbiAgICAgICAgY29uc3QgdXNlclJlZiA9IGNvbGxlY3Rpb24oZGIsIFwidXRpbGlzYXRldXJzXCIpO1xyXG4gICAgICAgIG9uU25hcHNob3QodXNlclJlZiwgKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICBsZXQgdXNlclJlZiA9IFtdO1xyXG4gICAgICAgICAgc25hcHNob3QuZG9jcy5mb3JFYWNoKChkb2MpID0+IHtcclxuICAgICAgICAgICAgdXNlclJlZi5wdXNoKHsuLi5kb2MuZGF0YSgpLCBpZDogZG9jLmlkIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdXNlclJlZi5mb3JFYWNoKCh1dGlsaXNhdGV1ciA9PiB7XHJcbiAgICAgICAgICAgIC8vIENyw6lleiB1bmUgcsOpZsOpcmVuY2UgYXUgZG9jdW1lbnQgZGUgbCd1dGlsaXNhdGV1ciBkYW5zIEZpcmVzdG9yZVxyXG4gICAgICAgICAgICBjb25zdCB1c2VyRG9jUmVmID0gZG9jKGRiLCBcInV0aWxpc2F0ZXVyc1wiLCB1dGlsaXNhdGV1ci5pZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodXRpbGlzYXRldXIuZW1haWwgPT0gdXNlckVtYWlsKSB7ICAgIFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYnRuRW5yZWdpc3RyZXJJbmZvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkVucmVnaXN0cmVySW5mbycpICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlckVtYWlsXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyTm9tXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJlbm9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyUHJlbm9tXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyU3RhdHVzXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWRyZXNzZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlckFkcmVzc1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlclRlbFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFkcmVzc2VlY29sZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRyZXNzZUVjb2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZW1haWxlY29sZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW1haWxFY29sZVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY3RldXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlY3RldXJFY29sZVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5vbWVjb2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub21FY29sZVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltZ1Byb2ZpbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWdQcm9maWwnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IFByb2ZpbE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5Qcm9maWxOYXYnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2ZpbFZvaXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZmlsVm9pcicpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgbm9tVXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ub21Vc2VyJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXNVc2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1c1VzZXInKVxyXG5cclxuICAgICAgICAgICAgICAgIHByZW5vbS52YWx1ZSA9IHV0aWxpc2F0ZXVyLnByZW5vbVxyXG4gICAgICAgICAgICAgICAgbm9tLnZhbHVlID0gdXRpbGlzYXRldXIubm9tXHJcbiAgICAgICAgICAgICAgICBzdGF0dXMudmFsdWUgPSB1dGlsaXNhdGV1ci5zdGF0dXNcclxuICAgICAgICAgICAgICAgIGFkcmVzc2UudmFsdWUgPSB1dGlsaXNhdGV1ci5hZHJlc3NlXHJcbiAgICAgICAgICAgICAgICBlbWFpbC52YWx1ZSA9IHV0aWxpc2F0ZXVyLmVtYWlsXHJcbiAgICAgICAgICAgICAgICB0ZWwudmFsdWUgPSB1dGlsaXNhdGV1ci50ZWxcclxuICAgICAgICAgICAgICAgIG5vbWVjb2xlLnZhbHVlID0gdXRpbGlzYXRldXIubm9tZWNvbGVcclxuICAgICAgICAgICAgICAgIGFkcmVzc2VlY29sZS52YWx1ZSA9IHV0aWxpc2F0ZXVyLmFkcmVzc2VlY29sZVxyXG4gICAgICAgICAgICAgICAgZW1haWxlY29sZS52YWx1ZSA9IHV0aWxpc2F0ZXVyLmVtYWlsZWNvbGVcclxuICAgICAgICAgICAgICAgIHNlY3RldXIudmFsdWUgPSB1dGlsaXNhdGV1ci5zZWN0ZXVyXHJcbiAgICAgICAgICAgICAgICBpbWdQcm9maWwuc3JjID0gdXRpbGlzYXRldXIudXJsXHJcbiAgICAgICAgICAgICAgICBQcm9maWxOYXYuc3JjID0gdXRpbGlzYXRldXIudXJsO1xyXG4gICAgICAgICAgICAgICAgcHJvZmlsVm9pci5zcmMgPSB1dGlsaXNhdGV1ci51cmw7XHJcbiAgICAgICAgICAgICAgICBub21Vc2VyLmlubmVyVGV4dCA9IHByZW5vbS52YWx1ZSArICcgJyArIG5vbS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHN0YXR1c1VzZXIuaW5uZXJUZXh0ID0gc3RhdHVzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgbGV0IGxvYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2hhcmdlbWVudC1wYWdlXCIpO1xyXG4gICAgICAgICAgICAgIGxvYWRlckNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgZm9ybVByb2ZpbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcm1Qcm9maWwuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBtb2RpZlByb2ZpbCk7XHJcbiAgICAgICAgICAgICAgICAvLyBOb3VzIGF2b25zIHVuIMOpbMOpbWVudCBpbnB1dCBkZSB0eXBlIGZpbGUgYXZlYyBsJ2lkICdwcm9maWxlUGljdHVyZSdcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlUGljdHVyZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIExvcnNxdWUgbCd1dGlsaXNhdGV1ciBzw6lsZWN0aW9ubmUgdW4gZmljaGllciwgbm91cyBsJ29idGVub25zXHJcbiAgICAgICAgICAgICAgICBmaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoIWZpbGUudHlwZS5tYXRjaCgnaW1hZ2UuKicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICBhbGVydCgnVmV1aWxsZXogc8OpbGVjdGlvbm5lciB1biBmaWNoaWVyIGltYWdlJyk7XHJcbiAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgbW9kaWZQaG90byhmaWxlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gIGZvbmN0aW9uIG1vZGlmaWVyIGluZm9ybWF0aW9uIHByb2ZpbFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbW9kaWZQcm9maWwoZSkge1xyXG4gICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgIC8vIE1ldHRleiDDoCBqb3VyIGxlcyB2YWxldXJzIGRlcyBjaGFtcHMgZGUgbCd1dGlsaXNhdGV1clxyXG4gICAgICAgICAgICAgICAgICB1dGlsaXNhdGV1ci5wcmVub20gPSBwcmVub20udmFsdWVcclxuICAgICAgICAgICAgICAgICAgdXRpbGlzYXRldXIubm9tID0gbm9tLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIHV0aWxpc2F0ZXVyLnN0YXR1cyA9IHN0YXR1cy52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB1dGlsaXNhdGV1ci5hZHJlc3NlID0gYWRyZXNzZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB1dGlsaXNhdGV1ci5lbWFpbCA9IGVtYWlsLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIHV0aWxpc2F0ZXVyLnRlbCA9IHRlbC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB1dGlsaXNhdGV1ci5ub21lY29sZSA9IG5vbWVjb2xlLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgIHV0aWxpc2F0ZXVyLmFkcmVzc2VlY29sZSA9IGFkcmVzc2VlY29sZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB1dGlsaXNhdGV1ci5lbWFpbGVjb2xlID0gZW1haWxlY29sZS52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICB1dGlsaXNhdGV1ci5zZWN0ZXVyID0gc2VjdGV1ci52YWx1ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gTWV0dGV6IMOgIGpvdXIgbGUgZG9jdW1lbnQgZGFucyBGaXJlc3RvcmVcclxuICAgICAgICAgICAgICAgICAgdXBkYXRlRG9jKHVzZXJEb2NSZWYsIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmVub206IHByZW5vbS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBub206IG5vbS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBhZHJlc3NlOiBhZHJlc3NlLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0ZWw6IHRlbC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBub21lY29sZTogbm9tZWNvbGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRyZXNzZWVjb2xlOiBhZHJlc3NlZWNvbGUudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxlY29sZTogZW1haWxlY29sZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzZWN0ZXVyOiBzZWN0ZXVyLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZG9jdW1lbnQ6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgbm9tVXNlci5pbm5lclRleHQgPSB1dGlsaXNhdGV1ci5wcmVub20gKyAnICcgKyB1dGlsaXNhdGV1ci5ub207XHJcbiAgICAgICAgICAgICAgICAgIHN0YXR1c1VzZXIuaW5uZXJUZXh0ID0gdXRpbGlzYXRldXIuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgICBhbGVydCgnbW9kaWZpY2F0aW9uIGVmZmVjdHVlciBhdmVjIHN1Y2PDqXMnKVxyXG4gICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gIGZvbmN0aW9uIG1vZGlmaWVyIHBob3RvIHByb2ZpbFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbW9kaWZQaG90byhmaWxlKXtcclxuICAgICAgICAgICAgICAgICAgLy8gQ3LDqWUgdW5lIHLDqWbDqXJlbmNlIMOgIEZpcmViYXNlIFN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgLy8gQ3LDqWUgdW5lIHLDqWbDqXJlbmNlIGF1IGNoZW1pbiBvw7kgbGUgZmljaGllciBzZXJhIHN0b2Nrw6lcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgc3RvcmFnZVJlZiA9IHJlZihzdG9yYWdlLCB1dGlsaXNhdGV1ci5ub20gKyAnL3Byb2ZpbGVQaWN0dXJlLycgKyBmaWxlLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBUw6lsw6ljaGFyZ2UgbGUgZmljaGllciDDoCBGaXJlYmFzZSBTdG9yYWdlXHJcbiAgICAgICAgICAgICAgICAgIHVwbG9hZEJ5dGVzKHN0b3JhZ2VSZWYsIGZpbGUpLnRoZW4oKHNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuIGZpY2hpZXIgb3UgdW4gYmxvYiBhIMOpdMOpIHTDqWzDqWNoYXJnw6khJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT2J0aWVudCBsJ1VSTCBkZSB0w6lsw6ljaGFyZ2VtZW50IGR1IGZpY2hpZXJcclxuICAgICAgICAgICAgICAgICAgICBnZXREb3dubG9hZFVSTChzdG9yYWdlUmVmKS50aGVuKCh1cmwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIC8vIE1ldCDDoCBqb3VyIGwnVVJMIGRlIGwnaW1hZ2UgZGUgcHJvZmlsIGRlIGwndXRpbGlzYXRldXIgZGFucyBGaXJlYmFzZSBBdXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9maWxlKHVzZXIsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGhvdG9VUkw6IHVybFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1ldCDDoCBqb3VyIGxhIHNvdXJjZSBkZSBsJ2ltYWdlIGRlIHByb2ZpbCBkYW5zIGxlIERPTVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdQcm9maWwuc3JjID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9maWxOYXYuc3JjID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxWb2lyLnNyYyA9IHVybDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyBNZXR0ZXogw6Agam91ciBsYSB2YWxldXIgZHUgY2hhbXBzIHVybCBkZSBsJ3V0aWxpc2F0ZXVyIGRhbnMgZmlyZWJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbGlzYXRldXIudXJsID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNZXR0ZXogw6Agam91ciBsZSBkb2N1bWVudCBkYW5zIEZpcmVzdG9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEb2ModXNlckRvY1JlZiwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgZG9jdW1lbnQ6IFwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFmZmljaGUgdW5lIGVycmV1ciBzaSBsYSBtaXNlIMOgIGpvdXIgZHUgcHJvZmlsIMOpY2hvdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbGEgbWlzZSDDoCBqb3VyIGR1IHByb2ZpbDonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWZmaWNoZSB1bmUgZXJyZXVyIHNpIGxlIHTDqWzDqWNoYXJnZW1lbnQgZHUgZmljaGllciDDqWNob3VlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZHUgdMOpbMOpY2hhcmdlbWVudCBkdSBmaWNoaWVyOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9ICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSlcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBdWN1biB1dGlsaXNhdGV1ciBjb25uZWN0w6lcIik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcblxyXG5jb25zb2xlLmxvZyhcInBhZ2UgcHJvZmlsXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pagesJS/profil.js\n");

/***/ })

}]);