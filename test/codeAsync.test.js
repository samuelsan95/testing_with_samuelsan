const { getPokemons } = require('../src/codeAsync')

test('Check pokemons result with async await', async () => {
    const pokemons = await getPokemons()

    expect(pokemons.count).toBeGreaterThan(1)
})

test('Check pokemons result with promises', () => {
    getPokemons()
        .then(pokemons => {
            expect(pokemons.count).toBeGreaterThan(1)
        })
})
