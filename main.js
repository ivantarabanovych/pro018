class Person {
    constructor(name, age, career){
        this.name = name;
        this.age = age;
        this.career = career; 
    }

    greet(){
        console.log(`Hi my name is ${this.name}, I'm ${this.age} years old, works ${this.career}!`);
    }
}

const person1 = new Person ('Ivan', '21', 'admin');
const person2 = new Person ('Valentyna', '21', 'finansist');

person1.greet();
person2.greet();


