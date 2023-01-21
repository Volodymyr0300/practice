// !
// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// !
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest('Манго', function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest('Полі', function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// !
// // function processCall(recipient) {
// //   // Імітуємо доступність абонента випадковим числом
// //   const isRecipientAvailable = Math.random() > 0.5;

// //   if (!isRecipientAvailable) {
// //     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
// //     // Логіка активації автовідповідача
// //   } else {
// //     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
// //     // Логіка прийняття дзвінка
// //   }
// // }

// // processCall('Манго');

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;
//   console.log(isRecipientAvailable);

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Полі', takeCall, leaveHoloMessage);

// !
// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log('Logging value: ', value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаємо printValue як callback-функцію
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаємо prettyPrint як callback-функцію
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// !
// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// // for (let i = 0; i < numbers.length; i += 1) {
// //   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// // }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// !
// const testArrowFunc = name => {
//   console.log(`Hello ${name}`);
// };

// testArrowFunc('Dave');

// !
// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// !
// const add = (a, b, c) => a + b + c;

// !
// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// !
// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// !
// // Декларативний підхід
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5]

// !
// // Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza,
// // а у змінній pointer було посилання на функцію makePizza.
// function makePizza() {
//   return 'Your pizza is being prepared, please wait.';
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// // Оголошена функція makePizza
// // Оголошена змінна result
// // Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// // Значення змінної result отримане за допомогою виклику функції
// // Оголошена змінна pointer
// // Значення змінної pointer - це посилання на функцію makePizza

// !
// // Доповни функцію makeMessage таким чином,
// // щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик.
// // Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// // Оголошена функція deliverPizza
// // Оголошена функція makePizza
// // Оголошена функція makeMessage
// // Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
// console.log(makeMessage('Royal Grand', makePizza)); // повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage('Ultracheese', deliverPizza)); // повертає рядок "Delivering Ultracheese pizza."

// !
// // Доповни другий виклик функції makePizza(pizzaName, callback),
// // передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName),
// // яка логує рядок "Eating pizza <назва піци>".
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// // Оголошена функція makePizza
// // Функція makePizza приймає два параметри
// // Другим аргументом під час виклику makePizza("Ultracheese") передана функція eatPizza з єдиним параметром pizzaName

// !
// // Необхідно написати логіку обробки замовлення піци.
// // Виконай рефакторинг методу order таким чином,
// // щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// // Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
// // метод order повинен повертати результат виклику колбека onError,
// // передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."

// // Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
// // метод order повинен повертати результат виклику колбека onSuccess,
// // передаючи йому аргументом назву замовленої піци.

// // Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів.
// // Будь ласка, нічого там не міняй.
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     return this.pizzas.includes(pizzaName)
//       ? onSuccess(pizzaName)
//       : onError(
//           `There is no pizza with a name ${pizzaName} in the assortment.`,
//         );
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// // Метод order оголошує три параметри
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// // повертає "Your order is accepted. Cooking pizza Smoked."
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));
// // повертає "Your order is accepted. Cooking pizza Four meats."
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// // повертає "Error! There is no pizza with a name Big Mike in the assortment."
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));
// // повертає "Error! There is no pizza with a name Vienna in the assortment."

// !
// // Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
// // і розраховує загальну суму його елементів,
// // яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// // Виконай рефакторинг функції таким чином,
// // щоб замість циклу for, вона використовувала метод forEach.
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   //   for (let i = 0; i < orderedItems.length; i += 1) {
//   //     totalPrice += orderedItems[i];
//   //   }

//   //   orderedItems.forEach(function (number) {
//   //     totalPrice += number;
//   //   });

//   orderedItems.forEach(number => (totalPrice += number));

//   // Change code above this line
//   return totalPrice;
// }

// // Оголошена функція calculateTotalPrice(orderedItems)
// // Для перебирання масиву orderedItems використаний метод forEach
// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// // Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив,
// // в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

// // Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] > value) {
//   //       filteredNumbers.push(numbers[i]);
//   //     }
//   //   }

//   numbers.forEach(number => {
//     number > value ? filteredNumbers.push(number) : false;
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// // Оголошена функція filterArray(numbers, value)
// // Для перебирання масиву numbers використаний метод forEach
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// // Функція getCommonElements(firstArray, secondArray)
// // приймає два масиви довільної довжини в параметри firstArray і secondArray,
// // і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

// // Виконай рефакторинг функції таким чином, щоб замість циклу for,
// // вона використовувала метод forEach.
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   //   for (let i = 0; i < firstArray.length; i += 1) {
//   //     if (secondArray.includes(firstArray[i])) {
//   //       commonElements.push(firstArray[i]);
//   //     }
//   //   }

//   firstArray.forEach(number => {
//     secondArray.includes(number) ? commonElements.push(number) : false;
//   });

//   return commonElements;
//   // Change code above this line
// }

// // Оголошена функція getCommonElements(firstArray, secondArray)
// // Для перебирання параметра (масиву) використаний метод forEach
// console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // повертає []
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// // Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// };

// // Оголошена змінна calculateTotalPrice
// // Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
// console.log(calculateTotalPrice(5, 100)); // повертає 500
// console.log(calculateTotalPrice(8, 60)); // повертає 480
// console.log(calculateTotalPrice(3, 400)); // повертає 1200
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// // Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line

// // Оголошена змінна calculateTotalPrice
// // Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
// // У функції використане неявне повернення
// console.log(calculateTotalPrice(5, 100)); // повертає 500
// console.log(calculateTotalPrice(8, 60)); // повертає 480
// console.log(calculateTotalPrice(3, 400)); // повертає 1200
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// // Виконай рефакторинг функції calculateTotalPrice(orderedItems),
// // замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію,
// // передану в метод forEach(), на стрілочну функцію.

// // Change code below this line
// // function calculateTotalPrice(orderedItems) {
// //   let totalPrice = 0;

// //   orderedItems.forEach(function (item) {
// //     totalPrice += item;
// //   });

// //   return totalPrice;
// // }

// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// // const calculateTotalPrice = orderedItems => {
// //   let totalPrice = 0;
// //   orderedItems.forEach(item => {
// //     totalPrice += item;
// //   });
// // };
// // Change code above this line

// // Оголошена змінна calculateTotalPrice
// // Змінній calculateTotalPrice присвоєна стрілочна функція з параметром (orderedItems)
// // Для перебирання масиву orderedItems використаний метод forEach
// // Колбек для методу forEach - це стрілочна функція
// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// // Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// // Change code below this line
// // function filterArray(numbers, value) {
// //   const filteredNumbers = [];

// //   numbers.forEach(function (number) {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// };

// // Оголошена змінна filterArray
// // Змінній filterArray присвоєна стрілочна функція з параметрами (numbers, value)
// // Для перебирання масиву numbers використаний метод forEach
// // Колбек для методу forEach - це стрілочна функція
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// // Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.

// // Change code below this line
// // function getCommonElements(firstArray, secondArray) {
// //   const commonElements = [];

// //   firstArray.forEach(function (element) {
// //     if (secondArray.includes(element)) {
// //       commonElements.push(element);
// //     }
// //   });
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// };

// // Оголошена змінна getCommonElements.
// // Змінній getCommonElements присвоєна стрілочна функція з параметрами (firstArray, secondArray)
// // Для перебирання масиву firstArray використаний метод forEach
// // Колбек для методу forEach - це стрілочна функція
// console.log(getCommonElements([1, 2, 3], [2, 4])); // повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // повертає []
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// // const dirtyMultiply = (array, value) => {
// //   for (let i = 0; i < array.length; i += 1) {
// //     array[i] = array[i] * value;
// //   }
// // };

// // const numbers = [1, 2, 3, 4, 5];
// // dirtyMultiply(numbers, 2);
// // // Відбулася мутація вихідних даних - масиву numbers
// // console.log(numbers); // [2, 4, 6, 8, 10]

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// !
// // Функція changeEven(numbers, value) приймає масив чисел numbers
// // і оновлює кожен елемент, значення якого - це парне число,
// // додаючи до нього значення параметра value.

// // Виконай рефакторинг функції таким чином,
// // щоб вона стала чистою - не змінювала масив чисел numbers,
// // а створювала, наповнювала і повертала новий масив з оновленими значеннями.
// function changeEven(numbers, value) {
//   // Change code below this line
//   //   for (let i = 0; i < numbers.length; i += 1) {
//   //     if (numbers[i] % 2 === 0) {
//   //       numbers[i] = numbers[i] + value;
//   //     }
//   //   }

//   const arr = [];
//   numbers.forEach(number => {
//     number % 2 === 0 ? (number = number + value) : false;
//     arr.push(number);
//   });
//   return arr;
//   // Change code above this line
// }

// // Оголошена функція changeEven(numbers, value)
// // Функція changeEven не змінює значення параметра numbers
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// // повертає новий масив [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// // повертає новий масив [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// // повертає новий масив [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// // повертає новий масив [144, 13, 81, 192, 136, 154]
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// const planets = ['Земля', 'Марс', 'Венера', 'Юпітер'];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпітер']

// // Оригінальний масив не змінився
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпітер']

// !
// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = numbers.map(number => number * 2);
// console.log(numbers);
// console.log(newNumbers);

// !
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']

// !
// // Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет.
// // Обов'язково використовуй метод map().

// const planets = ['Earth', 'Mars', 'Venus', 'Jupiter'];
// // Change code below this line
// const planetsLengths = planets.map(item => item.length);
// console.log(planetsLengths);

// // Оголошена змінна planets
// // Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// // Оголошена змінна planetsLengths
// // Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// // Для перебирання масиву планет використаний метод map()

// !
// // Використовуючи метод map(), зроби так,
// // щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line
// const titles = books.map(book => book.title);
// console.log(titles);
// const authors = books.map(author => author.author);
// console.log(authors);
// const ratings = books.map(raiting => raiting.rating);
// console.log(ratings);

// // Оголошена змінна books
// // Значення змінної books - це масив
// // Оголошена змінна titles
// // Значення змінної titles - це масив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// // Для перебирання масиву books використовується метод map() як чиста функція

// !
// const students = [
//   { name: 'Манго', courses: ['математика', 'фізика'] },
//   { name: 'Полі', courses: ['інформатика', 'математика'] },
//   { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

// students.map(student => student.courses);
// // [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

// students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];

// !
// // Використовуючи метод flatMap(), зроби так,
// // щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism'],
//   },
// ];
// // Change code below this line

// const genders = books.flatMap(item => item.genres);
// console.log(genders);

// // Оголошена змінна books
// // Значення змінної books - це масив об'єктів
// // Оголошена змінна genres
// // Значення змінної genres - це масив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// // Для перебирання масиву books використовується метод flatMap()

// !
// // Доповни функцію getUserNames(users) таким чином,
// // щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users.

// // Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];

// // Change code below this line
// const getUserNames = users => {
//   return users.map(item => item.name);

//   //   users.forEach(element => {
//   //     console.log(element);
//   //   });
//   //   return users.map(item => item.name);
// };
// // const names = users.map(item => item.name);
// // console.log(names);
// console.log(getUserNames(users));

// // Change code above this line

// // Оголошена змінна getUserNames
// // Змінній getUserNames присвоєна стрілочна функція з параметром (users).
// // Для перебирання параметра users використовується метод map()
// // Виклик функції із зазначеним масивом користувачів повертає масив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// // Доповни функцію getUserEmails(users) таким чином,
// // щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.

// // Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// // Change code below this line
// const getUserEmails = users => {
//   return users.map(item => item.email);
// };
// // Change code above this line

// // Оголошена змінна getUserNames
// // Змінній getUserNames присвоєна стрілочна функція з параметром (users)
// // Для перебирання параметра users використовується метод map()
// // Виклик функції із зазначеним масивом користувачів повертає масив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]

// !
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Манго і Ківі

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Аякс

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE,
// );
// console.log(average); // Масив об'єктів з іменами Полі і Х'юстон

// ! 19
// // Доповни код таким чином,
// // щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers,
// // а в змінній oddNumbers - масив непарних. Обов'язково використовуй метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(item => item % 2 === 0);
// console.log(evenNumbers);

// const oddNumbers = numbers.filter(item => item % 2 !== 0);
// console.log(oddNumbers);

// // Оголошена змінна numbers
// // Значення змінної numbers - це масив [17, 24, 82, 61, 36, 18, 47, 52, 73]
// // Оголошена змінна evenNumbers
// // Значення змінної evenNumbers - це масив [24, 82, 36, 18, 52]
// // Оголошена змінна oddNumbers
// // Значення змінної oddNumbers - це масив [17, 61, 47, 73]
// // Для перебирання масиву numbers використаний метод filter()

// ! 20
// // Доповни код таким чином,
// // щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books,
// // а у змінній uniqueGenres - масив унікальних жанрів, без повторень.

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line

// const allGenres = books.flatMap(item => item.genres);
// console.log(allGenres);

// const uniqueGenres = allGenres.filter(
//   (unique, index, allGenres) => allGenres.indexOf(unique) === index,
// );
// console.log(uniqueGenres);

// // Оголошена змінна books
// // Значення змінної books - це масив об'єктів
// // Оголошена змінна allGenres
// // Значення змінної allGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// // Оголошена змінна uniqueGenres
// // Значення змінної uniqueGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror"]
// // Для обчислення значення змінної allGenders використаний метод flatMap()
// // Для обчислення значення змінної uniqueGenres використаний метод filter()

// ! 21
// Використовуючи метод filter(), доповни код таким чином, щоб:
// У змінній topRatedBooks утворився масив книг,
// рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг,
// написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
  { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Bernard Cornwell';
// Change code below this line

const topRatedBooks = books.filter(item => item.rating >= MIN_RATING);
//   console.log(item.rating >= MIN_RATING),

console.log(topRatedBooks);

const booksByAuthor = books.filter(
  (item, index, books) => books.indexOf(item) === index,
);
console.log(booksByAuthor);

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна MIN_RATING
// Значення змінної MIN_RATING - це число 8
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Bernard Cornwell"
// Оголошена змінна topRatedBooks
// Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
// Оголошена змінна booksByAuthor
// Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"
// Для перебирання масиву books використаний метод filter()

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
