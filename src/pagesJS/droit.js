
// Import the necessary functions from the required SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js'
    
        // If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
        import { getAnalytics } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js'
    
        // Add Firebase products that you want to use
        import { getAuth } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js'
        import { getFirestore, 
            
            doc,
            setDoc,
            getDoc,
            onSnapshot,
            serverTimestamp,
          }  from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js'
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

const auth = getAuth(app);
const db = getFirestore(app);
//const contenuRef = doc(db, 'droit', 'mZ2VxP5Ea2aAzJlzN9QV');

document.getElementById("bouton").addEventListener("click", (e) => {
  const one = document.querySelector(".one");
  one.classList.add("transition-left");


  setTimeout(() => {
      one.style.display = "none";
      one.classList.remove("transition-left");
  }, 500);

  document.querySelector(".center2").style.display = "block";
});


// Créez une promesse pour récupérer le document Firestore
/*function loadContentFromFirestore() { 
  return new Promise((resolve, reject) => {
   getDoc(contenuRef)
    .then((docSnapshot) => {
      if (docSnapshot.exists()) {
        // Parsez les données dans un format utilisable par Quill
        const data = docSnapshot.data().contenu;
        console.log("Données récupérées depuis Firestore :", data);

        // Chargez les données dans l'éditeur Quill
        try {
          if(data) { 
          const parsedData = JSON.parse(data);
          quill.setContents(parsedData.ops);
          resolve();
        } else{
          console.log("Aucun document trouvé!");
          reject();
        }
         } catch (error) {
          console.error("Erreur lors de l'analyse du contenu JSON:", error);
          reject();
        }
 }
})
})
}

// Attendez que la promesse soit résolue avant d'exécuter le reste du code
loadContentFromFirestore()
  .then(() => {

    // Mettez en place l'événement text-change pour détecter les modifications dans l'éditeur Quill
    var change = new Quill.import('delta');
    Quill.on('text-change', function (delta, oldDelta, source) {
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

})
  .catch(() => {
    // Ce bloc sera exécuté en cas d'échec du chargement du contenu depuis Firestore
    console.log("Le chargement du contenu depuis Firestore a échoué.");
});
*/

async function sendata() {

/*
  const contenu = {
    text: "hello"
  };
  console.log("Contenu à sauvegarder :", contenu);


  // Convertir le contenu en JSON
  

  // Save the content to Firestore
  await setDoc(doc(db,"test", "doc_test"),
  contenu
  )
    .then(() => {
      console.log('Content saved successfully in Firestore!');
    })
    .catch((error) => {
      console.error("Error saving content:", error);
    });*/

}

document.getElementById("modif").addEventListener("click", () => {
  console.log("Button clicked");
  // sendata();
  document.body.background = "black"
});