
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import page from 'page';

console.log(page);

function checkAuth() {
 const user = auth.currentUser;
 return user != null;
}

page('/acceuil.html', checkAuth, function(ctx, next) {
  // Si l'utilisateur est authentifié, affichez la page accueil
  if (checkAuth()) {
   // Affichez la page accueil 
   page.redirect('../../accueil/acceuil.html');
   console.log('non');
  } else {
   // Redirigez l'utilisateur vers la page de connexion
   page.redirect('../../pages/auth/login/login.html');
   console.log('yes');
  }
 });
 
 page('/admin', checkAuth, function(ctx, next) {
  // Si l'utilisateur est authentifié, affichez la page admin
  if (checkAuth()) {
   // Affichez la page admin
  } else {
   // Redirigez l'utilisateur vers la page de connexion
   page.redirect('../../pages/auth/login/login.html');
  }
 });
 
 page('/comptabilite', checkAuth, function(ctx, next) {
  // Si l'utilisateur est authentifié, affichez la page comptabilite
  if (checkAuth()) {
   // Affichez la page comptabilite
  } else {
   // Redirigez l'utilisateur vers la page de connexion
   page.redirect('../../pages/auth/login/login.html');
  }
 });