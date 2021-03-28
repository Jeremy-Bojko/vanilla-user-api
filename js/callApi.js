// Le fetch nous permet de faire une requete vers l'URI
// => GET sur https://reqres.in/api/users?page=1

/**
 * La struture de code ci-dessous 
 *    fetch().then().then().catch();
 * equivaut à celle ci : 
 *    fetch()
 *    .then()
 *    .then()
 *    .catch()
 * 
 * Les retours à la lignes peuvent être étonnants mais c'est bel et bien la même chose 
 * 
 * Le but ici est de pouvoir se servir des données que nous renvoie l'api pour construire notre page HTML.
 * Vous allez devoir compléter le code pour le faire fonctionner 
 */



fetch("https://reqres.in/api/users?page=1").then(function(responseAPI) {
  // console.log(`Juste après réception de ma réponse : `, responseAPI);
  // console.log(`Je traduis ma réponse :`, responseAPI.json());
  return responseAPI.json(); // Ici je retourne l'objet reponse formater en JSON
}).then(function(reponseEnJson) {
  // console.log('Reponse en JSON : ', reponseEnJson);
  // console.log('Contenu de l\'attribut Data de l\'objet reponseEnJson: ', reponseEnJson.data);
  console.log("J'ai reçu une réponse de l'API", reponseEnJson.data);
  let reponseFinale = reponseEnJson.data;
  console.log('La valeur de ma réponse dans le then : ', reponseFinale);  
 
  /**
   * INSERT CODE HERE 
   * */ 


}).catch(function(error) {
  // Le catch permet de récupérer toute erreur produite dans l'enchainement du dessus
  console.error(error);
})

console.log('La suite du programme');

function addNewCard(user) {
  const mainContainer = document.querySelector(".container");
  mainContainer.innerHTML += 
  `<div class="card">
    <div class="card__image-container">
      <img class="card__image" src="${user.avatar}" alt="${user.first_name} picture">
    </div>
    <div class="card__text-container">
      <div class="card__text__name">
        <span>${user.first_name}</span>
        <span>${user.last_name}</span>
      </div>
      <div class="card__text__email">
        <span>${user.email}</span>
      </div>
    </div>
  </div>`
}
