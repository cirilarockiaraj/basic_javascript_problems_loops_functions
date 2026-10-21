//1) Even or Odd
let check = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};
console.log(check(4));
console.log(check(7));
console.log(check(0));
console.log("*********************************");

//2) Result Evaluator — Pass or Fail
function evaluateResult(mark) {
  if (mark < 0 || mark > 100) {
    return "Invalid mark";
  }
  if (mark >= 50) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(evaluateResult(75));
console.log(evaluateResult(40));
console.log(evaluateResult(120));
console.log("*********************************");

//3) Maximum Finder — Largest of Three Numbers
let findMax = (a, b, c) => {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
};
console.log(findMax(10, 25, 15));
console.log(findMax(5, 3, 8));
console.log(findMax(9, 9, 2));
console.log("*********************************");

//4) Accumulator — Sum from 1 to N
function sumToN(n){
    if (n < 0) {
        return "Please give the positive number";
    }
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumToN(5));
console.log(sumToN(10));
console.log("*********************************");

//5) Multiplication Table Generator
function printTable(n){
    if (n < 0) {
        return "Please give the positive number";
    }

    for(let i = 1; i <= 10; i++){
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

printTable(3)
console.log("*********************************");

//6) Digit Counter — Number Length Finder
function countDigits(num) {
    if (num < 0) {
        return "Please give the positive number";
    }
    let count = 0;
    while (num > 0) {
        count++;
        num = (num/10) | 0; //This is an floor divison
    }
    return count;
}
console.log(countDigits(1234));
console.log(countDigits(9));
console.log(countDigits(10000));
console.log("*********************************");

//7) Number Reverser
function reverseNumber(num) {
    if (num < 0) {
        return "Please give the positive number";
    }
    let reversed = 0;
    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = (num/10) | 0;
    }
    return reversed;
}
console.log(reverseNumber(1234));
console.log(reverseNumber(500));
console.log(reverseNumber(91));
console.log("*********************************");


//8) Factorial Engine
function factorial(n) {
    if (n < 0) {
        return "Please give the positive number";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(1));
console.log("*********************************");

//9) Prime Validator
function isPrime(num) {
    if (num <= 1) {
        return "Please give the positive number greater than 1";
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(2));
console.log("*********************************");

//10) Pattern Builder — Star Triangle
function printPattern(n){
    if (n < 0) {
        return "Please give the positive number";
    }  

    for(let i = 1; i <= n; i++){
        let row = '';
        for(let j = 1; j <= i; j++){
            row += '* ';
        }
        console.log(row);
    }
}
printPattern(4);
console.log("*********************************");