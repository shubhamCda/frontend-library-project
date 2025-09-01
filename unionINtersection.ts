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


