function isEven(num:number):boolean {
  return num % 2 === 0;
}

console.log(isEven(17));

let bigNum: BigInt = 9007199254740991n;

console.log(bigNum);

let anotherBigNum: BigInt = (Number as any).MAX_SAFE_INTEGER;
console.log(anotherBigNum);

