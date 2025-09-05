class Person {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }
}

const person1 = new Person("shubha", 31, ["i", "live", "Goa"]);

console.log(person1);
