// Function to validate the form
const validateForm = (event) => {
    event.preventDefault(); // Cette ligne empêche l'action par défaut d'un événement d'être déclenchée
    const form = event.target;
    const formData = new FormData(form);
    let isValid = true;
    const errorMessages = {
      firstname: "Tous les champs doivent être remplis",
      lastname: "Tous les champs doivent être remplis",
      age: "Tous les champs doivent être remplis",
      email: "Tous les champs doivent être remplis",
      email_confirm: "Tous les champs doivent être remplis",
      password: "Tous les champs doivent être remplis",
      password_confirm: "Tous les champs doivent être remplis",
      cgu: "Les CGU doivent être acceptées",
    };
  
    for (let [key, value] of formData) {
      if (value === "") {
        isValid = false;
        alert(errorMessages[key]);
        
        break;
      }
    }
  
    if (!isValid) {
      return false;
    }
  
    // Verifie si le firstname à moins de 3 caractere.
    if (!/^.{3,}$/.test(formData.get("firstname"))) {
      alert("Le prénom doit contenir au moins 3 caractères.");
      return false;
    }
  
    // Verifie si l'email et la confirmation corresponde
    if (formData.get("email") !== formData.get("email_confirm")) {
      alert("Les emails ne sont pas les mêmes.");
      return false;
    }
  
    // Check if password and password_confirm match
    if (formData.get("password") !== formData.get("password_confirm")) {
      alert("Les mots de passe ne sont pas les mêmes.");
      return false;
    }
    // Check if age is greater than 18
    if (formData.get("age") < 18) {
        alert("L'âge doit être supérieur à 18 ans.");
        return false;
      }
    
      // Check if email format is valid
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.get("email"))) {
        alert("Le format de l'email est invalide.");
        return false;
      }
    
      // Check if password has at least 6 characters
      if (formData.get("password").length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères.");
        return false;
      }
    
      // Check if CGU is accepted
      if (!formData.get("cgu")) {
        alert("Les CGU doivent être acceptées.");
        return false;
      }
    
 // If everything is valid, submit the form
      
      if (isValid) {
        form.submit();
        window.location.href = "/confirm_form.html";
      }
    }
    // Add event listener to the form to call the validation function on submit
    const form = document.querySelector("form");
    form.addEventListener("submit", validateForm);

   
    