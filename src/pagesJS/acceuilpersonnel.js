import { collection, onSnapshot, getFirestore } from "firebase/firestore";

export function nombreProfesseur() {
  const db = getFirestore();
  const professeurs = collection(db, "professeurs");
  onSnapshot(professeurs, (snapshot) => {
    let professeurs = [];
    snapshot.docs.forEach((doc) => {
      professeurs.push({ ...doc.data(), id: doc.id });
    });
    const nombreProfesseur = document.getElementById("proff");
    nombreProfesseur.innerHTML = professeurs.length;
  });
}

/*******************NOMBREEMPLOYER***************************** */
export function nombreEmployer() {
  const db = getFirestore();
  const employer = collection(db, "employer");

  onSnapshot(employer, (snapshot) => {
    let employer = [];
    snapshot.docs.forEach((doc) => {
      employer.push({ ...doc.data(), id: doc.id });
    });
    //  console.log({employer});
    const nombreEmployer = document.getElementById("empl");
    //  console.log(nombreEmployer);
    nombreEmployer.innerHTML = employer.length;
  });
}

/***********************NOMBREASSOCIE********************************* */

export function nombreAssocie() {
  const db = getFirestore();
  const associe = collection(db, "associe");
  // const nombreAssocie = document.getElementById("associe");
  onSnapshot(associe, (snapshot) => {
    let associe = [];
    snapshot.docs.forEach((doc) => {
      associe.push({ ...doc.data(), id: doc.id });
    });
    // console.log(associe);
    // nombreAssocie.innerHTML = associe.length;
    let nombreAssocie = associe.length
    console.log(nombreAssocie);
    const countElement = document.querySelector('.num');
    console.log(countElement);
    
     let interval = 1000;
    
    //  countElement.forEach((countElement) => {
      console.log(countElement);
      let startValue = 0;
       countElement.setAttribute("data-val", `${nombreAssocie}`);
      let endValue = parseFloat(countElement.getAttribute("data-val"))
      console.log(endValue);
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        countElement.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
          
        }
      }, duration)
     })
    
  // });
}


/*****************************COUNTING ANIMATION *********************************** */
//  const countElement = document.querySelectorAll('.num');
// console.log(countElement);

//  let interval = 5000;

//  countElement.forEach((countElement) => {
//   let startValue = 0;
//   let endValue = parseInt(countElement.setAttribute(data-val, value))
//   console.log(endValue);
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 1;
//     countElement.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
      
//     }
//   }, duration)
//  })

// const targetCount = 4000;

// const duration = 100; 
// const initialCount = 0;
// const increment = Math.ceil(targetCount / (duration / 100));

// function updateCount() {
//   initialCount += increment;
//   countElement.textContent = initialCount;

//   if (initialCount >= targetCount) {
//     clearInterval(countInterval);
//     countElement.textContent = targetCount;
//   }
// }

// const countInterval = setInterval(updateCount, 100);