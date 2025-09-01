type PersonInfo = [string, number, boolean];


const displayPersonInfo = (person: PersonInfo) => {
  const [name, age, hasID] = person;
  console.log(`Name: ${name}, Age: ${age} and has Driving Licence: ${hasID ? "Yes" : "No"}.`);
  
}

const person1: PersonInfo = ["shubh", 30, true];
const person2: PersonInfo = ["Amit", 32, false];

displayPersonInfo(person1)
displayPersonInfo(person2)