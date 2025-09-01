const isPalindrome = (word: string): boolean => {
  let revStr = word.split("").reverse().join("");
  return word === revStr;
}

console.log(isPalindrome("racecar"));

