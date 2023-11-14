import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as refDatabase, set, get } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile ,
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
const database = getDatabase();


const formProfil = document.getElementById('formProfil')
formProfil.style.display = 'none'

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
                const imgProfil = document.getElementById('imgProfil');
                const ProfilNav = document.querySelector('.ProfilNav');
                const profilVoir = document.querySelector('.profilVoir');
                const nomUser = document.querySelector('.nomUser');
                const statusUser = document.querySelector('.statusUser')

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
                imgProfil.src = utilisateur.url
                ProfilNav.src = utilisateur.url;
                profilVoir.src = utilisateur.url;
                nomUser.innerText = prenom.value + ' ' + nom.value;
                statusUser.innerText = status.value;
                
              let loaderContainer = document.querySelector(".chargement-page");
              loaderContainer.style.display = "none";
              formProfil.style.display = 'block'

                formProfil.addEventListener("submit", modifProfil);
                // Nous avons un élément input de type file avec l'id 'profilePicture'
                const fileInput = document.getElementById('profilePicture');

                // Lorsque l'utilisateur sélectionne un fichier, nous l'obtenons
                fileInput.addEventListener('change', function(e) {
                  var file = e.target.files[0];
                  if (!file.type.match('image.*')) {
                   alert('Veuillez sélectionner un fichier image');
                   return;
                  }
                  modifPhoto(file);
                });

                
                //  fonction modifier information profil
                function modifProfil(e) {
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
                  
                  nomUser.innerText = utilisateur.prenom + ' ' + utilisateur.nom;
                  statusUser.innerText = utilisateur.status;
                  alert('modification effectuer avec succés')
                }  
                
                
                //  fonction modifier photo profil
                function modifPhoto(file){
                  // Crée une référence à Firebase Storage
                  const storage = getStorage();
                  // Crée une référence au chemin où le fichier sera stocké
                  const storageRef = ref(storage, utilisateur.nom + '/profilePicture/' + file.name);
                  // Télécharge le fichier à Firebase Storage
                  uploadBytes(storageRef, file).then((snapshot) => {
                    console.log('Un fichier ou un blob a été téléchargé!');
                    // Obtient l'URL de téléchargement du fichier
                    getDownloadURL(storageRef).then((url) => {
                      // Met à jour l'URL de l'image de profil de l'utilisateur dans Firebase Auth
                      updateProfile(user, {
                        photoURL: url
                      }).then(() => {
                        // Met à jour la source de l'image de profil dans le DOM
                        imgProfil.src = url;
                        ProfilNav.src = url;
                        profilVoir.src = url;

                      // Mettez à jour la valeur du champs url de l'utilisateur dans firebase
                        utilisateur.url = url;
                        // Mettez à jour le document dans Firestore
                        updateDoc(userDocRef, {
                          url: url,
                        }).catch((error) => {
                          console.error("Error updating document: ", error);
                        });
                      }).catch((error) => {
                        // Affiche une erreur si la mise à jour du profil échoue
                        console.error('Erreur lors de la mise à jour du profil:', error);
                      });
                    });
                  }).catch((error) => {
                    // Affiche une erreur si le téléchargement du fichier échoue
                    console.error('Erreur lors du téléchargement du fichier:', error);
                  });
                }  
                
            }
          }))
        });
    } else {
        console.log("Aucun utilisateur connecté");
    }
});



console.log("page profil");