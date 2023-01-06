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

// function checkStorage(available, ordered) {
//   // Change code below this line
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
//   // Change code above this line
// }

// // Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".
// // ТЕСТИ
// // Оголошена змінна fruits
// // Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const firstElement = fruits[0];
// console.log(firstElement);
// const secondElement = fruits[2];
// console.log(secondElement);
// const lastElement = fruits[fruits.length - 1];
// console.log(lastElement);
// // Change code below this line

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';
// fruits.length;

// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини.
// Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.
// function getExtremeElements(array) {
//   const arr1 = array.slice(0, 1);
//   const arr2 = array.slice(array.length - 1);
//   const arr = arr1.concat(arr2);
//   return arr;
// }
// console.log(getExtremeElements(fruits));
// console.log(getExtremeElements([1, 2, 3, 4, 5])); /* повертає [1, 5] */
// console.log(
//   getExtremeElements(['Earth', 'Mars', 'Venus']),
// ); /*  повертає ["Earth", "Venus"] */
// console.log(
//   getExtremeElements(['apple', 'peach', 'pear', 'banana']),
// ); /*  повертає ["apple", "banana"] */

// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу
// рядка message за роздільником delimiter - масив рядків.
// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }
// console.log(
//   splitMessage('Mango hurries to the train', ' '),
// ); /* повертає ["Mango", "hurries", "to", "the", "train"] */
// console.log(splitMessage('Mango', '')); /* повертає ["M", "a", "n", "g", "o"] */
// console.log(
//   splitMessage('best_for_week', '_'),
// ); /* повертає ["best", "for", "week"] */

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
// залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord).
// Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message)
// та ціну гравірування одного слова (параметр pricePerWord).
// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let sum = message.split(' ').length * pricePerWord;
//   return sum;
//   // Change code above this line
// }
// console.log(
//   calculateEngravingPrice('JavaScript is in my blood', 10),
// ); /* повертає 50 */
// console.log(
//   calculateEngravingPrice('JavaScript is in my blood', 20),
// ); /* повертає 100 */
// console.log(
//   calculateEngravingPrice('Web-development is creative work', 40),
// ); /* повертає 160 */
// console.log(
//   calculateEngravingPrice('Web-development is creative work', 20),
// ); /* повертає 80 */

// // Доповни код функції makeStringFromArray(array, delimiter) таким чином,
// // щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.
// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimiter);
//   // Change code above this line
//   return string;
// }
// console.log(
//   makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '),
// ); /* повертає "Mango hurries to the train" */
// console.log(
//   makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''),
// ); /* повертає "Mango" */
// console.log(
//   makeStringFromArray(['top', 'picks', 'for', 'you'], '_'),
// ); /* повертає "top_picks_for_you" */

// Термін slug - це людино-зрозумілий унікальний ідентифікатор,
// який використовується у веб-розробці для створення читабельних URL-адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx,
// можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.
// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.
// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире
// ! 1. перевести в нижній регістр
// ! 2. перевести в масив
// ! 3. виявити пробіли
// ! 4. замінити пробіли на тире
// let string = 'Hello world';
// console.log(string);
// function slugify(title) {
//   let arr = title.toLowerCase().split('');
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === ' ') {
//       arr[i] = '-';
//     } else {
//       continue;
//     }
//   }
//   arr = arr.join('');
//   return arr;
//   //   // Change code above this line
// }
// console.log(
//   slugify('Arrays for begginers'),
// ); /* повертає "arrays-for-begginers" */
// console.log(
//   slugify('English for developer'),
// ); /* повертає "english-for-developer" */
// console.log(
//   slugify('Ten secrets of JavaScript'),
// ); /* повертає "ten-secrets-of-javascript" */

// // Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.
// // firstTwoEls - масив із перших двох елементів
// // nonExtremeEls - масив з усіх елементів, крім першого та останнього
// // lastThreeEls - масив із трьох останніх елементів
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);
// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);
// const lastThreeEls = fruits.slice(2);
// console.log(lastThreeEls);
// // Оголошена змінна fruits
// // Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
// // Оголошена змінна firstTwoEls
// // Значення змінної firstTwoEls - це масив ["apple", "plum"]
// // Оголошена змінна nonExtremeEls
// // Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
// // Оголошена змінна lastThreeEls
// // Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]
// // Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами

// // Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients); // Change this line
// // Оголошена змінна oldClients
// // Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
// // Оголошена змінна newClients
// // Значення змінної newClients - це масив ["Peach", "Houston"]
// // Оголошена змінна allClients
// // Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// // Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

// // Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву
// // з усіма елементами двох вихідних firstArray і secondArray.
// // Параметр maxLength містить максимально допустиму довжину нового масиву.
// // Якщо кількість елементів нового масиву більша за maxLength,
// // функція повинна повернути копію масиву довжиною maxLength елементів.
// // В іншому випадку функція повинна повернути новий масив повністю.
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   let arr = firstArray.concat(secondArray);
//   if (arr.length > maxLength) {
//     return arr.slice(0, maxLength);
//   }
//   return arr;
//   // Change code above this line
// }
// console.log(
//   makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3),
// ); /* повертає ["Mango", "Poly", "Ajax"] */
// console.log(
//   makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4),
// ); /* повертає ["Mango", "Poly", "Houston", "Ajax"] */
// console.log(
//   makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3),
// ); /* повертає ["Mango", "Ajax", "Chelsea"] */
// console.log(
//   makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2),
// ); /* повертає ["Earth", "Jupiter"] */
// console.log(
//   makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4),
// ); /* повертає ["Earth", "Jupiter", "Neptune", "Uranus"] */
// console.log(
//   makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0),
// ); /* повертає [] */
// // Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

// // Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }
// // Оголошена змінна start
// // Значення змінної start - це число 3
// // Оголошена змінна end
// // Значення змінної end - це число 7
// // Оголошена змінна i - лічильник циклу
// // Початкове значення змінної i дорівнює 3
// // Умова циклу приводиться до true доти, доки i менше або дорівнює 7
// // На кожній ітерації значення змінної i збільшується на одиницю
// // Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

// // Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number)
// // і повертає суму всіх цілих чисел від одиниці і до цього числа.
// // Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.
// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
//   // Change code above this line
// }
// // Оголошена функція calculateTotal(number)
// // Виклик функції calculateTotal(1) повертає 1
// // Виклик функції calculateTotal(3) повертає 6
// // Виклик функції calculateTotal(7) повертає 28
// // Виклик функції calculateTotal(18) повертає 171
// // Виклик функції calculateTotal(24) повертає 300
// // Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// // Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
// // Оголошена змінна fruits
// // Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
// // Оголошена змінна i - лічильник циклу
// // Початкове значення змінної i дорівнює 0
// // Умова циклу приводиться до true доти, доки i менше за 4
// // На кожній ітерації значення змінної i збільшується на одиницю
// // В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
// // В тілі циклу for використовується виведення у консоль змінної fruit

// // Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел,
// // і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total,
// // яка повертається як результат роботи функції.
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); /* повертає 138 */
// console.log(calculateTotalPrice([164, 48, 291])); /* повертає 503 */
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); /* повертає 1116 */
// // calculateTotalPrice() з випадковим масивом повертає правильне значення

// // Напиши функцію findLongestWord(string), яка приймає довільний рядок,
// // що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.
// function findLongestWord(string) {
//   // Change code below this line
//   let arr = string.split(' ');
//   let maxLetter = '';
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i].length > maxLetter.length) {
//       maxLetter = arr[i];
//     }
//   }
//   return maxLetter;
//   // Change code above this line
// }
// // Оголошена функція findLongestWord(string)
// console.log(
//   findLongestWord('The quick brown fox jumped over the lazy dog'),
// ); /* повертає jumped */
// console.log(findLongestWord('Google do a roll')); /* повертає Google */
// console.log(findLongestWord('May the force be with you')); /* повертає force */
// // // Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// // Доповни код функції createArrayOfNumbers(min, max) таким чином,
// // щоб вона повертала масив усіх цілих чисел від значення min до max.
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers = numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// // Оголошена функція createArrayOfNumbers(min, max)
// console.log(createArrayOfNumbers(1, 3)); /* повертає [1, 2, 3] */
// // console.log(createArrayOfNumbers(14, 17)); /* повертає [14, 15, 16, 17] */
// // console.log(
// //   createArrayOfNumbers(29, 34),
// // ); /* повертає [29, 30, 31, 32, 33, 34] */
// // Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// // В циклі for використовувався метод push
