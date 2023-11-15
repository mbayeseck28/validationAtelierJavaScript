// import { onAuthStateChanged } from 'firebase/auth';
// import { getAuth } from 'firebase/auth';

// function deconnexion() {
//   const btnGreen = document.querySelector('.btnGreen');
//   btnGreen.addEventListener('click', function () {
//     const auth = getAuth();
//     signOut(auth)
//       .then(() => {
//         console.log('Utilisateur déconnecté');
//       })
//       .catch((error) => {
//         window.location.href = '../../pages/auth/login/login.html';
//         console.error('Erreur lors de la déconnexion :', error);
//       });
//   });
// }

// onAuthStateChanged(auth, (user) => {
//     if (!user) {
//         window.location.href = "../auth/login/login.html";
//     }
// });


var pageName = window.location.pathname.split('/').pop();

if (pageName === 'inscription.html') {
  import('./pagesJS/inscription');
} else if (pageName === 'login.html') {
  import('./pagesJS/login');
} else if (pageName === 'acceuil.html') {
  import('./pagesJS/sidebar');
  import('./pagesJS/accueil');
} else if (pageName === 'profil.html') {
  import('./pagesJS/sidebar');
  import('./pagesJS/profil');
} else if (pageName === 'comptabilite.html') {
  import('./pagesJS/sidebar');
  import('./pagesJS/compta');
} else if (pageName === 'personnel.html') {
  import('./pagesJS/sidebar');
  import('./pagesJS/personnel.js');
} else if (pageName === 'professeur.html') {
  import('./pagesJS/sidebar');
  import('./pagesJS/proff.js');
}else if (pageName === 'droit.html') {
  import('./pagesJS/sidebar');
  import('../dist/pages/droit/droit');
} else if (pageName === 'eleve.html') {
  import('./pagesJS/sidebar');
  import('./pagesJS/eleve.js');
}else if (pageName === 'authentification.html') {
  import('./pagesJS/sidebar');
  import('./pagesJS/authentification.js');
}