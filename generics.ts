//Generics in TS allow you to create reusable components or functions that can work with multiple data types.

//Basic function returning multiples datatype values

// const multiDatatypeReturn = (value: number | string ) => {
//   console.log(value);
//   return value;
  
// }

// const numResult: string | number = multiDatatypeReturn(45)
// const strResult: string | number = multiDatatypeReturn("shubha")
// const boolResult: string | number = multiDatatypeReturn(true)

// console.log(numResult);
// console.log(strResult);
// console.log(boolResult);


//Using generics
function multiDatatypeReturn<T>(value:T):T {
  return value;
}

const numResult = multiDatatypeReturn<number>(45)
const strResult = multiDatatypeReturn<string>("shubha")
const boolResult = multiDatatypeReturn<boolean>(true)

// console.log(numResult);
// console.log(strResult);
// console.log(boolResult);


function addOrConcat<T>(a:any, b:any):T {
  return a + b;
}


const numResultAdd = addOrConcat<number>(45,30)
const strResultAdd = addOrConcat<string>("shubha", "Mamu")
// const boolResultAdd = addOrConcat<boolean>(true)

console.log(numResultAdd);
console.log(strResultAdd);


