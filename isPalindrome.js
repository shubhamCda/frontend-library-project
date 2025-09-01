var isPalindrome = function (word) {
    var revStr = word.split("").reverse().join("");
    return word === revStr;
};
console.log(isPalindrome("racecar"));
