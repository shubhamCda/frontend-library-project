type Student = {
  name: string;
  age: number;
  gender?: number;
  greet: (country: string) => string;
  
}

const student1: Student = {
  name: "Shubham",
  age: 31,
  greet: (country):string => `${country} is my country.`
}


const introduction = (student1: Student):string => {
  const { name, age } = student1;
  return `Welcome, Mr. ${name} age:${age}`;

}

console.log(introduction(student1));
console.log(student1.greet("India"));
