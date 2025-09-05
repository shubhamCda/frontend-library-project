//Interrface
//it allows you to defne a contract for an object's shape. It specifies the properties and their types that an object must have to be during development and do not generate any JS code at runtime.


interface Greet {
  name: string;
  age: number;
}

const greet: Greet = {
  name: "shubh",
  age: 31
}

interface Product {
  pName: string;
  price: number;
  quantity: number;
}

const product1: Product = {
  pName: "fryer",
  price: 1299,
  quantity: 5,
}

const product2: Product = {
  pName: "kettle",
  price: 599,
  quantity: 4,
}

const calTotalPrice = (product: Product) => {
  return product.price * product.quantity;
}

console.log(calTotalPrice(product1));
console.log(calTotalPrice(product2));
