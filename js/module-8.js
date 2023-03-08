// !
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because

// !
// function squareSum(arr) {
//   let sum = 0;
//   for (const item of arr) {
//     sum += item * item;
//   }
//   return sum;
// }
// squareSum([1, 2, 2]);

// !
// function squareSum(numbers) {
//   const total = numbers.reduce((previousValue, number) => {
//     return previousValue + number * number;
//   }, 0);
//   return total;
// }

// !
// function numberToString(num) {
//   // Return a string of the number here!
//   return num.toString();
// }
// console.log(numberToString(123));

// !
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size == str.length;
// }

// console.log(isIsogram('Dermatoglyphics'));

// !
// // Given two integers a and b, which can be positive or negative,
// // find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// // Note: a and b are not ordered!

// // Examples (a, b) --> output (explanation)

// // (1, 0) --> 1 (1 + 0 = 1)
// // (1, 2) --> 3 (1 + 2 = 3)
// // (0, 1) --> 1 (0 + 1 = 1)
// // (1, 1) --> 1 (1 since both are same)
// // (-1, 0) --> -1 (-1 + 0 = -1)
// // (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// // Your function should only return a number, not the explanation about how you get that number.

// function getSum(a, b) {
//   //Good luck!
//   let sum = 0;
//   if (a > b) {
//     for (let i = a; a <= i && (i = b); i += 1) {
//       sum += i;
//       console.log(i);
//     }
//   }
//   return sum;
// }
// console.log(getSum(1, 2));

// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
// !
