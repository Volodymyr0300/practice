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
// const dog = {
//   name: 'Mango',
//   age: 3,
//   isHappy: true,
// };

// const dogJSON = JSON.stringify(dog);
// console.log(dogJSON); // "{"name":"Mango","age":3,"isHappy":true}"

// !
// // const json = '{"name":"Mango","age":3,"isHappy":true}';
// // const dog = JSON.parse(dog);

// const dogAfter = JSON.parse(dogJSON);
// console.log(dogAfter); // {name: "Mango", age: 3, isHappy: true}
// console.log(dogAfter.name); // "Mango"

// !
// try {
//   const data = JSON.parse('Well, this is awkward');
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log('✅ This is fine, we handled parse error in try...catch');

// !
// try {
//   const data = JSON.parse('{username: "Mango"}');
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // "Unexpected token u in JSON at position 1"
// }

// console.log('✅ This is fine, we handled parse error in try...catch');

// !
// console.log('This message will not appear in the console');

// cos value = 5;

// !
// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// !
// localStorage.setItem('ui-theme', 'dark');

// const theme = localStorage.getItem('ui-theme');
// console.log(theme); // "dark"

// !
// const settings = {
//   theme: 'dark',
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// console.log(savedSettings);
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings); // settings object

// !
// localStorage.setItem('ui-theme', 'dark');
// console.log(localStorage.getItem('ui-theme')); // "dark"

// localStorage.removeItem('ui-theme');
// console.log(localStorage.getItem('ui-theme')); // null

// !
// localStorage.setItem('ui-theme', 'light');
// localStorage.setItem('sidebar', 'expanded');
// localStorage.setItem('notification-level', 'mute');
// console.log(localStorage.getItem('ui-theme')); // "light"
// console.log(localStorage.getItem('sidebar')); // "expanded"
// console.log(localStorage.getItem('notification-level')); // "mute"

// localStorage.clear();
// console.log(localStorage.getItem('ui-theme')); // null
// console.log(localStorage.getItem('sidebar')); // null
// console.log(localStorage.getItem('notification-level')); // null

// !
// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     console.error('Set state error: ', error.message);
//   }
// };

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (error) {
//     console.error('Get state error: ', error.message);
//   }
// };

// export default {
//   save,
//   load,
// };

// !
// [Шпаргалка 1](https://tproger.ru/translations/bash-cheatsheet/)
// [Шпаргалка 2](https://habr.com/ru/company/ruvds/blog/445270/)

// !
// !
// !
// !
// !
// !
