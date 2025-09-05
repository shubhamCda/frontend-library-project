//class and object creation
// class Person {
//   name: string;
//   age: number;
//   hobbies: string[];
//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }
// }
// const person1 = new Person("shubha", 31, ["i", "live", "Goa"]);
// console.log(person1);
//////////////////////////////////////////////////////////////////////////////
//Inheritance
class Person {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduction() {
        return `My name is ${this.name}, I'm ${this.age} old. My hobbies are ${this.hobbies.join(", ")}.`;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduction() {
        return `${super.introduction()}. My grade is ${this.grade}.`;
    }
}
const person1 = new Person("shubha", 31, ["i", "live", "Goa"]);
console.log(person1.introduction());
const studen1 = new Student("Shubham", 28, ["coding", "movie", "trekking"], 10);
console.log(studen1.introduction());
export {};
//# sourceMappingURL=index.js.map