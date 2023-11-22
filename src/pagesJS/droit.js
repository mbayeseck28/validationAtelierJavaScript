document.getElementById("bouton").addEventListener("click", (e) => {
  const one = document.querySelector(".one");
  one.classList.add("transition-left");

  setTimeout(() => {
      one.style.display = "none";
      one.classList.remove("transition-left");
  }, 500);

  document.querySelector(".center2").style.display = "block";
});

// Import the necessary functions from the required SDKs
// Importer les fonctions dont vous avez besoin à partir des SDKs dont vous avez besoin
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, setDoc, serverTimestamp, getDocFromServer } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY",
  authDomain: "validation-atelier-js.firebaseapp.com",
  databaseURL: "https://validation-atelier-js-default-rtdb.firebaseio.com",
  projectId: "validation-atelier-js",
  storageBucket: "validation-atelier-js.appspot.com",
  messagingSenderId: "466332062090",
  appId: "1:466332062090:web:ffbe45ef4a7371a7b5b873"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const contenuRef = doc(db, 'droit', 'mZ2VxP5Ea2aAzJlzN9QV');


// function loadContentFromFirestore() {
//   return new Promise((resolve, reject) => {
//     getDoc(contenuRef)
//       .then((docSnapshot) => {
//         if (docSnapshot.exists()) {
//           // Parsez les données dans un format utilisable par Quill
//           const data = docSnapshot.data().contenu;
//           console.log("Données récupérées depuis Firestore :", data);
          
//           document.getElementById('editor-container').innerHTML = data;
          
          
//           // Chargez les données dans l'éditeur Quill
//           try {
//             if (data) {
//               quill.setContents(data);
//               resolve();
//             } else {
//               console.log("Aucun document trouvé!");
//               reject();
//             }
//           } catch (error) {
//             console.error("Erreur lors de l'analyse du contenu JSON:", error);
//             reject();
//           }
//         }
//       })
//       .catch((error) => {
//         console.error("Erreur lors de la récupération du document Firestore:", error);
//         reject();
//       });
//   });
// }

// // Attendez que la promesse soit résolue avant d'exécuter le reste du code
// loadContentFromFirestore()
//   .then(() => {
//     // Mettez en place l'événement text-change pour détecter les modifications dans l'éditeur Quill
    
//     // quill.on('text-change', function (delta, oldDelta, source) {
//     //   if (source === 'user') {
//     //     change = change.compose(delta);
//     //     sauvegarderContenuDansFirestore();
//     //   }
//     // });
//   })
//   .catch(() => {
//     // Ce bloc sera exécuté en cas d'échec du chargement du contenu depuis Firestore
//     console.log("Le chargement du contenu depuis Firestore a échoué.");
//   });

//   document.addEventListener("DOMContentLoaded", function () {
//       loadContentFromFirestore();
//   });

function sauvegarderContenuDansFirestore() {
  
  const contenuDiv = document.getElementById('editor-container').textContent;

  console.log("Contenu à sauvegarder :", contenuDiv);




  // Save the content to Firestore
  setDoc(contenuRef, {
    contenu: contenuDiv,
    timestamp: serverTimestamp(),
  })
    .then(() => {
      console.log('Content saved successfully in Firestore!');
    })
    .catch((error) => {
      console.error("Error saving content:", error);
    });
}

document.getElementById("modif").addEventListener("click", sauvegarderContenuDansFirestore);