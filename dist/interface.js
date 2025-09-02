//Interrface
//it allows you to defne a contract for an object's shape. It specifies the properties and their types that an object must have to be during development and do not generate any JS code at runtime.
var greet = {
    name: "shubh",
    age: 31
};
var product1 = {
    pName: "fryer",
    price: 1299,
    quantity: 5,
};
var product2 = {
    pName: "kettle",
    price: 599,
    quantity: 4,
};
var calTotalPrice = function (product) {
    return product.price * product.quantity;
};
console.log(calTotalPrice(product1));
console.log(calTotalPrice(product2));
