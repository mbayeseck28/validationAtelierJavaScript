import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function storageImage(file) {
  const storage = getStorage();
  const storageRef = ref(storage, "images/" + file.name);
  await uploadBytes(storageRef, file);
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
}

export async function ajouterAssocier(formAssocie) {
  const db = getFirestore();
  const associeCollection = collection(db, "associe");

  try {
    const imageURL = await storageImage(formAssocie.fileInput.files[0]);
    console.log("imageURL", imageURL);
    await addDoc(associeCollection, {
      nom: formAssocie.nomAss.value,
      coordonnee: formAssocie.coordonneeAss.value,
      email: formAssocie.emailAss.value,
      logo: imageURL,
    });

    alert("Associe ajouté avec succès !", imageURL);
    formAssocie.reset();
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'associe :", error);
    alert("Erreur lors de l'ajout de l'associe :", error)
  }
}

export function gestionAssocie() {
  const db = getFirestore();

  // const entreprise = collection(db, "entreprise");
  const associe = collection(db, "associe");

  // console.log(associe);
  onSnapshot(associe, (snapshot) => {
    let associe = [];
    snapshot.docs.forEach((doc) => {
      associe.push({ ...doc.data(), id: doc.id });
    });
    // console.log(associe);
    const logoEntreprise = document.querySelector("#logo-entreprise");
    logoEntreprise.innerHTML = "";
    associe.forEach((ins) => {
      const div = document.createElement("div");
      div.className = "col-lg-2 align-items-center ";
      div.innerHTML = `
      <button class="btn k rounded-pill">
        <img src="${ins.logo}" alt="Logo de l'associe" class="img ">                                                           
      </button>
          <p class="fw-bold text-capitalize">${ins.nom}</p>
        `;
      logoEntreprise.appendChild(div);
    });
  });
}

// export function ajouterAssocier(formAssocie) {
//     const db = getFirestore();
//     const associe = collection(db, "associe");

//     addDoc(associe, {
//       nom: formAssocie.nomAss.value,
//       coordonnee: formAssocie.coordonneeAss.value,
//       email: formAssocie.emailAss.value,
//       logo: formAssocie.fileInput.value

//     }).then(() => {
//         console.log(formAssocie.nomAss.value);
//         formAssocie.reset()
//     });
//   }
