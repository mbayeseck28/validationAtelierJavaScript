import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";

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

/******************  affiche photo profil Nav bar  **********************/ 
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Utilisateur connecté");
        var userEmail = user.email;
        const userRef = collection(db, "utilisateurs");
        onSnapshot(userRef, (snapshot) => {
          let userRef = [];
          snapshot.docs.forEach((doc) => {
            userRef.push({...doc.data(), id: doc.id })
          })
          userRef.forEach((utilisateur => {
            // Créez une référence au document de l'utilisateur dans Firestore
            const userDocRef = doc(db, "utilisateurs", utilisateur.id);
            
            if (utilisateur.email == userEmail) {   
                const ProfilNav = document.querySelector('.ProfilNav');
                const profilVoir = document.querySelector('.profilVoir');
                const nomUser = document.querySelector('.nomUser');
                const statusUser = document.querySelector('.statusUser') 
                ProfilNav.src = utilisateur.url;
                profilVoir.src = utilisateur.url;
                nomUser.innerText = utilisateur.prenom + ' ' + utilisateur.nom;
                statusUser.innerText = utilisateur.status;
              
            }
          }))
        });
  
  
    } else {
        console.log("Aucun utilisateur connecté");
    }
  });
    
let tableBody = document.getElementById("container");

const userRef = collection(db, "utilisateurs");
    onSnapshot(userRef, (snapshot) => {
        let userRef = [];
        snapshot.docs.forEach((doc) => {
         userRef.push({...doc.data(), id: doc.id })
        })
        userRef.forEach((utilisateur => {
            let ligne = document.createElement("tr");
            ligne.innerHTML = `
            <td class="mx-auto text-center d-none d-lg-block m-0">${utilisateur.nom}</td>
            <td class="mx-auto text-center m-0">${utilisateur.prenom}</td>
            <td class="mx-auto text-center m-0 d-none d-lg-block">${utilisateur.status}</td>
            <td class="mx-auto text-center m-0">${utilisateur.secteur}</td>
            <td class="mx-auto text-center m-0 d-none d-lg-block">${utilisateur.adresse}</td>
            `;
            let loaderContainer = document.querySelector(".chargement-page");
            loaderContainer.style.display = "none";
            
            tableBody.appendChild(ligne);
        }))
    });       
  
let rechercheUser = document.getElementById('inputRecherche')
function myFunction() {
    let filter = rechercheUser.value.toUpperCase() || rechercheUser.value.toLowerCase();
    let tr = tableBody.getElementsByTagName("tr");
       
    for (let i = 0; i < tr.length; i++) {
        for (let j = 0; j < tr[i].getElementsByTagName("td").length; j++) {
            let txtValue = tr[i].getElementsByTagName("td")[j].innerText;
            let nomComplet = tr[i].getElementsByTagName("td")[1].innerText + " "+ tr[i].getElementsByTagName("td")[0].innerText || tr[i].getElementsByTagName("td")[0].innerText + " "+ tr[i].getElementsByTagName("td")[1].innerText  
            if (txtValue) {
                if (txtValue.toUpperCase().indexOf(filter) > -1 || nomComplet.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }     
        }
    }
}

       
rechercheUser.addEventListener('input', function(){
    myFunction()
})
console.log('authentification');
  