const Person = require('../src/assertions')

test('Create new person and check init params', () => {
    //Arrange
    const person = new Person('Samuel')

    //Act
    const age = person.getAge()
    const lastName = person.getLastName()
    
    //Assert
    expect(age).toBeNull() // Comprobamos si es nulo
    expect(lastName).toBeUndefined() // Comprobamos si es undefined
    expect(person.hasJob).toBeFalsy() // Comprobamos si es falso
})

test('Create new person, set properties and check new data', () => {
    //Arrange
    const person = new Person('Samuel')

    //Act
    person.setLastName('Sánchez')
    person.setAge(28)
    person.setHasJob(true)
    person.addHobby('coding')
    person.addHobby('football')
    const age = person.getAge()
    const lastName = person.getLastName()

    
    //Assert
    expect(person.hasJob).toBeTruthy() // Comprobamos si es verdadero
    expect(age).toBeGreaterThan(25) // Comprobamos si es mayor de 25
    expect(lastName).toMatch(/^[A-Z]/) // Comprobamos con una expresión regular si empieza con mayúscula
    expect(person.hobbies).toContain('coding') // Comprobamos si tiene 'coding' como hobby
})

test('Create new person but return error because age is negative', () => {
    const person = new Person('Samuel')

    expect(() => person.setAge(-1)).toThrow()
})