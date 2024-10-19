const input = document.getElementById("search-input");
const button = document.getElementById("search-button");
const mainUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";
const pokemonInfoField = document.getElementById("pokemon-info-field");
const pokemonDetailsElements = document.querySelectorAll(
  ".pokemon-defail-info-field .details .detail div:nth-child(2)"
);

const findPokemon = async () => {
  try {
    const userValue = convertUserValue(input.value);
    const url = mainUrl + userValue;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    catchPokemon(jsonResponse);
  } catch (error) {
    alert("Pokemon was not found");
  }
};
const runEvents = () => {
  button.addEventListener("click", findPokemon);
};

const catchPokemon = (pokemon) => {
  const chosenPokemon = {
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    id: pokemon.id,
    imgUrl: pokemon.sprites.front_default,
    stats: pokemon.stats,
    type: pokemon.types[0].type.name,
  };
  showAllInfo(chosenPokemon);
};

const showAllInfo = (chosenPokemon) => {
  pokemonInfoField.innerHTML = `
    <div class="pokemon-info">
            <div class="name-id">
              <span id="pokemon-name">${chosenPokemon.name.toUpperCase()}</span>
              <span id="pokemon-id">#${chosenPokemon.id}</span>
            </div>
            <div class="weight-height">
              <span id="weight">Weight: ${chosenPokemon.weight}</span>
              <span id="height">Height: ${chosenPokemon.height}</span>
            </div>
          </div>
          <div class="pokemon-img">
            <img
              id="sprite"
              src="${chosenPokemon.imgUrl}"
              alt="pokemon-img"
            />
          </div>
          <div class="pokemon-abilities">
            <div>${chosenPokemon.type.toUpperCase()}</div>
          </div>
    `;
  pokemonDetailsElements.forEach((el, index) => {
    el.textContent = chosenPokemon.stats[index].base_stat;
  });
};

runEvents();

const convertUserValue = (value) => value.toLowerCase();
