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
import { getFirestore, collection, doc, getDoc, setDoc, serverTimestamp, getDocFromServer, addDoc } from 'firebase/firestore';


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


document.addEventListener("DOMContentLoaded", async function () {
  // Charger le contenu depuis Firestore dès que la page est prête
  await getDataFromFirestore();
});

// db.collection("droit").doc("mZ2VxP5Ea2aAzJlzN9QV")
//     .onSnapshot((doc) => {
//         console.log("Current data: ", doc.data());
//         updateStarCount(postElement, doc.data().HTML );
//     });

//     function updateStarCount(el, val) {
//       el.innerHTML = `${val} post`;
//       consol.log(val);
//     }
// async function getDataFromFirestore() {
//   console.log("Tentative de récupération du contenu depuis Firestore...");

//   try {
//     const docSnap = await getDoc(contenuRef);

//     if (docSnap.exists()) {
//       console.log("Document data:", docSnap.data());

//       // Assurez-vous que l'élément avec l'ID 'editor-container' existe sur votre page HTML
//       const editorContainer = document.getElementById('editor-container');

//       if (editorContainer) {
//         editorContainer.innerText = docSnap.data().HTML;

//       } else {
//         console.error("L'élément avec l'ID 'editor-container' n'a pas été trouvé sur la page.");
//       }
//     } else {
//       console.log("Aucun document trouvé !");
//     }
//   } catch (error) {
//     console.error("Erreur lors de la récupération des données depuis Firestore:", error);
//   }
// }


//   getDoc(contenuRef)
//     .then((docSnap) => {
//       console.log("Réponse de Firestore :", doc);
//       if (docSnap.exists()) {
//         const data = docSnap.data().contenu;
//         console.log("Données du document :", data);
//         // Mettez à jour le contenu de l'éditeur avec les données de Firestore
//         document.getElementById('editor-container').textContent = "";
//         document.getElementById('editor-container').textContent = data;
//         console.log("Contenu mis à jour :", data);
//       } else {
//         console.log("Aucun document trouvé !");
//       }
//     })
//     .catch((error) => {
//       console.error("Erreur lors de la récupération du document depuis Firestore:", error);
//     });
// }

const contenus = collection(db, "textes")

 
const addForm = document.querySelector(".ajouter");
addForm.addEventListener("submit", (e) => {
  e.preventDefault()


  addDoc(contenus, {
    title1 : addForm.titre1.value,
    title2 :addForm.titre2.value,
    title3 : addForm.titre3.value,
    soustitre1: addForm.soutitre1.value,
    soustitre2 : addForm.soutitre2.value,
    dateDajout : serverTimestamp()
  })
})

// function sauvegarderContenuDansFirestore() {
  
//   const contenuDiv = document.getElementById('editor-container').innerText;


//   console.log("Contenu à sauvegarder :", contenuDiv);




//   // Save the content to Firestore
//   return setDoc(contenuRef, {
//     contenu: contenuDiv,
//     timestamp: serverTimestamp(),
//   })
//     .then(() => {
//       console.log('Content saved successfully in Firestore!');
//     })
//     .catch((error) => {
//       console.error("Error saving content:", error);
//     });
// }

// document.getElementById("modif").addEventListener("click",  () => {
//   sauvegarderContenuDansFirestore();
// })