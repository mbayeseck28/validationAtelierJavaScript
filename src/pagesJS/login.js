
const handleLogin = async (event) => {
    console.log('before prevent')
    event.preventDefault();
    console.log('after prevent')
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Utilisateur connecté");
      window.location.href = "../../accueil/acceuil.html";
  
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Erreur lors de la connexion :", errorCode, errorMessage);
    }
  };
  
  const loginForm = document.getElementById("signup");
  console.log("page connexion");
  loginForm.addEventListener("submit", handleLogin);