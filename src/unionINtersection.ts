const displayInfo = (value: string | number) => {
  if (typeof value === 'number') {
    return value * 2;
  } else if (typeof value === 'string') {
    return value.toUpperCase();
  } else {
    console.error("Invalid data input XXXX");
    
  }
}

// console.log(displayInfo(23));
// console.log(displayInfo("Shubhambodalkar"));
// console.log(displayInfo(true));

//////////////////////////////////////////////////

// Union

type Person = {
  name: string;
  age: number;
}

type Employee = {
  emp_id: number;
  department: string;
}

// type EmployeeDetails = Person | Employee;

// const employee: EmployeeDetails = {
//   name: "Shubh",
//   age: 31,
//   emp_id: 1012
// }

// Intersection

type EmployeeDetails = Person & Employee;

// we have to mention all the properties from type Person and Employee otherwise employee obj. will show error.

const employee: EmployeeDetails = {
  name: "Shubh",
  age: 31,
  emp_id: 1012,
  department: "IT"
}

//this contains all the properties


//Given two TypeScript types: User and MyLocation. Create a function to generate Profile of user.


type User = {
  name: string;
  age: number;
}

type MyLocation = {
  city: string;
  country: string;
}

const user = { name: "shubh", age: 31 };
const location = { city: "Nagpur", country: "India" };


// const createUserProfile = (user: User, location: MyLocation) => {
//   return `My name is ${user.name} and I live in the ${location.city} city.`
// }

// createUserProfile(user, location);



//If we want complete user profile

const createUserProfile = (user: User, location: MyLocation) => {
  return {...user, ...location}
}

const myCompleteInfo: User & Location = createUserProfile(user, location);

console.log(myCompleteInfo);
