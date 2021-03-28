
let userTest = {
  "first_name": 'Bamba',
  "last_name": 'Gaye Lo',
  "email": 'bamba@mail.com',
  "avatar": 'https://www.fillmurray.com/100/100'
}

let user2Test = {
  "first_name": 'Kevin',
  "last_name": 'Jean-Charles',
  "email": 'kevin@mail.com',
  "avatar": 'https://www.fillmurray.com/100/100'
}

/**
 * Step 1
 * Build cards in view with the 2 objects (userTest and user2Test)
 */



/**
 * Step 2 Complete the for loop to display 6 cards with userTest datas
 */
for (let cpt = 0; cpt < 6; cpt++) {
  
}

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

