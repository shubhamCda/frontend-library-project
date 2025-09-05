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

// class Person {
//   name: string;
//   age: number;
//   hobbies: string[];

//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }

//   introduction():string {
//     return `My name is ${this.name}, I'm ${this.age} old. My hobbies are ${this.hobbies.join(", ")}.`
//   }
// }

// class Student extends Person{
//   grade: number;

//   constructor(name: string, age: number, hobbies: string[], grade: number) {
//     super(name, age, hobbies);
//     this.grade = grade;
//   }

//   introduction(): string {
//     return `${super.introduction()}. My grade is ${this.grade}.`;
//   }
// }

// const person1 = new Person("shubha", 31, ["i", "live", "Goa"]);

// console.log(person1.introduction());

// const studen1 = new Student("Shubham", 28, ["coding", "movie", "trekking"], 10);
// console.log(studen1.introduction());

//////////////////////////////////////////////////////////////////////////////////////////

//Access modifiers

// class Person {
//   public name: string;
//   public age: number;
//   protected hobbies: string[];

//   constructor(name: string, age: number, hobbies: string[]) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = hobbies;
//   }

//   introduction():string {
//     return `My name is ${this.name}, I'm ${this.age} old. My hobbies are ${this.hobbies.join(", ")}.`
//   }
// }

// class Student extends Person{
//   public grade: number;

//   constructor(name: string, age: number, hobbies: string[], grade: number) {
//     super(name, age, hobbies);
//     this.grade = grade;
//   }

//   introduction(): string {
//     return `${super.introduction()}. My grade is ${this.grade}.`;
//   }
// }

// const person1 = new Person("shubha", 31, ["i", "live", "Goa"]);

// console.log(person1.introduction());

// const studen1 = new Student("Shubham", 28, ["coding", "movie", "trekking"], 10);
// console.log(studen1.introduction());

////////////////////////////////////////////////////////////////////////////////

//Short-hand method

class Person {
	// public name: string;
	// public age: number;
	// protected hobbies: string[];
	//we can directly declare properties in constructor parameters with access modifiers

	constructor(
		public name: string,
		public age: number,
		protected hobbies: string[]
	) {
		// this.name = name;
		// this.age = age;
    // this.hobbies = hobbies;
    // there is no need to declare
	}

	introduction(): string {
		return `My name is ${this.name}, I'm ${
			this.age
		} old. My hobbies are ${this.hobbies.join(", ")}.`;
	}
}

class Student extends Person {
	// public grade: number;

	constructor(name: string, age: number, hobbies: string[], public grade: number) {
		super(name, age, hobbies);
		
	}

	introduction(): string {
		return `${super.introduction()}. My grade is ${this.grade}.`;
	}
}

const person1 = new Person("shubha", 31, ["i", "live", "Goa"]);

console.log(person1.introduction());

const studen1 = new Student("Shubham", 28, ["coding", "movie", "trekking"], 10);
console.log(studen1.introduction());
