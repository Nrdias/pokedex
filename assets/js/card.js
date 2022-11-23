let details = (url) =>
  fetch(url)
    .then((response) => response.json())
    .then((pokemon) => {
      let status = pokemon.stats
        .map((stat) => {
          return `
          <div class="progressBar">
            <span class="statusName">${stat.stat.name}:</span>
            <span class="statusNumber">${stat.base_stat}</span>
            <br>
            <progress value="${stat.base_stat}" max="100">${stat.base_stat}%
            </progress>
          </div>
          `;
        })
        .join("");

      let pokeCard = `
        <h1>Pokedex</h1>
  <section class="pokeCard ${pokemon.types[0].type.name}">
    <div class="reference">
      <span class="name">${pokemon.name.toUpperCase()}</span>
      <span class="number">#${pokemon.id}</span>
    </div>
    <img class="img" src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
    </div>
    <div class="details">
      <ol class="types">
      ${pokemon.types
        .map(
          (typeSlot) =>
            `<li class="type ${typeSlot.type.name}">${typeSlot.type.name}</li>`
        )
        .join("")}
      </ol>
      <ol class="stats"><h5>STATUS</h5><div class="status">${status}</div></ol>
      <ol class="moves"><h5>MOVES</h5><div = class="movements">${pokemon.moves
        .slice(0, 4)
        .map((moveSlot) => `<li class="move">${moveSlot.move.name}</li>`)
        .join("")}</div>
      </ol>
    </div>
    <div class="button">
          <a id="backButton" class="btn btn-primary m-2">Back</a>
    </div>
  </section>
  `;
      document.getElementById("content").innerHTML = pokeCard;
      document.getElementById("backButton").addEventListener("click", (e) => {
        if (e.target) document.location.reload();
      });
    });
document
  .getElementById("pokemonList")
  .addEventListener("click", function (event) {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    if (event.target && event.target.matches("li.pokemon")) {
      url += event.target.children[0].innerText.slice(1);
      details(url);
    } else if (event.target && event.target.matches("div.detail")) {
      url += event.target.parentElement.children[0].innerText.slice(1);
      details(url);
    } else if (event.target && event.target.matches("span.name")) {
      url += event.target.parentElement.children[0].innerText.slice(1);
      details(url);
    } else if (event.target && event.target.matches("img")) {
      url +=
        event.target.parentElement.parentElement.children[0].innerText.slice(1);
      details(url);
    }
  });
