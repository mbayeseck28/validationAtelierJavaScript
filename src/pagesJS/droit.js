document.getElementById("bouton").addEventListener("click", (e) => {
  console.log("Bouton cliqué");

  const one = document.querySelector(".one");
  one.classList.add("transition-left");
  console.log("Element avec la classe 'one':", one);


  setTimeout(() => {
    one.style.display = "none";
    one.classList.remove("transition-left");
  }, 500);

  document.querySelector(".center2").style.display = "block";
});


// Import the necessary functions from the required SDKs
const { initializeApp } = require('firebase/app');
const {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  onSnapshot,
  serverTimestamp,
} = require('firebase/firestore');
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

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
const contenuRef = doc(db, 'droit', 'zPxEvR7D72SaaZVQa5Wb');

// Créez une promesse pour récupérer le document Firestore
function loadContentFromFirestore() { 
  return new Promise((resolve, reject) => {
   getDoc(contenuRef)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        // Parsez les données dans un format utilisable par Quill
        const data = JSON.parse(docSnapshot.data().contenu);

        // Chargez les données dans l'éditeur Quill
        quill.setContents(data.ops);
        resolve();
      } else {
        console.log("Aucun document trouvé!");
        reject();
      }
    })
    .catch((error) => {
      console.log("Erreur lors de la récupération du document:", error);
      reject();
    });
})
};

// Attendez que la promesse soit résolue avant d'exécuter le reste du code
loadContentFromFirestore()
  .then(() => {

    // Mettez en place l'événement text-change pour détecter les modifications dans l'éditeur Quill
    var change = new Quill.import('delta');
    quill.on('text-change', function (delta, oldDelta, source) {
  if (source === 'user') {
    change = change.compose(delta);

    sauvegarderContenuDansFirestore();
  }
var data = quill.getContents();
var deltaString = JSON.stringify(data);
localStorage.setItem('editor-content', deltaString);


});

document.addEventListener("DOMContentLoaded", function () {
  loadContentFromFirestore();
});



document.getElementById("modif").addEventListener("click", () => {
  sauvegarderContenuDansFirestore();
});

})
  .catch(() => {
    // Ce bloc sera exécuté en cas d'échec du chargement du contenu depuis Firestore
    console.log("Le chargement du contenu depuis Firestore a échoué.");
});


function sauvegarderContenuDansFirestore() {

  const contenu = quill.getContents();

  // Save the content to Firestore
  setDoc(contenuRef, {
    contenu: JSON.stringify(contenu),
    timestamp: serverTimestamp(),
  })
    .then(() => {
      console.log('Content saved successfully in Firestore!');
    })
    .catch((error) => {
      console.error("Error saving content:", error);
    });
}
