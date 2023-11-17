document.getElementById("bouton").addEventListener("click", (e) => {
    
    const one = document.querySelector(".one");
    one.classList.add("transition-left");
    
    
    setTimeout(() => {
        one.style.display = "none";
        one.classList.remove("transition-left");
    }, 500); 

   
    document.querySelector(".center2").style.display = "block";
});


// Importer les fonctions dont vous avez besoin à partir des SDKs dont vous avez besoin
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, serverTimestamp } from 'firebase/firestore';

// Configuration de votre application web Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY",
  authDomain: "validation-atelier-js.firebaseapp.com",
  databaseURL: "https://validation-atelier-js-default-rtdb.firebaseio.com",
  projectId: "validation-atelier-js",
  storageBucket: "validation-atelier-js.appspot.com",
  messagingSenderId: "466332062090",
  appId: "1:466332062090:web:ffbe45ef4a7371a7b5b873"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Référence Firestore
const contenuRef = doc(db, 'droit', 'zPxEvR7D72SaaZVQa5Wb');

function enregistrerModifications() {
  // Récupérer le contenu de la div
  const contenuDiv = document.getElementById('editor-container').textContent;


  // Enregistrer le contenu dans Firestore
  setDoc(contenuRef, {
    contenu: contenuDiv,
    timestamp: serverTimestamp(),
  })
  .then(() => {
    console.log('Contenu enregistré avec succès dans Firestore!');
  })
  .catch((error) => {
    console.error("Erreur lors de l'enregistrement du contenu:", error);
  });
}

document.getElementById("modif").addEventListener("click", enregistrerModifications);


getDoc(contenuRef).then((docSnapshot) => {
  if (docSnapshot.exists()) {
      const contenu = docSnapshot.data().contenu;
      quill.root.innerHTML = contenu;
  }
});

// Mettre à jour le contenu en temps réel
onSnapshot(contenuRef, (docSnapshot) => {
  if (docSnapshot.exists()) {
      const contenu = docSnapshot.data().contenu;
      quill.root.innerHTML = contenu;
  }
});

quill.on('text-change', function() {
    var delta = quill.getContents();
    var deltaString = JSON.stringify(delta);
    localStorage.setItem('editor-content', deltaString);

    setDoc(contenuRef, {
      contenu: quill.root.innerHTML,
      timestamp: serverTimestamp(),
  });

});