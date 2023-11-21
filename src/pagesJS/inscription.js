import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  onSnapshot,
} from 'firebase/firestore';

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

/************     Profil Navbar       ***********/ 
onAuthStateChanged(auth, (user) => {
  if (user) {
    // console.log("Utilisateur connecté");
    var userEmail = user.email;
    const userRef = collection(db, "utilisateurs");
    onSnapshot(userRef, (snapshot) => {
      let userRef = [];
      snapshot.docs.forEach((doc) => {
        userRef.push({ ...doc.data(), id: doc.id });
      });
      userRef.forEach((utilisateur) => {
        // Créez une référence au document de l'utilisateur dans Firestore
        const userDocRef = doc(db, "utilisateurs", utilisateur.id);

        if (utilisateur.email == userEmail) {
          const ProfilNav = document.querySelector(".ProfilNav");
          const profilVoir = document.querySelector(".profilVoir");
          const nomUser = document.querySelector(".nomUser");
          const statusUser = document.querySelector(".statusUser");
          ProfilNav.src = utilisateur.url;
          profilVoir.src = utilisateur.url;
          nomUser.innerText = utilisateur.prenom + " " + utilisateur.nom;
          statusUser.innerText = utilisateur.status;
        }
      });
    });
  } else {
    
      console.log("Aucun utilisateur connecté");
      window.location.href = '../../pages/auth/login/login.html';
  }
});


/************     DECONNEXION       ***********/ 
const btnDeconnexion = document.getElementById('btnDeconnexion');
const signOutButtonPressed = async (e) => {
  e.preventDefault();
  try {
    await signOut(auth);
    console.log("Deconnecté");
    window.location.href = '../login/login.html';
  } catch (error) {
    console.log(error.code);
  }
}
btnDeconnexion.addEventListener("click", signOutButtonPressed);

const handleRegistration = async (event) => {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const nomInput = document.getElementById('nom');
  const prenomInput = document.getElementById('prenom');
  const statusInput = document.getElementById('status');
  const adresseInput = document.getElementById('adresse');
  const telInput = document.getElementById('tel');
  const adresseecoleInput = document.getElementById('adresseecole');
  const emailecoleInput = document.getElementById('emailecole');
  const secteurInput = document.getElementById('secteur');
  const nomecoleInput = document.getElementById('nomecole');

  const email = emailInput.value;
  const password = passwordInput.value;
  const nom = nomInput.value;
  const prenom = prenomInput.value;
  const status = statusInput.value;
  const adresse = adresseInput.value;
  const tel = telInput.value;
  const adresseecole = adresseecoleInput.value;
  const emailecole = emailecoleInput.value;
  const secteur = secteurInput.value;
  const nomecole = nomInput.value;
  const srcProfil = '../../../src/assets/images/profil.jpeg';

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const userData = {
      nom: nom,
      prenom: prenom,
      status: status,
      adresse: adresse,
      tel: tel,
      adresseecole: adresseecole,
      emailecole: emailecole,
      secteur: secteur,
      nomecole: nomecole,
      email: email,
      password: password,
      url: srcProfil,
    };

    const userRef = collection(db, 'utilisateurs');
    console.log(userRef);
    await addDoc(userRef, userData);

    alert('Utilisateur enregistré avec succès');

    // Vous pouvez rediriger l'utilisateur vers une autre page ici si nécessaire
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Erreur lors de l'inscription :", errorCode, errorMessage);
  }
  emailInput.value = '';
  passwordInput.value = '';
  nomInput.value = '';
  prenomInput.value = '';
  statusInput.value = '';
  adresseInput.value = '';
  telInput.value = '';
  adresseecoleInput.value = '';
  emailecoleInput.value = '';
  secteurInput.value = '';
  nomecoleInput.value = '';
};

console.log('page inscription');
const registrationForm = document.getElementById('registration-form');
registrationForm.addEventListener('submit', handleRegistration);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("utilisateur connecté");
  } else {
    
      console.log("Aucun utilisateur connecté");
      window.location.href = '../login/login.html';
  }
});
