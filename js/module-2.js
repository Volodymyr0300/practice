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
