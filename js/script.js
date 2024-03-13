var stockAffiche = false;

function stock() {
  if (stockAffiche == false) {
    let x = document.getElementsByClassName("stock");
    for (let i = 0; i < x.length; i++) {
      stockAffiche = true;
      x[i].style.display = "table-cell";
    }
  } else {
    let x = document.getElementsByClassName("stock");
    for (let i = 0; i < x.length; i++) {
      stockAffiche = false;
      x[i].style.display = "none";
    }
  }
}

window.onload = function () {
  let butMin = document.getElementsByClassName("butMin");

  for (let i = 0; i < butMin.length; i++) {
    butMin[i].disabled = true;
    butMin[i].style.backgroundColor = "lightgray";
  }
};

function plusNbAjout(i) {
  // Récupération des données
  let nbAjout = document.getElementsByClassName("nbAjout")[i];
  let stock = document.getElementsByClassName("stock")[i + 1];
  let butPlus = document.getElementsByClassName("butPlus")[i];
  let butMin = document.getElementsByClassName("butMin")[i];

  // Gestion du nombre
  nbAjout.textContent++;

  // Gestion des boutons
  if (nbAjout.textContent == stock.textContent) {
    butPlus.disabled = true;
    butPlus.style.backgroundColor = "lightgray";
  }
  if (nbAjout.textContent > 0) {
    butMin.disabled = false;
    butMin.style.backgroundColor = "orange";
  }
}

function moinsNbAjout(i) {
  // Récupération des données
  let nbAjout = document.getElementsByClassName("nbAjout")[i];
  let stock = document.getElementsByClassName("stock")[i + 1];
  let butPlus = document.getElementsByClassName("butPlus")[i];
  let butMin = document.getElementsByClassName("butMin")[i];

  // Gestion du nombre
  if (nbAjout.textContent > 0) {
    nbAjout.textContent--;
  }

  // Gestion des boutons
  if (nbAjout.textContent == 0) {
    butMin.disabled = true;
    butMin.style.backgroundColor = "lightgray";
  }
  if (nbAjout.textContent < stock.textContent) {
    butPlus.disabled = false;
    butPlus.style.backgroundColor = "orange";
  }
}

function agrand(i) {
  let overlay = document.getElementsByClassName("aggrand")[0];
  let imga = document.getElementsByClassName("imageAggrandie")[0];

  switch (i) {
    case 0:
      imga.src = "img/boosterBoxMP01.png";
      break;
    case 1:
      imga.src = "img/boosterBoxCMB.png";
      break;
    case 2:
      imga.src = "img/boosterBoxJRP.png";
      break;
    case 3:
      imga.src = "img/boosterBoxADW.png";
      break;
    case 4:
      imga.src = "img/boosterBoxGOG.png";
      break;
    case 5:
      imga.src = "img/playmatCMB.png";
      break;
    case 6:
      imga.src = "img/playmatJRP.jpg";
      break;
    case 7:
      imga.src = "img/playmatL1.png";
      break;
    case 8:
      imga.src = "img/playmatADW.png";
      break;
    case 9:
      imga.src = "img/playmatGOG.jpg";
      break;
    case 10:
      imga.src = "img/boxLight.png";
      break;
    case 11:
      imga.src = "img/boxDarkness.png";
      break;
    case 12:
      imga.src = "img/boxFire.png";
      break;
    case 13:
      imga.src = "img/boxWater.png";
      break;
    case 14:
      imga.src = "img/boxWind.png";
      break;
    default:
      break;
  }
  overlay.style.display = "flex";
}

function sortieCadre() {
  let overlay = document.getElementsByClassName("aggrand")[0];
  overlay.style.display = "none";
}
