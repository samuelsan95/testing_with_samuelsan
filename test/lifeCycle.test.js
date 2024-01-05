beforeEach(() => {
    console.log("-- Before each --")
})

afterEach(() => {
    console.log("-- After each --")
})

beforeAll(() => {
    console.log("-- Before all --")
})

afterAll(() => {
    console.log("-- After all --")
})

test('test 1', () => {
    expect(1+1).toBe(2)
})

test('test 2', () => {
    expect(1+1).toBe(2)
})