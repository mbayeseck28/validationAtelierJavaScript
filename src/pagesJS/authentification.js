import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
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
    apiKey: "AIzaSyBQ3SrfEimEPtzCFyxR0vWBK8BJ_K4Ma48",
    authDomain: "mixte-feewi.firebaseapp.com",
    projectId: "mixte-feewi",
    storageBucket: "mixte-feewi.appspot.com",
    messagingSenderId: "1083213454329",
    appId: "1:1083213454329:web:df3deafe22a82ad34e3b28"
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
    


/************     DECONNEXION       ***********/ 
const btnDeconnexion = document.getElementById('btnDeconnexion');
const signOutButtonPressed = async (e) => {
  e.preventDefault();
  try {
    await signOut(auth);
    console.log("Deconnecté");
    window.location.href = '../../pages/auth/login/login.html';
  } catch (error) {
    console.log(error.code);
  }
}
btnDeconnexion.addEventListener("click", signOutButtonPressed);


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
  