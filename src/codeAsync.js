async function getPokemons() {
    const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon")
    return pokemons.json()
}

module.exports = {
    getPokemons
}