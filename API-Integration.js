document.getElementById('pokeball').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const rotateButton = document.getElementById('rotatePokeball');
    rotateButton.classList.add('rotate');
});




// Function to fetch data for a specific Pokémon by name or ID
function fetchPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the Pokémon data
            displayPokemon(data); // Optional: Display the data on your page
        })
        .catch(error => {
            console.error('Error fetching Pokémon:', error);
        });
}

// Example usage: Fetch data for Pikachu
fetchPokemon('pikachu');

// Optional: Function to display the Pokémon data
function displayPokemon(pokemonData) {
    const pokemonName = pokemonData.name;
    const pokemonImage = pokemonData.sprites.front_default;
    const pokemonAbilities = pokemonData.abilities.map(ability => ability.ability.name).join(', ');

    console.log(`Name: ${pokemonName}`);
    console.log(`Image URL: ${pokemonImage}`);
    console.log(`Abilities: ${pokemonAbilities}`);

    // You can use DOM manipulation to display this information on your webpage
}
