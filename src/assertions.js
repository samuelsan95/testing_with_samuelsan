class Person {
    constructor(name) {
        this.name = name
        this.hasJob = false
        this.lastName = undefined
        this.age = null
        this.hobbies = []
    }

    getLastName() {
        return this.lastName
    }

    getAge() {
        return this.age
    }

    setAge(age) {
        if (age < 0) throw 'Age should greater than 0'
        this.age = age
    }

    setLastName(lastName) {
        this.lastName = lastName
    }

    setHasJob(hasJob) {
        this.hasJob = hasJob
    }

    addHobby(hooby) {
        this.hobbies.push(hooby)
    }
}

module.exports = Person
