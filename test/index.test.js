const { sum, isFruit } = require('../src/index')

test('Check sum two numbers', () => {
    //Arrange
    const a = 1
    const b = 2

    //Act
    const result = sum(a, b)
    
    //Assert
    expect(result).toBe(3)
})

test('Check sum two numbers and result is different', () => {
    //Arrange
    const a = 1
    const b = 2

    //Act
    const result = sum(a, b)
    
    //Assert
    expect(result).not.toBe(4)
})

test('Checker undefined, nul and false or true when call isFruit', () => {
    //Arrange
    const fruit = 'banana'
    const noFruit = 'meat'

    //Act
    const result = sum(a, b)
    
    //Assert
    expect(result).not.toBe(4)
})

