var student1 = {
    name: "Shubham",
    age: 31,
    greet: function (country) { return "".concat(country, " is my country."); }
};
var introduction = function (student1) {
    var name = student1.name, age = student1.age;
    return "Welcome, Mr. ".concat(name, " age:").concat(age);
};
console.log(introduction(student1));
console.log(student1.greet("India"));
