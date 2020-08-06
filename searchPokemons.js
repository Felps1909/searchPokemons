const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';


const searchInput = getElement('.search-input'),
      searchButton = getElement('.search-button'),
      container = getElement('.pokemon'),
      erroMessage = getElement('.error')

var pokeName, 
    pokemon, 
    card


function getElement(element) {
  return document.querySelector(element)
}


function requestPokeInfo(url, name) {
  fetch(url + name)
    .then(response => response.json())
    .then(data => {
      pokemon = data
      
    })
    .catch(err => console.log(err))
}

function createCard () {
  card = `  
    <div class="pokemon-info">
    <img class= "image-poke" src="${pokemon.sprites.front_default}" alt="Sprite of ${pokemon.name}">
      <h1 class="name">Name: ${pokemon.name} </h1>
      <p class="number">Nº ${pokemon.id}</p>
      <p class="type">Type: ${pokemon.types.map(item => item.type.name).toString()}</p>
      <p class="skill">Skills: ${pokemon.moves.map(item => item.move.name).toString()}</p>
      <p class="weight">Weight: ${pokemon.weight  / 10}kg</p>
      <p class="height">Height: ${pokemon.height  / 10}m</p>
      <p class="height">Status: ${pokemon.stats.map(item=> item.stat.name).toString()}</p>
    </div>`
  return card
}


function startApp(pokeName) {
  requestPokeInfo(baseUrl, pokeName)
  container.innerHTML = createCard()
}

searchButton.addEventListener('click', event => {
  event.preventDefault()
  pokeName = searchInput.value.toLowerCase()
  startApp(pokeName)
});



