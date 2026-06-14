class User {
    constructor(name,age) {
        this.name = name;
        this.age = age;
        
    }
    shout() {
        return `this ${this.name} is ${this.age} years old `
    }
}
class Coder extends User {
        constructor(name,age,coder) {
            super(name,age)
            this.coder = coder
        }
        shout() {
            return `hi ${this.name} ${this.coder} coder you are`
        }
    }
const person1 = new Coder("Coding Labs", 14, true)
console.log(person1.shout())
