var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var displayInfo = function (value) {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        console.error("Invalid data input XXXX");
    }
};
// we have to mention all the properties from type Person and Employee otherwise employee obj. will show error.
var employee = {
    name: "Shubh",
    age: 31,
    emp_id: 1012,
    department: "IT"
};
var user = { name: "shubh", age: 31 };
var location = { city: "Nagpur", country: "India" };
// const createUserProfile = (user: User, location: MyLocation) => {
//   return `My name is ${user.name} and I live in the ${location.city} city.`
// }
// createUserProfile(user, location);


//If we want complete user profile
var createUserProfile = function (user, location) {
    return __assign(__assign({}, user), location);
};
var myCompleteInfo = createUserProfile(user, location);
console.log(myCompleteInfo);
