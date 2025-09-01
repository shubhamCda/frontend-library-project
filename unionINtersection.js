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
console.log(displayInfo(23));
console.log(displayInfo("Shubhambodalkar"));
// console.log(displayInfo(true));
