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
import { getFirestore, onSnapshot, getDocs, collection, doc, getDoc, setDoc, serverTimestamp, getDocFromServer, addDoc } from 'firebase/firestore';
import {storage} from 'firebase/storage'

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
const contenus = collection(db, "texte")


// ...

// Fonction pour mettre à jour les champs du formulaire avec les données de Firestore


getDocs(contenus).then((snapshot) => {
 
});

onSnapshot(contenus, (snapshot) => {
  let textes = [];
  snapshot.docs.forEach((doc) => {
   textes.push({...doc.data(), id: doc.id});
  
  });
  console.log(textes);
  const title1 = document.getElementById('title1');
  const title2 = document.getElementById('title2');
  const title3 = document.getElementById('title3');
  const title4 = document.getElementById('title4');
  const title5 = document.getElementById('title5');
  const title6 = document.getElementById('title6');
  const title7 = document.getElementById('title7');
  const title8 = document.getElementById('title8');
  const title9 = document.getElementById('title9');


  console.log(title1);
  textes.forEach((texte) => {
    title1.value = texte.title1,
    title2.value = texte.title2,
    title3.value = texte.title3; 
    title4.value = texte.title4;
    title5.value = texte.title5;
    title6.value = texte.title6,
    title7.value = texte.title7,
    title8.value = texte.title8; 
    title9.value = texte.title9; 
  });
})

const addForm = document.querySelector(".ajouter");
addForm.addEventListener("submit", (e) => {
  e.preventDefault()

  setDoc(doc(db, "texte", "0t3M0fxpDpoiMumHnggf"),{
    title1 : addForm.title1.value,
    title2 :addForm.title2.value,
    title3 : addForm.title3.value,
    title4 : addForm.title4.value,
    title5 :addForm.title5.value,
    title6 : addForm.title6.value,
    title7 : addForm.title7.value,
    title8: addForm.title8.value,
    title9 : addForm.title9.value,
    dateDajout : serverTimestamp()
  })

})


























