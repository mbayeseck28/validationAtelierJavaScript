// Import the functions you need from the SDKs you need
import { initializeApp, onLog } from 'firebase/app';
// Importation des  services
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  serverTimestamp,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBQ3SrfEimEPtzCFyxR0vWBK8BJ_K4Ma48',
  authDomain: 'mixte-feewi.firebaseapp.com',
  projectId: 'mixte-feewi',
  storageBucket: 'mixte-feewi.appspot.com',
  messagingSenderId: '1083213454329',
  appId: '1:1083213454329:web:df3deafe22a82ad34e3b28',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

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
    montantInsc: parseInt(form.montantPaye.value),
    dateDajout: serverTimestamp(),
  }).then(() => form.reset());
});
// Montant à inscrire
let selectElement = document.getElementById('classeSelect');
selectElement.addEventListener('change', function () {
  let selectedOption = selectElement.options[selectElement.selectedIndex];
  let selectedValue = selectedOption.value;
  console.log(selectedValue);

  document.getElementById('montantPaye').value = montant(selectedValue);
  console.log(document.getElementById('montantPaye').value);
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
  console.log(myTabeleve);
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
        console.log(afficheInput);
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
      }
      const myMess = document.querySelector('.alertMens');
      myMess.classList.add('d-none');
    });
  });
  formMensuel.addEventListener('submit', (e) => {
    e.preventDefault();
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

classeMens.addEventListener('change', function () {
  // let selectedOption = selectElement2.options[selectElement2.selectedIndex];
  let selectedValue = classeMens.value;
  console.log(selectedValue);
  // document.getElementById('montantAPaye').value = montant2(selectedValue);
});

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
const rechercheInput = document.querySelector('#chercheInsc');
const rechercheInput2 = document.querySelector('#chercheMens');
const valeurInscInput1 = document.getElementById('classe');
const valeurInscInput2 = document.getElementById('nomPren');
const valeurMensInput1 = document.getElementById('classe2');
const valeurMensInput2 = document.getElementById('nomPren2');
// // Fonction Rechercher

// Pour inscription
rechercheInput.addEventListener('input', (e) => {
  let valeurInput1 = '';
  let valeurInput2 = '';
  let collectionFilter;
  if (e.target === valeurInscInput1) {
    valeurInput1 = e.target.value;
    // console.log('Input 1:', valeurInput1);
    collectionFilter = tabInsc.filter((element) =>
      element.classe.toLowerCase().includes(valeurInput1.toLowerCase())
    );
  } else if (e.target === valeurInscInput2) {
    valeurInput2 = e.target.value;
    // console.log('Input 2:', valeurInput2);
    collectionFilter = tabInsc.filter(
      (element) =>
        element.nom.toLowerCase().includes(valeurInput2.toLowerCase()) ||
        element.prenom.toLowerCase().includes(valeurInput2.toLowerCase())
    );
  }

  const list = document.querySelector('#list');
  list.innerHTML = '';
  if (collectionFilter.length) {
    document.getElementById('erreurRefProff').innerHTML = '';
    collectionFilter.forEach((utili) => {
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
  } else {
    document.getElementById('erreurRefProff').innerHTML =
      'Aucun resultat trouver';
  }
});
rechercheInput2.addEventListener('input', (e) => {
  let valeurInput1 = '';
  let valeurInput2 = '';
  let collectionFilter;
  if (e.target === valeurMensInput1) {
    valeurInput1 = e.target.value;
    // console.log('Input 1:', valeurInput1);
    collectionFilter = tabMens.filter((element) =>
      element.classe.toLowerCase().includes(valeurInput1.toLowerCase())
    );
  } else if (e.target === valeurMensInput2) {
    valeurInput2 = e.target.value;
    // console.log('Input 2:', valeurInput2);
    collectionFilter = tabMens.filter(
      (element) =>
        element.nom.toLowerCase().includes(valeurInput2.toLowerCase()) ||
        element.prenom.toLowerCase().includes(valeurInput2.toLowerCase())
    );
  }

  const list = document.querySelector('#list3');
  list.innerHTML = '';
  if (collectionFilter.length) {
    document.getElementById('erreurRefProff2').innerHTML = '';
    collectionFilter.forEach((utili) => {
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
      let loaderContainer = document.querySelector('.chargement-page');
      loaderContainer.style.display = 'none';
    });
  } else {
    document.getElementById('erreurRefProff2').innerHTML =
      'Aucun resultat trouver';
  }
});

//___________________________________________________
// //partie pape cheikh

onSnapshot(eleve, (snapshot) => {
  let eleve = [];
  snapshot.docs.forEach((doc) => {
    eleve.push({ ...doc.data(), id: doc.id });
  });
  const revenue = document.getElementById('revenue');
  revenue.innerHTML = '';
  eleve.forEach((utili) => {
    let trbody = document.createElement('tr');
    trbody.innerHTML = `
      <td class="border border-1">${utili.dateDajout
        .toDate()
        .toLocaleDateString()}</td>
        <td class="text-center">${utili.type}</td>
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

  certiesRef2.forEach((utili) => {
    let trbody = document.createElement('tr');
    trbody.innerHTML = `
      <td class="border border-1">${utili.dateDajout
        .toDate()
        .toLocaleDateString()}</td>
        <td class="text-center">${utili.type}</td>
        <td class="text-center border border-1">${utili.prenom} ${
      utili.nom
    }</td>
        <td class="border border-1">${utili.montantpay}Fcfa</td>
        `;
    mens.appendChild(trbody);

    // console.log(utili.type);
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
  console.log(totalInscription);
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
  console.log(totalCertieRef2);
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
      total.innerHTML = '';
      let trfoot = document.createElement('tr');
      trfoot.innerHTML = `
    <td colspan="3"><b>Total</b></td>
    <td><b>${totaleDuRevenu.toLocaleString('en-US')} Fcfa </b></td>
    `;
      total.appendChild(trfoot);
      const revTotal = document.getElementById('revenuTotal');
      revTotal.innerHTML = `${totaleDuRevenu.toLocaleString(
        'en-US'
      )} <span class="fw-bold">FCFA</span>`;
      console.log('Total global:', totaleDuRevenu);
    }
    CalculDeLaSommeTotale();
  })
  .catch((error) => {
    console.error("Une erreur s'est produite :", error);
  });
