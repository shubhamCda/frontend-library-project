var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasID = person[2];
    console.log("Name: ".concat(name, ", Age: ").concat(age, " and has Driving Licence: ").concat(hasID ? "Yes" : "No", "."));
};
var person1 = ["shubh", 30, true];
var person2 = ["Amit", 32, false];
displayPersonInfo(person1);
displayPersonInfo(person2);
