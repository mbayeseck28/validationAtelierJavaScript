// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// Importation des  services
import {
  doc,
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';

import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSRo2EZwo5LQIO75FevIBvEKbDD61HNuY',
  authDomain: 'validation-atelier-js.firebaseapp.com',
  databaseURL: 'https://validation-atelier-js-default-rtdb.firebaseio.com',
  projectId: 'validation-atelier-js',
  storageBucket: 'validation-atelier-js.appspot.com',
  messagingSenderId: '466332062090',
  appId: '1:466332062090:web:ffbe45ef4a7371a7b5b873',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

/******************  affiche photo profil Nav bar  **********************/
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('Utilisateur connecté');
    var userEmail = user.email;
    const userRef = collection(db, 'utilisateurs');
    onSnapshot(userRef, (snapshot) => {
      let userRef = [];
      snapshot.docs.forEach((doc) => {
        userRef.push({ ...doc.data(), id: doc.id });
      });
      userRef.forEach((utilisateur) => {
        // Créez une référence au document de l'utilisateur dans Firestore
        const userDocRef = doc(db, 'utilisateurs', utilisateur.id);

        if (utilisateur.email == userEmail) {
          const ProfilNav = document.querySelector('.ProfilNav');
          const profilVoir = document.querySelector('.profilVoir');
          const nomUser = document.querySelector('.nomUser');
          const statusUser = document.querySelector('.statusUser');
          ProfilNav.src = utilisateur.url;
          profilVoir.src = utilisateur.url;
          nomUser.innerText = utilisateur.prenom + ' ' + utilisateur.nom;
          statusUser.innerText = utilisateur.status;
        }
      });
    });
  } else {
    console.log('Aucun utilisateur connecté');
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
    window.location.href = '../../pages/auth/login/login.html';
  } catch (error) {
    console.log(error.code);
  }
}
btnDeconnexion.addEventListener("click", signOutButtonPressed);

// Récupérer la collection
const eleve = collection(db, 'inscScolarite');
const certiesRef2 = collection(db, 'mensualites');
let tabInsc = [];
let tabMens = [];

onSnapshot(eleve, (snapshot) => {
  let eleve = [];
  snapshot.docs.forEach((doc) => {
    eleve.push({ ...doc.data(), id: doc.id });
    tabInsc.push({ ...doc.data(), id: doc.id });
  });
  eleve.sort((a, b) => b.dateDajout - a.dateDajout);

  const list = document.querySelector('#list');
  list.innerHTML = '';
  // console.log(eleve);

  eleve.forEach((utili) => {
    const list = document.querySelector('#list');
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <td class="text-start ps-2 py-2 border border-1">${utili.prenom}</td>
    <td class="text-start ps-2 py-2 border border-1">${utili.nom}</td>
    <td class="text-center py-2 border border-1">${utili.montantInsc.toLocaleString(
      'en-US'
    )} Fcfa</td>`;
    list.appendChild(tr);
    let loaderContainer = document.querySelector('.chargement-page');
    loaderContainer.style.display = 'none';
  });
});

// Enregistrer des données dans le Firebase

const form = document.querySelector('.addToFirebase');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  //Ajouter un nouveau document avec un id généré
  addDoc(eleve, {
    nom: form.nom.value,
    prenom: form.prenom.value,
    type: form.type.value,
    classe: form.classeSelect.value,
    montantInsc: parseInt(form.prixIns.value),
    dateDajout: serverTimestamp(),
  }).then(() => form.reset());
});
form.addEventListener('input', (e) => {
  const divPrixIns = document.getElementById('divPrixIns');
  const prixIns = document.getElementById('prixIns');
  divPrixIns.classList.remove('d-none');
  prixIns.value = montant(`${classeSelect.value}`);
  console.log(prixIns.value);
});

function montant(classe) {
  const montantMapping = {
    '6ème': 25000,
    '5ème': 25000,
    '4ème': 30000,
    '3ème': 35000,
  };

  return montantMapping[classe] || 0;
}

// Alert Après ajout
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Linscription est effectué avec succès', 'success');
  });
}
// _________________________
// Parti Mensualité
// Mensualite
onSnapshot(certiesRef2, (snapshot) => {
  let certiesRef2 = [];
  snapshot.docs.forEach((doc) => {
    certiesRef2.push({ ...doc.data(), id: doc.id });
    tabMens.push({ ...doc.data(), id: doc.id });
  });
  certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);
  const list = document.querySelector('.mytbodyIns');
  list.innerHTML = '';

  // console.log(certiesRef2);
  certiesRef2.forEach((utili) => {
    const list = document.querySelector('.mytbodyIns');
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <td class="text-start ps-2 py-2 border border-1">${
      utili.prenom
    }</td> <td class="text-start ps-2 py-2 border border-1">${utili.nom}
    </td> <td class="text-start ps-2 py-2 d-none d-sm-block border border-1">${
      utili.mois
    }
    </td> <td class="text-center py-2 border border-1">${utili.montantpay.toLocaleString(
      'en-US'
    )} Fcfa</td>`;
    list.appendChild(tr);
    let loaderContainer = document.querySelector('.loader2');
    loaderContainer.style.display = 'none';
  });
});

// ajout d'une mensualite

// Récupération de la liste des inscrits
const formMensuel = document.getElementById('formMensuel');
const nomMens = document.getElementById('nomMens');
const prenomMens = document.getElementById('prenomMens');
const prixMens = document.getElementById('prixMens');
const divNom = document.getElementById('divNom');
const divPrenom = document.getElementById('divPrenom');
const divClasse = document.getElementById('divClasse');
const divPrix = document.getElementById('divPrix');
const classeMens = document.getElementById('classeMens');
onSnapshot(eleve, (snapshot) => {
  let myTabeleve = [];
  snapshot.docs.forEach((doc) => {
    myTabeleve.push({ ...doc.data(), id: doc.id });
  });
  myTabeleve.sort((a, b) => b.dateDajout - a.dateDajout);
  // console.log(myTabeleve);
  const mySelect = document.getElementById('listEleve');
  // mySelect.innerHTML = '';
  myTabeleve.forEach((eleve) => {
    // console.log(eleve);
    let newOption = document.createElement('option');
    newOption.value = eleve.id;
    newOption.innerHTML = `
    ${eleve.prenom} ${eleve.nom} 
    `;
    mySelect.appendChild(newOption);
  });
  formMensuel.addEventListener('input', (e) => {
    // console.log(e.target.value);
    myTabeleve.forEach((afficheInput) => {
      if (afficheInput.id == e.target.value) {
        // console.log(afficheInput);
        divNom.classList.remove('d-none');
        divPrenom.classList.remove('d-none');
        divClasse.classList.remove('d-none');
        divPrix.classList.remove('d-none');
        nomMens.value = `${afficheInput.nom}`;
        nomMens.setAttribute('disabled', '');
        prenomMens.value = `${afficheInput.prenom}`;
        prenomMens.setAttribute('disabled', '');
        classeMens.value = `${afficheInput.classe}`;
        classeMens.setAttribute('disabled', '');
        prixMens.value = montant2(`${afficheInput.classe}`);
        prixMens.setAttribute('disabled', '');
      }
      const myMess = document.querySelector('.alertMens');
      myMess.classList.add('d-none');
    });
  });

  // tabMens.forEach((mens) => {
  //   console.log(mens);
  // });
  let tabVerifMens = [];
  formMensuel.addEventListener('submit', (e) => {
    e.preventDefault();
    // getDocs(certiesRef2).then((snapshot) => {
    //   snapshot.docs.forEach((doc) => {
    //     tabVerifMens.push({ ...doc.data(), id: doc.id });
    //   });
    //   console.log(tabVerifMens);
    // tabVerifMens.forEach((mens) => {
    //   if (
    //     mens.prenom == prenomMens.value &&
    //     mens.nom == nomMens.value &&
    //     mens.mois == formMensuel.mois.value
    //   ) {
    //     console.log('Cet élève a déja payé ce mois');
    //   }
    //   else {
    //       console.log("C'est top");
    //   }
    //   // console.log(mens.prenom);
    //   // console.log(prenomMens.value);
    //   // console.log(mens.nom);
    //   // console.log(nomMens.value);
    //   // console.log(mens.mois);
    //   // console.log(formMensuel.mois.value);
    //   // console.log('_______________');
    // });
    // console.log(tabVerifMens);
    // });
    addDoc(certiesRef2, {
      nom: nomMens.value,
      prenom: prenomMens.value,
      type: formMensuel.type.value,
      classe: classeMens.value,
      mois: formMensuel.mois.value,
      montantpay: parseInt(prixMens.value),
      dateDajout: serverTimestamp(),
    }).then(() => formMensuel.reset());
    const myMess = document.querySelector('.alertMens');
    myMess.classList.remove('d-none');
    myMess.innerHTML = 'Payement effectué avec succès...';
  });
});

// Montant à payer

// classeMens.addEventListener('change', function () {
//   // let selectedOption = selectElement2.options[selectElement2.selectedIndex];
//   let selectedValue = classeMens.value;
//   // console.log(selectedValue);
//   // document.getElementById('montantAPaye').value = montant2(selectedValue);
// });

function montant2(classe) {
  const montantMapping = {
    '6ème': 10000,
    '5ème': 15000,
    '4ème': 20000,
    '3ème': 25000,
  };

  return montantMapping[classe] || 0;
}
// Recherche
const list = document.querySelector('#list');
const list2 = document.querySelector('#list3');
// const rechercheInput = document.querySelector('#chercheInsc');
// const rechercheInput2 = document.querySelector('#chercheMens');
const valeurInscInput1 = document.getElementById('classe');
const valeurInscInput2 = document.getElementById('nomPren');
const valeurMensInput1 = document.getElementById('classe2');
const valeurMensInput2 = document.getElementById('nomPren2');
// // Fonction Rechercher

// Pour inscription
function filterInsc() {
  const paysFilter = tabInsc.filter(
    (pays) =>
      (valeurInscInput1.value === 'tout' ||
        pays.classe === valeurInscInput1.value) &&
      (pays.nom.toLowerCase().includes(valeurInscInput2.value.toLowerCase()) ||
        pays.prenom
          .toLowerCase()
          .includes(valeurInscInput2.value.toLowerCase()))
  );
  if (paysFilter.length === 0) {
    list.innerHTML =
      "<p class='fw-blod text-danger'>Aucun resultat trouvé.</p>";
  } else {
    list.innerHTML = '';
    paysFilter.forEach((utili) => {
      const tr = document.createElement('tr');

      tr.innerHTML = `
            <td class="text-start ps-2 py-2 border border-1">${
              utili.prenom
            }</td>
            <td class="text-start ps-2 py-2 border border-1">${utili.nom}</td>
            <td class="text-center py-2 border border-1">${utili.montantInsc.toLocaleString(
              'en-US'
            )} Fcfa</td>`;
      list.appendChild(tr);
    });
  }
}

valeurInscInput1.addEventListener('change', filterInsc);
valeurInscInput2.addEventListener('input', filterInsc);
// ________________________

function filterMens() {
  const paysFilter = tabMens.filter(
    (pays) =>
      (valeurMensInput1.value === 'dis' ||
        pays.classe === valeurMensInput1.value) &&
      (pays.nom.toLowerCase().includes(valeurMensInput2.value.toLowerCase()) ||
        pays.prenom
          .toLowerCase()
          .includes(valeurMensInput2.value.toLowerCase()))
  );
  if (paysFilter.length === 0) {
    list2.innerHTML =
      "<p class='fw-blod text-danger'>Aucun resultat trouvé.</p>";
  } else {
    list2.innerHTML = '';
    paysFilter.forEach((utili) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
      <td class="text-start ps-2 py-2 border border-1">${
        utili.prenom
      }</td> <td class="text-start ps-2 py-2 border border-1">${utili.nom}
      </td> <td class="text-start ps-2 py-2 d-none d-sm-block border border-1">${
        utili.mois
      }
      </td> <td class="text-center py-2 border border-1">${utili.montantpay.toLocaleString(
        'en-US'
      )} Fcfa</td>`;
      list2.appendChild(tr);
    });
  }
}

valeurMensInput1.addEventListener('change', filterMens);
valeurMensInput2.addEventListener('input', filterMens);

//___________________________________________________
// //partie pape cheikh

onSnapshot(eleve, (snapshot) => {
  let eleve = [];
  snapshot.docs.forEach((doc) => {
    eleve.push({ ...doc.data(), id: doc.id });
  });
  const revenue = document.getElementById('revenue');
  revenue.innerHTML = '';
  let bodyIns = document.createElement('tr');
  bodyIns.innerHTML = `<td  colspan = '3'><h5 colspan='3' class='d-flex justify-content-center py-2 maMens me-5' >Inscriptions</h5></td>`;
  revenue.appendChild(bodyIns);
  eleve.forEach((utili) => {
    let trbody = document.createElement('tr');
    trbody.innerHTML = `
      <td class="border border-1">${utili.dateDajout
        .toDate()
        .toLocaleDateString()}</td>
        <td class="text-center border border-1">${utili.prenom} ${
      utili.nom
    }</td>
        <td class="border border-1">${utili.montantInsc.toLocaleString(
          'en-US'
        )} Fcfa</td>
        `;
    revenue.appendChild(trbody);
    let loaderContainer = document.querySelector('.loader3');
    loaderContainer.style.display = 'none';
  });
});

onSnapshot(certiesRef2, (snapshot) => {
  let certiesRef2 = [];
  snapshot.docs.forEach((doc) => {
    certiesRef2.push({ ...doc.data(), id: doc.id });
  });
  const mens = document.getElementById('mens');
  mens.innerHTML = '';
  certiesRef2.sort((a, b) => b.dateDajout - a.dateDajout);

  let bodymens = document.createElement('tr');
  bodymens.innerHTML = `<td  colspan = '3'><h5 colspan='3' class='d-flex justify-content-center py-2 maMens me-5' >Mensualités</h5></td>`;
  mens.appendChild(bodymens);

  certiesRef2.forEach((utili) => {
    let trbody = document.createElement('tr');

    trbody.innerHTML = `
      <td class="border border-1">${utili.dateDajout
        .toDate()
        .toLocaleDateString()}</td>
        <td class="text-center border border-1">${utili.prenom} ${
      utili.nom
    }</td>
        <td class="border border-1">${utili.montantpay}Fcfa</td>
        `;

    mens.appendChild(trbody);
  });
});

getDocs(eleve).then((snapshot) => {
  let eleve = [];
  snapshot.docs.forEach((doc) => {
    eleve.push({ ...doc.data(), id: doc.id });
  });
  let totalInscription = 0;
  eleve.forEach((utili) => {
    totalInscription += parseInt(utili.montantInsc);
  });
  // console.log(totalInscription);
});

getDocs(certiesRef2).then((snapshot) => {
  let certiesRef2 = [];
  snapshot.docs.forEach((doc) => {
    certiesRef2.push({ ...doc.data(), id: doc.id });
  });
  let totalCertieRef2 = 0;
  certiesRef2.forEach((utili) => {
    totalCertieRef2 += parseInt(utili.montantpay);
  });
  // console.log(totalCertieRef2);
});

// console.log(total);

function totalGlobal(data) {
  return getDocs(data).then((snapshot) => {
    let items = [];
    snapshot.docs.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id });
    });
    return items;
  });
}

Promise.all([totalGlobal(eleve), totalGlobal(certiesRef2)])
  .then(([eleveData, certiesRef2Data]) => {
    let totalInscription = eleveData.reduce(
      (total, utili) => total + parseInt(utili.montantInsc),
      0
    );
    let totalCertieRef2 = certiesRef2Data.reduce(
      (total, utili) => total + parseInt(utili.montantpay),
      0
    );

    let totaleDuRevenu = totalInscription + totalCertieRef2;

    //Calcule du revenue total
    function CalculDeLaSommeTotale() {
      const total = document.getElementById('total');
      let trfoot = document.createElement('tr');
      trfoot.innerHTML = `
    <td colspan="2"><b>Total</b></td>
    <td><b>${totaleDuRevenu.toLocaleString('en-US')} Fcfa </b></td>
    `;
      // total.innerHTML = '';

      total.appendChild(trfoot);
      const revTotal = document.getElementById('revenuTotal');
      revTotal.innerHTML = `${totaleDuRevenu.toLocaleString(
        'en-US'
      )} <span class="fw-bold">FCFA</span>`;
      // console.log('Total global:', totaleDuRevenu);
    }
    CalculDeLaSommeTotale();
  })
  .catch((error) => {
    console.error("Une erreur s'est produite :", error);
  });
