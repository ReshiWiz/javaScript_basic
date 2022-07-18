// // 1) Write a prgram to print factorial od any number

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));

// checking if number is negative
if (number < 0) {
  console.log("Error! This number does not exist.");
}

// if number is 0
else if (number === 0) {
  console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
  let fact = 1;
  for (i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${number} is ${fact}.`);
}
/* ----------------------------------------------------------------     */
// 2) write a program in javaScript to print fibonacci series .0,1,1,2,3,4.....

let fib = [0, 1];
for (let i = fib.length; i < 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
}
console.log(fib);

/*------------------------------------------------------------------------- */

// 3) write a program to find whether a number is an Armstrong or not ..?

let sum = 0;
const num4 = prompt(`Enter the number`);

let temp = num4;
while (temp > 0) {
  let remainder = temp % 10;
  sum += remainder * remainder * remainder;
  temp = parseInt(temp / 10);
}
if (sum == num4) {
  console.log(`${num4} is an Armstrong`);
} else {
  console.log(`${num4} is not an Armstrong `);
}

/*-------------------------------------------------------------------------*/

// 4)  Write a program to print Reverse of any number

let string = prompt(`Enter the number`);
let strlen = string.length;
let revstr = "";
for (let i = strlen - 1; i >= 0; i--) {
  revstr += string[i];
  console.log(`${string} reverse is ${revstr}`);
}

/*-------------------------------------------------------------------------*/
// 5)  To check whether a number is Prime or not.

const num5 = parseInt(prompt(`Enter the number : `));
let isPrime = true;

if (num5 === 1) {
  console.log(`1 is not prime number and composite`);
} else if (num5 > 1) {
  for (let i = 2; i < num5; i++) {
    if (num5 % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`${num5} is prime number`);
  } else {
    console.log(`${num5} is not a prime number`);
  }
} else {
  console.log("The number is not a prime number.");
}

/*-------------------------------------------------------------------------*/
//6) Program to find whether a year is Leap year or not..?

function CheckLeapYear(year) {
  if ((0 === year % 4 && 0 != year % 100) || 0 === year % 400) {
    console.log(year + ` is a leap year`);
  } else {
    console.log(year + ` is not a leap year`);
  }
}
const year = prompt(`Enter a year :`);
CheckLeapYear(year);

/*-------------------------------------------------------------------------*/
// 7) Program to print the below format

let n_1 = 5;
let string_1 = "";
for (let i = 0; i < n_1; i++) {
  // printing star
  for (let k = 0; k < n_1 - i; k++) {
    string_1 += "*";
  }
  string_1 += "\n";
}
console.log(string_1);

/*-------------------------------------------------------------------------*/

// 8) Program to print below format.

let n_2 = 5;
let string_2 = "";
for (let i = 0; i <= n_2; i++) {
  for (let j = 1; j <= n_2 - i; j++) {
    string_2 += j;
  }
  string_2 += "\n";
}
console.log(string_2);
/*-------------------------------------------------------------------------*/
// 9(i) Program to print below format "star"

let n_3 = 5;
let string_3 = "";
for (let i = 0; i < n_3; i++) {
  for (let j = 0; j < i; j++) {
    string_3 += "*";
  }
  string_3 += "\n";
}
console.log(string_3);

/*-------------------------------------------------------------------------*/

// 9(ii) Write a program to print below format "number"

let n_4 = 5;
let string_4 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    string_4 += i;
  }
  string_4 += "\n";
}
console.log(string_4);
