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
  updateDoc,
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
  appId: "1:466332062090:web:ffbe45ef4a7371a7b5b873",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 


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
            if (utilisateur.email == userEmail) {    
                const btnEnregistrerInfo = document.getElementById('btnEnregistrerInfo')            
                const email = document.getElementById("userEmail");
                const password = document.getElementById("password");
                const nom = document.getElementById("userNom");
                const prenom = document.getElementById("userPrenom");
                const status = document.getElementById("userStatus");
                const adresse = document.getElementById("userAdress");
                const tel = document.getElementById("userTel");
                const adresseecole = document.getElementById("adresseEcole");
                const emailecole = document.getElementById("emailEcole");
                const secteur = document.getElementById("secteurEcole");
                const nomecole = document.getElementById("nomEcole");

                prenom.value = utilisateur.prenom
                nom.value = utilisateur.nom
                status.value = utilisateur.status
                adresse.value = utilisateur.adresse
                email.value = utilisateur.email
                tel.value = utilisateur.tel
                nomecole.value = utilisateur.nomecole
                adresseecole.value = utilisateur.adresseecole
                emailecole.value = utilisateur.emailecole
                secteur.value = utilisateur.secteur

                
                formProfil.addEventListener("submit", modifProfi);

                function modifProfi(e) {
                  e.preventDefault();

                  // Mettez à jour les valeurs des champs de l'utilisateur
                  utilisateur.prenom = prenom.value
                  utilisateur.nom = nom.value
                  utilisateur.status = status.value
                  utilisateur.adresse = adresse.value
                  utilisateur.email = email.value
                  utilisateur.tel = tel.value
                  utilisateur.nomecole = nomecole.value
                  utilisateur.adresseecole = adresseecole.value
                  utilisateur.emailecole = emailecole.value
                  utilisateur.secteur = secteur.value

                  // Créez une référence au document de l'utilisateur dans Firestore
                  const userDocRef = doc(db, "utilisateurs", utilisateur.id);

                  // Mettez à jour le document dans Firestore
                  updateDoc(userDocRef, {
                    prenom: prenom.value,
                    nom: nom.value,
                    status: status.value,
                    adresse: adresse.value,
                    email: email.value,
                    tel: tel.value,
                    nomecole: nomecole.value,
                    adresseecole: adresseecole.value,
                    emailecole: emailecole.value,
                    secteur: secteur.value,
                  }).catch((error) => {
                    console.error("Error updating document: ", error);
                  });

                  alert('modification effectuer avec succés')
                }

            }
          }))
        });
    } else {
        console.log("Aucun utilisateur connecté");
    }
});


console.log("page profil");