// const clients = ['Molly', 'Sally', 'Denny'];
// console.log(clients);
// // console.log(clients[0]);
// // console.log(clients[1]);
// // console.log(clients[2]);
// clients[0] = 'Dolly';
// clients[2] = 'Molly';
// console.log(clients);
// // console.log(clients[0]);
// // console.log(clients[1]);
// // console.log(clients[2]);
// console.log(clients.length);
// console.log(clients.length - 1);
// const lastMassiveElement = clients.length - 1;
// console.log(clients[lastMassiveElement]);
// console.log(clients);
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients2 = ['Molly', 'Sally', 'Denny'];
// for (const client of clients2) {
//   console.log(client);
// }

// const string = 'javascript';
// for (const charaster of string) {
//   console.log(charaster);
// }

// const clients2 = ['Molly', 'Sally', 'Denny'];
// const clientNameToFind = 'Denny';
// let message;
// for (const client of clients2) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }
// console.log(message);

// const name = 'Mango';
// console.log();

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.
// function areYouPlayingBanjo(name) {
//   // Implement me
//   if (name[0] === 'r' || name[0] === 'R') {
//     name = `${name} plays banjo`;
//   } else {
//     name = `${name} does not play banjo`;
//   }
//   return name;
// }
// console.log(areYouPlayingBanjo('rolly'));

// const name = 'Mango';
// console.log(name.split('')); // ["M", "a", "n", "g", "o"]
// console.log(typeof name.split(''));
// console.log(typeof name);

// const message = 'JavaScript - це цікаво';
// console.log(message.split(' ')); // ["JavaScript", "-", "це", "цікаво"]
// console.log(typeof message.split(''));
// console.log(typeof message);

// const words = ['JavaScript', 'це', 'цікаво'];
// console.log(words.join('')); // "JavaScriptцецікаво"
// console.log(words.join(' ')); // "JavaScript це цікаво"
// console.log(words.join('-')); // "JavaScript-це-цікаво"

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false

// // Виносимо варіанти в масив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';
// // Перевіряємо присутність елемента
// const hasFruit = redFruits.includes(fruit);
// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// const scores = [1, 2, 3, 4, 5];
// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
// const deletedScores = scores.splice(0, 3);
// // Тепер масив scores містить два елементи
// console.log(scores); // [4, 5]
// // А масив deletedScores містить три видалені елементи
// console.log(deletedScores); // [1, 2, 3]

// const colors = ['red', 'green', 'blue'];
// colors.splice(2, 0, 'purple');
// console.log(colors); // ["red", "green", "purple", "blue"]

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.length);
// numbers.splice(numbers.length, 0, 10, 11, 12, 13, 14, 15);
// console.log(numbers);

// const languages = ["C", "C++", "Java", "JavaScript"];
// // Заміняємо елемент з індексом 1 на новий
// languages.splice(1, 1, "Python");
// console.log(languages); // ["C", "Python", "Java", "JavaScript"]
// // Заміняємо один елемент (з індексом 2) на декілька
// languages.splice(2, 1, "C#", "Swift", "Go");
// console.log(languages); // ["C", "Python", "C#", "Swift", "Go", "JavaScript"]

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Monkong', 'Singu'];
// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]
// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]
// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);
// console.table(numbers);

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// function sum(elemensts) {
//   let total = 0;
//   for (const num of elemensts) {
//     total += num;
//   }
//   return total;
// }
// console.log(sum(arr));

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = 0;
// for (let i = 0; i < arr.length; i += 1) {
//   total += arr[i];
// }
// console.log('Total: ', total);

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = 0;
// for (const item of arr) {
//   total += arr[item];
// }
// console.log('Total: ', total);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;
// for (const item of numbers) {
//   if (item % 2 === 0) {
//     total += item;
//     continue;
//   }
// }
// console.log(total);

// const logins = ['dafq2f32', '3e23f2fo2', '23e232dsvs', '1313fnkfnd'];
// const loginToFind = '23e232dsvs';
// const loginIs = 'Login is finded';
// const loginIsNT = "login is't finded";
// !!! 1 variant
// for (let i = 0; i < logins.length; i += 1) {
//   if (logins[i] === loginToFind) {
//     console.log('Login is finded!');
//     break;
//   }
//   console.log("login is't finded");
// }
// !!! 2 variant
// for (const login of logins) {
//   if (logins[login] === loginToFind) {
//     console.log('Login is finded!');
//     break;
//   }
// }
// !!! 3 variant
// console.log(logins.includes(loginToFind));
// !!! 4 variant
// let message = logins.includes(loginToFind)
//   ? console.log(loginIs)
//   : console.log(loginIsNT);

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let maxNum = 0;
// ! 1 variant
// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < maxNum) {
//     continue;
//   } else {
//     maxNum = numbers[i];
//   }
// }
// console.log(maxNum);
// ! 2 variant
// for (let i = 0; i < numbers.length; i += 1) {
//   maxNum = numbers[i] > maxNum ? numbers[i] : maxNum;
// }
// console.log(maxNum);
// ! 3 variant
// for (const number of numbers) {
//   console.log(number);
//   if (maxNum < number) {
//     maxNum = number;
//   }
// }
// console.log(maxNum);

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// ! 1 variant
// let string = '';
// for (const i of friends) {
//   string += i + ',';
// }
// console.log(string.slice(0, string.length - 1));
// ! 2 variant
// const string = friends.join(', ');
// console.log(string);

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';
// ! 1 variant
// for (const letter of letters) {
//   if (letter === letter.toLowerCase()) {
//     invertedString += letter.toUpperCase();
//   } else {
//     invertedString += letter.toLowerCase();
//   }
// }
// console.log(invertedString);
// ! 2 variant
// for (const letter of letters) {
//   invertedString =
//     letter === letter.toLowerCase()
//       ? (invertedString += letter.toUpperCase())
//       : (invertedString += letter.toLowerCase());
// }
// console.log(invertedString);
// ! 3 version
// for (const letter of letters) {
//   invertedString +=
//     letter === letter.toLowerCase()
//       ? letter.toUpperCase()
//       : letter.toLowerCase();
// }
// console.log(invertedString);

// ! 1 version
// const title = 'Top ten benefits for React framework';
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);
// const words = normalizedTitle.split(' ');
// console.log(words);
// const slug = words.join('-');
// console.log(slug);
// ! 2 version
// const title = 'Top ten benefits for React framework';
// console.log(title);
// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

// const arr1 = [5, 10, 15, 20];
// const arr2 = [10, 20, 30];
// const newArr = arr1.concat(arr2);
// let sum = 0;
// console.log(newArr);
// ! 1 version
// for (let i = 0; i < newArr.length; i += 1) {
//   sum += newArr[i];
// }
// console.log(sum);
// ! 2 version
// for (const item of newArr) {
//   sum += item;
// }
// console.log(sum);

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];
// console.table(cards);
// // ! toRemove
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1);
// console.table(cards);
// // !tToInsert
// const cardToInsert = 'Карточка-3';
// // cards.push(cardToInsert);
// cards.splice(2, 0, cardToInsert);
// console.table(cards);
// // ! toUpdate
// const cardToUpdate = 'Карточка-6';
// cards.splice(4, 1, cardToUpdate);
// console.table(cards);

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return 'You are an adult';
//   }
//   return 'You are a minor';
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
//   // Change code above this line
// }
// console.log(checkPassword('jqueryismyjam'));

function checkStorage(available, ordered) {
  // Change code below this line
  if (ordered === 0) {
    return 'Your order is empty!';
  } else if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  } else {
    return 'The order is accepted, our manager will contact you';
  }
  // Change code above this line
}
