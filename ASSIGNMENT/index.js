// Fetching data from Pokeapi
const fetchPokemons = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Displaying fetched Pokémon on the home page
const displayPokemons = async () => {
  const pokemonList = document.getElementById("pokemon-list");

  const pokemons = await fetchPokemons();

  pokemons.forEach(async (pokemon) => {
    const response = await fetch(pokemon.url);
    const data = await response.json();

    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");

    const name = document.createElement("h3");
    name.textContent = data.name;

    const image = document.createElement("img");
    image.src = data.sprites.front_default;
    image.alt = data.name;
    image.classList.add("pokemon-image");

    pokemonCard.appendChild(name);
    pokemonCard.appendChild(image);

    pokemonList.appendChild(pokemonCard);
  });
};

// Load Pokémon data when the page is fully loaded
window.addEventListener("load", displayPokemons);
