<<<<<<< HEAD
import Pokemon from "./model.js";

=======
>>>>>>> 9fac22ea9f69d80871a3a0ba329d32e70a2749f9
const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const maxRecords = 151;
const limit = 10;
let offset = 0;

<<<<<<< HEAD
function convertPokemonToLi(pokemon) {
=======
function convertPokemon(pokemon) {
>>>>>>> 9fac22ea9f69d80871a3a0ba329d32e70a2749f9
  return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types
                      .map((type) => `<li class="type ${type}">${type}</li>`)
                      .join("")}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `;
}

<<<<<<< HEAD
function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    debugger;
    const newHtml = pokemons.map(convertPokemonToLi).join("");
=======
function loadPokemon(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemon).join("");
>>>>>>> 9fac22ea9f69d80871a3a0ba329d32e70a2749f9
    pokemonList.innerHTML += newHtml;
  });
}

<<<<<<< HEAD
loadPokemonItens(offset, limit);
=======
loadPokemon(offset, limit);
>>>>>>> 9fac22ea9f69d80871a3a0ba329d32e70a2749f9

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordsWithNexPage = offset + limit;

  if (qtdRecordsWithNexPage >= maxRecords) {
    const newLimit = maxRecords - offset;
<<<<<<< HEAD
    loadPokemonItens(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemonItens(offset, limit);
=======
    loadPokemon(offset, newLimit);

    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    loadPokemon(offset, limit);
>>>>>>> 9fac22ea9f69d80871a3a0ba329d32e70a2749f9
  }
});
