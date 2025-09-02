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
function multiDatatypeReturn(value) {
    return value;
}
var numResult = multiDatatypeReturn(45);
var strResult = multiDatatypeReturn("shubha");
var boolResult = multiDatatypeReturn(true);
// console.log(numResult);
// console.log(strResult);
// console.log(boolResult);
function addOrConcat(a, b) {
    return a + b;
}
var numResultAdd = addOrConcat(45, 30);
var strResultAdd = addOrConcat("shubha", " Mamu");
// const boolResultAdd = addOrConcat<boolean>(true)
console.log(numResultAdd);
console.log(strResultAdd);
