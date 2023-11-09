const handleProfile = () => {
  
    const userRef = collection(db, "utilisateurs");
      onSnapshot(userRef, (snapshot) => {
        let userRef = [];
        snapshot.docs.forEach((doc) => {
          userRef.push({...doc.data(), id: doc.id })
        })
        userRef.forEach((utilisateur => {
          console.log(utilisateur);
        }))
      });
  };

  handleProfile();
  console.log("page profil");