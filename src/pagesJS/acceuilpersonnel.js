import { collection, onSnapshot, getFirestore } from "firebase/firestore";
export function nombreProfesseur() {
  const db = getFirestore();
  const professeurs = collection(db, "professeurs");
  onSnapshot(professeurs, (snapshot) => {
    let professeurs = [];
    snapshot.docs.forEach((doc) => {
      professeurs.push({ ...doc.data(), id: doc.id });
    });
    let nombreProfesseur = professeurs.length;
    const countProfeseeur = document.querySelector('.num1')
 let interval = 5000;  
  console.log(countProfeseeur);
   let startValue = 0;
   countProfeseeur.setAttribute("data-val", `${nombreProfesseur}`);
   let endValue = parseFloat(countProfeseeur.getAttribute("data-val"))
   console.log(endValue);
   let duration = Math.floor(interval / endValue);
   let counter = setInterval(function () {
     startValue += 1;
     countProfeseeur.textContent = startValue;
     if (startValue == endValue) {
       clearInterval(counter);
       
     }
   }, duration)
  })
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
     let nombreEmployer = employer.length;
     const countEmployers = document.querySelector('.num2')
  let interval = 5000;  
  //  countElement.forEach((countElement) => {
     console.log(countEmployers);
    let startValue = 0;
    countEmployers.setAttribute("data-val", `${nombreEmployer}`);
    let endValue = parseFloat(countEmployers.getAttribute("data-val"))
    console.log(endValue);
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
      startValue += 1;
      countEmployers.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counter);
        
      }
    }, duration)
   })
}

/***********************NOMBREASSOCIE********************************* */

export function nombreAssocie() {
  const db = getFirestore();
  const associe = collection(db, "associe");

  onSnapshot(associe, (snapshot) => {
    let associe = [];
    snapshot.docs.forEach((doc) => {
      associe.push({ ...doc.data(), id: doc.id });
    });
    
    let nombreAssocie = associe.length
    console.log(nombreAssocie);
    const countElement = document.querySelector('.num3');
    console.log(countElement);
    
     let interval = 5000;
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
