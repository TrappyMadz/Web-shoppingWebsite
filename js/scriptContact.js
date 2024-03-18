window.onload = function () {
  let aujourdhui = new Date();

  aujourdhui = new Date(aujourdhui.setDate(aujourdhui.getDate()))
    .toISOString()
    .split("T")[0];
  document.getElementById("naissance").setAttribute("max", aujourdhui);
  document.getElementById("date").setAttribute("min", aujourdhui);
};

// Fonctions de tests :
// Première lettre = majuscule ?
function firstUpperCase(message) {
  return /^[A-Z]/.test(message);
}

// Contien des chiffres ?
function numb(message) {
  return /\d/.test(message);
}

// Contien des symboles ?
function spec(message) {
  return /[`!@#$%^&*()_+\=\[\]{};:"\\|,.<>\/?~]/.test(message);
}

// Validation mail ?
function validMail(message) {
  return String(message)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function validationForm() {
  let problem = false;
  let nom = document.forms["contact"]["nom"].value;
  let prenom = document.forms["contact"]["prenom"].value;
  let mail = document.forms["contact"]["mail"].value;

  let errorNom = document.getElementById("labName");
  let errorPrenom = document.getElementById("labPren");
  let errorMail = document.getElementById("labMail");

  // Nom
  if (numb(nom) || spec(nom)) {
    errorNom.innerHTML =
      "Nom : <br> \u274c Veuillez uiliser des caractères valides.";
    problem = true;
  } else if (!firstUpperCase(nom)) {
    errorNom.innerHTML = "Nom : <br> \u274c Doit commencer par une majuscule.";
    problem = true;
  } else {
    errorNom.textContent = "\u2705 Nom : ";
  }

  // Prénom
  if (numb(prenom) || spec(prenom)) {
    errorPrenom.innerHTML =
      "Prénom : <br> \u274c Veuillez uiliser des caractères valides.";
    problem = true;
  } else if (!firstUpperCase(prenom)) {
    errorPrenom.innerHTML =
      "Prénom : <br> \u274c Doit commencer par une majuscule.";
    problem = true;
  } else {
    errorPrenom.innerHTML = "\u2705 Prénom : ";
  }

  // eMail
  if (!validMail(mail)) {
    errorMail.innerHTML =
      "Email : <br> \u274c Veuillez entrer une adresse mail valide.";
    problem = true;
  } else {
    errorMail.innerHTML = "\u2705 Email : ";
  }

  // Empecher l'envoie du form :
  if (problem == true) {
    return false;
  } else {
    return true;
  }
}
