
var pageName = window.location.pathname.split('/').pop();

if (pageName === 'inscription.html') {
  import('./pagesJS/sidebar');
  import('./pagesJS/inscription');
} else if (pageName === 'admin.html') {
  import('./pagesJS/admin.js');
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
  import('./pagesJS/droit.js');
} else if (pageName === 'eleve.html') {
  import('./pagesJS/sidebar');
  import('./pagesJS/eleve.js');
}else if (pageName === 'authentification.html') {
  import('./pagesJS/sidebar');
  import('./pagesJS/authentification.js');
}