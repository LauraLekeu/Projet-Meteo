
let ville;

if('geolocation' in navigator) {
  navigator.geolocation.watchPosition((position) => {

    const url = 'https://api.openweathermap.org/data/2.5/weather?lon=' + position.coords.longitude + '&lat=' + position.coords.latitude + '&appid=30280ea9e4883e1f258f7a156be504a9&units=metric';
    // console.log(url);

    let requete = new XMLHttpRequest();

    requete.open('GET', url);

    requete.responseType = 'json';

    requete.send(); // Envoyer la requete


    // Détecter que l'API renvoit une réponse
    requete.onload = function() {
      if (requete.readyState === XMLHttpRequest.DONE) { // Si la requête est bien terminée
        if (requete.status === 200 )  { // si la requête a été traité avec succès
          let reponse = requete.response; // Récupérer la réponse de la requête
          let temperature = reponse.main.temp; // Récupérer la donnée temp de la propriété main de la réponse de l'api
          let ville = reponse.name;
          document.querySelector('#temperature_label').textContent = temperature;
          document.querySelector('#ville').textContent = ville;
        }
        else {
          alert('Problème ');
        }
      }
    }
  }, erreur, options);
}
else {
  ville = "Paris";
  recevoirTemperature(ville);
}

var options = {

  enableHighAccuracy: true
}

let  btnChangerVille = document.querySelector('#changer');

btnChangerVille.addEventListener('click', () => {
  ville = prompt("Choix de la ville :");
  recevoirTemperature(ville)
});

function erreur() {
  ville = "Paris";
  recevoirTemperature(ville);
}


function recevoirTemperature(ville) {

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=30280ea9e4883e1f258f7a156be504a9&units=metric';

  let requete = new XMLHttpRequest();

  requete.open('GET', url);

  requete.responseType = 'json';

  requete.send(); // Envoyer la requete


  // Détecter que l'API renvoit une réponse
  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) { // Si la requête est bien terminée
      if (requete.status === 200 )  { // si la requête a été traité avec succès
        let reponse = requete.response; // Récupérer la réponse de la requête
        let temperature = reponse.main.temp; // Récupérer la donnée temp de la propriété main de la réponse de l'api
        let ville = reponse.name;
        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;
      }
      else {
        alert('Problème ');
      }
    }
  }
}
