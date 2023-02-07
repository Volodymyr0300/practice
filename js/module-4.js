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

// ! 13
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
//   //   numbers.forEach(number => {
//   //     if (number % 2 === 0) {
//   //       arr.push(number + value);
//   //     } else {
//   //       arr.push(number);
//   //     }
//   //   });
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
// // Використовуючи метод filter(), доповни код таким чином, щоб:
// // У змінній topRatedBooks утворився масив книг,
// // рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// // У змінній booksByAuthor утворився масив книг,
// // написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

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

// const MIN_RATING = 8;
// const AUTHOR = 'Bernard Cornwell';
// // Change code below this line

// // const topRatedBooks = books
// //   .map(book => (book.rating >= MIN_RATING ? book.rating : false))
// //   .filter(item => item > 0);
// // console.log(topRatedBooks);

// // const topRatedBooks = books
// //   .map(book => (book.rating >= MIN_RATING ? book.rating : false))
// //   .filter(item => item > 0);
// // console.log(topRatedBooks);

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// //   console.log(book);
// //   if (book.rating >= MIN_RATING) {
// //     book.rating;
// //   }
// //   book.rating >= MIN_RATING;

// console.log(topRatedBooks);

// // const booksByAuthor = books
// //   .map(book => (book.author === AUTHOR ? book.title : false))
// //   .filter(item => item);
// // console.log(booksByAuthor);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(booksByAuthor);

// // Оголошена змінна books
// // Значення змінної books - це масив об'єктів
// // Оголошена змінна MIN_RATING
// // Значення змінної MIN_RATING - це число 8
// // Оголошена змінна AUTHOR
// // Значення змінної AUTHOR - це рядок "Bernard Cornwell"
// // Оголошена змінна topRatedBooks
// // Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
// // Оголошена змінна booksByAuthor
// // Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"
// // Для перебирання масиву books використаний метод filter()

// ! 22
// // Доповни функцію getUsersWithEyeColor(users, color) таким чином,
// // щоб вона повертала масив користувачів,
// // у яких колір очей (властивість eyeColor) збігається зі значенням параметра color.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor === color);
// };

// // Change code above this line

// console.log(getUsersWithEyeColor(users, 'blue'));
// // функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
// console.log(getUsersWithEyeColor(users, 'green'));
// // функція повертає масив об'єктів користувачів з іменами Ross Vazquez і Elma Head
// console.log(getUsersWithEyeColor(users, 'brown'));
// // функція повертає масив об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony
// console.log(getUsersWithEyeColor(users, 'qwerty'));
// // функція повертає порожній масив

// // Оголошена змінна getUsersWithEyeColor
// // Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами (users, color)
// // Для перебирання параметра users використовується метод filter()
// // Якщо значення параметра color - це "blue",
// // функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
// // Якщо значення параметра color - це "green",
// // функція повертає масив об'єктів користувачів з іменами Ross Vazquez і Elma Head
// // Якщо значення параметра color - це "brown",
// // функція повертає масив об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony
// // Якщо значення параметра color - це будь-який інший рядок, функція повертає порожній масив
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ! 23
// // Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином,
// // щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
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
//     gender: 'female',
//     age: 39,
//   },
// ];
// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(user => user.age > minAge && user.age < maxAge);
// };
// // Change code above this line

// // Оголошена змінна getUsersWithAge
// // Змінній getUsersWithAge присвоєна стрілочна функція з параметрами (users, minAge, maxAge)
// // Для перебирання параметра users використовується метод filter()
// // Якщо значення параметрів minAge і maxAge дорівнюють 20 і 30 відповідно,
// console.log(getUsersWithAge(users, 20, 30));
// // функція повертає масив об'єктів користувачів з іменами Ross Vazquez, Elma Head і Carey Barr
// // Якщо значення параметрів minAge і maxAge дорівнюють 30 і 40 відповідно,
// console.log(getUsersWithAge(users, 30, 40));
// // функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// // Якщо значення параметрів minAge і maxAge дорівнюють 80 і 100 відповідно,
// console.log(getUsersWithAge(users, 80, 100));
// // функція повертає порожній масив
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ! 24
// // Доповни функцію getUsersWithFriend(users, friendName) таким чином,
// // щоб вона повертала масив користувачів, у яких є один з ім'ям в параметрі friendName.
// // Масив друзів користувача зберігається у властивості friends.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
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
//     gender: 'female',
//     age: 39,
//   },
// ];
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };
// // Change code above this line

// // Оголошена змінна getUsersWithFriend
// // Змінній getUsersWithFriend присвоєна стрілочна функція з параметрами (users, friendName)
// // Для перебирання параметра users використовується метод filter()
// // Якщо значення параметра friendName - це рядок "Briana Decker",
// console.log(getUsersWithFriend(users, 'Briana Decker'));
// // функція повертає масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony
// // Якщо значення параметра friendName - це рядок "Goldie Gentry",
// console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// // функція повертає масив об'єктів користувачів з іменами Elma Head і Sheree Anthony
// // Якщо значення параметра friendName - це рядок "Adrian Cross",
// console.log(getUsersWithFriend(users, 'Adrian Cross'));
// // функція повертає порожній масив
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// //  Напишіть програму, яка отримає від користувача число(кількість хвилин)
// // і виведе у консоль рядок у форматі годин та хвилин
// // 70 === 01: 10
// const globalMinutes = 220;

// const hours = Math.floor(globalMinutes / 60);
// console.log(hours);
// const modifiedHours = String(hours).padStart(2, 0);
// console.log(modifiedHours);
// const minutes = String(globalMinutes % 60).padStart(2, 0);
// console.log(minutes);
// console.log(`${modifiedHours}: ${minutes}`);

// ! 25
// // Доповни функцію getFriends(users) таким чином,
// // щоб вона повертала масив друзів всіх користувачів (властивість friends).
// // У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
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
//     gender: 'female',
//     age: 39,
//   },
// ];

// // Change code below this line
// const getFriends = users => {
//   const newArray = users.flatMap(user => user.friends);
//   console.log(newArray);
//   const filteredArray = [];
//   for (const item of newArray) {
//     // console.log(item);
//     if (!filteredArray.includes(item)) {
//       filteredArray.push(item);
//     }
//   }
//   console.log(filteredArray);
//   return filteredArray;
// };
// // Change code above this line

// // Оголошена змінна getFriends
// // Змінній getFriends присвоєна стрілочна функція з параметром (users)
// console.log(getFriends(users));
// // Виклик функції із зазначеним масивом користувачів повертає масив
// // ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner",
// // "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// const students = [
//   { name: 'Манго', courses: ['математика', 'фізика'] },
//   { name: 'Полі', courses: ['інформатика', 'математика'] },
//   { name: 'Ківі', courses: ['фізика', 'біологія'] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
// console.log(allCourses);

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index,
// );
// console.log(uniqueCourses);

// ! 26
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
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
//     gender: 'female',
//     age: 39,
//   },
// ];
// // Доповни функцію getActiveUsers(users) таким чином,
// // щоб вона повертала масив активних користувачів, значення властивості isActive яких - true.

// // Change code below this line
// const getActiveUsers = users => {
//   return users.filter(user => user.isActive === true);
// };
// // Change code above this line

// // Оголошена змінна getActiveUsers Змінній getActiveUsers присвоєна стрілочна функція з параметром users
// // Для перебирання параметра users використовується метод filter()
// // Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами
// // Sharlene Bush, Elma Head, Carey Barr і Sheree Anthony
// console.log(getActiveUsers(users));
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ! 27
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
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
//     gender: 'female',
//     age: 39,
//   },
// ];

// // Доповни функцію getInactiveUsers(users) таким чином,
// // щоб вона повертала масив неактивних користувачів, значення властивості isActive яких - false.

// // Change code below this line
// const getInactiveUsers = users => {
//   return users.filter(user => user.isActive === false);
// };
// // Change code above this line

// // Оголошена змінна getInactiveUsers.
// // Змінній getInactiveUsers присвоєна стрілочна функція з параметром users
// // Для перебирання параметра users використовується метод filter()
// // Виклик функції із зазначеним масивом користувачів
// // повертає масив об'єктів користувачів з іменами
// // Moore Hensley, Ross Vazquez і Blackburn Dotson
// console.log(getInactiveUsers(users));
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(colorPickerOptions.find(option => option.label === 'blue')); // { label: 'blue', color: '#2196F3' }
// console.log(colorPickerOptions.find(option => option.label === 'pink')); // { label: 'pink', color: '#E91E63' }
// console.log(colorPickerOptions.find(option => option.label === 'white'));
// // undefined

// ! 28
// // Використовуючи метод find(), доповни код таким чином, щоб:

// // У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// // У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.

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
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(item => item.title === BOOK_TITLE);
// console.log(bookWithTitle);

// const bookByAuthor = books.find(item => item.author === AUTHOR);
// console.log(bookByAuthor);

// // Оголошена змінна books
// // Значення змінної books - це масив
// // Оголошена змінна BOOK_TITLE
// // Значення змінної BOOK_TITLE - це рядок "The Dream of a Ridiculous Man"
// // Оголошена змінна AUTHOR
// // Значення змінної AUTHOR - це рядок "Robert Sheckley"
// // Оголошена змінна bookWithTitle
// // Значення змінної bookWithTitle - це об'єкт книги з назвою вище "The Dream of a Ridiculous Man"
// // Оголошена змінна bookByAuthor
// // Значення змінної bookByAuthor - це об'єкт книги автора "Robert Sheckley"
// // Для перебирання масиву books використаний метод find()

// ! 29
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Доповни функцію getUserWithEmail(users, email) таким чином,
// // щоб вона повертала об'єкт користувача,
// // пошта якого (властивість email) збігається зі значенням параметра email.

// // Change code below this line
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };
// // Change code above this line

// // Оголошена функція getUserWithEmail(users, email)
// // Для перебирання параметра users використовується метод find()
// // Якщо значення параметра email - це "shereeanthony@kog.com",
// // функція повертає об'єкт користувача з ім'ям Sheree Anthony
// console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// // Якщо значення параметра email - це "elmahead@omatom.com",
// // функція повертає об'єкт користувача з ім'ям Elma Head
// console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// // Якщо значення параметра email - це "blackburndotson@furnigeer.com",
// // функція повертає об'єкт користувача з ім'ям Blackburn Dotson
// console.log(getUserWithEmail(users, 'blackburndotson@furnigeer.com'));
// // Якщо в масиві users відсутній користувач з поштою із параметра email, функція повертає undefined
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

// console.log(colorPickerOptions.findIndex(option => option.label === 'blue')); // 2
// console.log(colorPickerOptions.findIndex(option => option.label === 'pink')); // 3
// console.log(colorPickerOptions.findIndex(option => option.label === 'white')); // -1

// ! Метод every()
// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every(value => value >= 0); // true
// console.log([1, 2, 3, 4, 5].every(value => value >= 0));

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every(value => value >= 0); // false
// console.log([1, 2, 3, -10, 4, 5].every(value => value >= 0));

// ! Метод some()
// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true
// console.log([1, 2, 3, 4, 5].some(value => value >= 0));

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true
// console.log([-7, -20, 3, -10, -14].some(value => value >= 0));

// // Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false
// console.log([1, 2, 3, 4, 5].some(value => value < 0));

// // Чи є хоча б один елемент, що менший нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true
// console.log([1, 2, 3, -10, 4, 5].some(value => value < 0));

// !
// const fruits = [
//   { name: 'apples', amount: 100 },
//   { name: 'bananas', amount: 0 },
//   { name: 'grapes', amount: 50 },
// ];

// // every поверне true тільки, якщо усіх фруктів буде більше 0 штук
// const allAvailable = fruits.every(fruit => fruit.amount > 0); // false
// console.log(allAvailable);

// // some поверне true, якщо хоча б одного фрукту буде більше 0 штук
// const anyAvailable = fruits.some(fruits => fruits.amount > 0); // true
// console.log(anyAvailable);

// ! 30
// // Використовуючи метод every(), доповни код таким чином, щоб:

// // У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// // У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// // У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// // У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// // У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// // У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(item => item % 2 === 0);
// console.log(eachElementInFirstIsEven);

// const eachElementInFirstIsOdd = firstArray.every(item => item % 2 !== 0);
// console.log(eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every(item => item % 2 === 0);
// console.log(eachElementInSecondIsEven);

// const eachElementInSecondIsOdd = secondArray.every(item => item % 2 !== 0);
// console.log(eachElementInSecondIsOdd);

// const eachElementInThirdIsEven = thirdArray.every(item => item % 2 === 0);
// console.log(eachElementInThirdIsEven);

// const eachElementInThirdIsOdd = thirdArray.every(item => item % 2 !== 0);
// console.log(eachElementInThirdIsOdd);

// // Оголошена змінна firstArray
// // Значення змінної firstArray - це масив [26, 94, 36, 18]
// // Оголошена змінна secondArray
// // Значення змінної secondArray - це масив [17, 61, 23]
// // Оголошена змінна thirdArray
// // Значення змінної thirdArray - це масив [17, 26, 94, 61, 36, 23, 18]
// // Оголошена змінна eachElementInFirstIsEven
// // Значення змінної eachElementInFirstIsEven - це буль true
// // Оголошена змінна eachElementInFirstIsOdd
// // Значення змінної eachElementInFirstIsOdd - це буль false
// // Оголошена змінна eachElementInSecondIsEven
// // Значення змінної eachElementInSecondIsEven - це буль false
// // Оголошена змінна eachElementInSecondIsOdd
// // Значення змінної eachElementInSecondIsOdd - це буль true
// // Оголошена змінна eachElementInThirdIsEven
// // Значення змінної eachElementInThirdIsEven - це буль false
// // Оголошена змінна eachElementInThirdIsOdd
// // Значення змінної eachElementInThirdIsOdd - це буль false
// // Для перебирання масивів використаний метод every()

// ! 31
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];

// // Доповни функцію isEveryUserActive(users) таким чином,
// // щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false.

// // Change code below this line
// const isEveryUserActive = users => {
//   return users.every(item => item.isActive === true);
// };
// // Change code above this line

// // Оголошена змінна isEveryUserActive
// // Змінній isEveryUserActive присвоєна стрілочна функція з параметром (users)
// // Для перебирання параметра users використовується метод every()
// // Виклик функції із зазначеним масивом користувачів повертає false
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ! 32
// // Використовуючи метод some(), доповни код таким чином, щоб:

// // У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// // У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
// // У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// // У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
// // У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
// // У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(item => item % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(item => item % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(item => item % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(item => item % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(item => item % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(item => item % 2 !== 0);

// // Оголошена змінна firstArray
// // Значення змінної firstArray - це масив [26, 94, 36, 18]
// // Оголошена змінна secondArray
// // Значення змінної secondArray - це масив [17, 61, 23]
// // Оголошена змінна thirdArray
// // Значення змінної thirdArray - це масив [17, 26, 94, 61, 36, 23, 18]
// // Оголошена змінна anyElementInFirstIsEven
// // Значення змінної anyElementInFirstIsEven - це буль true
// // Оголошена змінна anyElementInFirstIsOdd
// // Значення змінної anyElementInFirstIsOdd - це буль false
// // Оголошена змінна anyElementInSecondIsEven
// // Значення змінної anyElementInSecondIsEven - це буль false
// // Оголошена змінна anyElementInSecondIsOdd
// // Значення змінної anyElementInSecondIsOdd - це буль true
// // Оголошена змінна anyElementInThirdIsEven
// // Значення змінної anyElementInThirdIsEven - це буль true
// // Оголошена змінна anyElementInThirdIsOdd
// // Значення змінної anyElementInThirdIsOdd - це буль true
// // Для перебирання масивів використаний метод some()

// ! 33
// // Доповни функцію isAnyUserActive(users) таким чином,
// // щоб вона перевіряла наявність активних користувачів (властивість isActive) і повертала true або false.

// // Change code below this line
// const isAnyUserActive = users => {
//   return users.some(item => item.isActive);
// };
// // Change code above this line

// // Оголошена функція isAnyUserActive(users)
// // Для перебирання параметра users використовується метод some()
// // Виклик функції із зазначеним масивом користувачів повертає true
// console.log(isAnyUserActive(users));

// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ! Метод reduce()
// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   //   console.log(number);
//   //   console.log(previousValue);
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// ! Метод reduce()
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
//   { name: "Х'юстон", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

// ! Метод reduce()
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості likes
// // до акумулятора, початкове значення якого вкажемо 0.
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

// console.log(likes); // 32

// // Мабуть, підрахунок лайків - не одиночна операція, тому напишемо функцію
// // для підрахунку лайків з колекції
// const countLikes = tweets => {
//   return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
// };

// console.log(countLikes(tweets)); // 32

// ! Метод reduce()
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// // Пройдемо по всіх елементах колекції і додамо значення властивості tags
// // до акумулятора, початкове значення якого вкажемо порожнім масивом [].
// // На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
// const tags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);

//   return allTags;
// }, []);

// console.log(tags);

// // Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
// // для збирання тегів з колекції
// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// console.log(getTags(tweets));

// ! Метод reduce()
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);
// console.log(tags);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// ! 34
// // Ігровому сервісу необхідний функціонал підрахунку середнього часу,
// // проведеного в іграх. Доповни код таким чином,
// // щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((total, item) => (total += item), 0);

// console.log(totalPlayTime);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);

// // Оголошена змінна players
// // Значення змінної players - це об'єкт гравців з ігровим часом кожного
// // Оголошена змінна playtimes
// // Значення змінної playtimes - це масив [1270, 468, 710, 244]
// // Оголошена змінна totalPlayTime
// // Значення змінної totalPlayTime - це число 2692
// // Для перебирання масиву playtimes використовується метод reduce()
// // Оголошена змінна averagePlayTime
// // Значення змінної averagePlayTime - це число 673

// ! 35
// // // Нашому сервісу необхідно розрахувати середній час,
// // // проведений в одній грі для кожного гравця,
// // // і отримати загальну суму цих значень часу.
// // // Розрахувати час для кожного з гравців можна,
// // // розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).

// // const players = [
// //   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
// //   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
// //   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
// //   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// // ];
// // // Change code below this line

// // const totalAveragePlaytimePerGame = players.reduce((total, item) => {
// //   return total + item.playtime / item.gamesPlayed;
// // }, 0);
// // console.log(totalAveragePlaytimePerGame);

// // // Оголошена змінна players
// // // Значення змінної players - це масив об'єктів гравців
// // // Оголошена змінна totalAveragePlaytimePerGame
// // // Значення змінної totalAveragePlaytimePerGame - це число 1023
// // // Для перебирання масиву players використовується метод reduce()

// ! 36
// // Доповни функцію calculateTotalBalance(users) таким чином,
// // щоб вона рахувала і повертала суму всіх коштів (властивість balance),
// // які зберігають користувачі з масиву users.

// // Change code below this line
// const calculateTotalBalance = users =>
//   users.reduce((total, item) => total + item.balance, 0);

// // Change code above this line

// // Оголошена змінна calculateTotalBalance
// // Змінній calculateTotalBalance присвоєна стрілочна функція з параметром (users)
// // Для перебирання параметра users використовується метод reduce()
// // Виклик функції із зазначеним масивом користувачів повертає число 20916
// console.log(calculateTotalBalance(users));

// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ! 37
// // Доповни функцію getTotalFriendCount(users) таким чином,
// // щоб вона рахувала і повертала загальну кількість друзів (властивість friends) усіх користувачів з масиву users.

// // Change code below this line
// const getTotalFriendCount = users => {
//   return users.reduce((allFriends, friend) => {
//     allFriends.push(...friend.friends);

//     return allFriends;
//   }, []).length;

//   //   const addArray = arr => {
//   //     users.reduce((allFriends, friend) => {
//   //       allFriends.push(...friend.friends);

//   //       return allFriends;
//   //     }, []);
//   //   };
//   //   addArray(users);
// };
// // Change code above this line

// // Оголошена змінна getTotalFriendCount
// // Змінній getTotalFriendCount присвоєна стрілочна функція з параметром (users)
// // Для перебирання параметра users використовується метод reduce()
// // Виклик функції із зазначеним масивом користувачів повертає число 14
// console.log(getTotalFriendCount(users));

// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ! Метод sort()
// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// const scores2 = [27, 2, 41, 4, 7, 3, 75];
// scores2.sort();
// console.log(scores2); // [2, 27, 3, 4, 41, 7, 75]

// const students = ['Віка', 'Андрій', 'Олег', 'Юля', 'Борис', 'Катя'];
// students.sort();
// console.log(students); // [ 'Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля' ]

// const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// const scoresMain = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scoresMain].sort();
// console.log(scoresMain); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// // Свій порядок сортування чисел
// const scores3 = [61, 19, 74, 35, 92, 56];
// console.log(scores3);
// console.log([...scores3].sort((a, b) => a - b));
// console.log([...scores3].sort((a, b) => b - a));

// // Свій порядок сортування рядків
// const students2 = ['Віка', 'Андрій', 'Олег', 'Юля', 'Борис', 'Катя'];

// const inAlphabetOrder = [...students2].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students2].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Віка', 'Борис', 'Андрій']

// // Сортування об'єктів
// const students3 = [
//   { name: 'Манго', score: 83 },
//   { name: 'Полі', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Ківі', score: 94 },
// ];
// console.log(students3);

// const inAscendingScoreOrder = students3.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score,
// );
// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students3.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score,
// );
// console.log(inDescendingScoreOrder);

// const inAlphabeticalOrder = students3.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name),
// );
// console.log(inAlphabeticalOrder);

// ! Ланцюжки методів
// const students = [
//   { name: 'Манго', score: 83, courses: ['математика', 'фізика'] },
//   { name: 'Полі', score: 59, courses: ['інформатика', 'математика'] },
//   { name: 'Аякс', score: 37, courses: ['фізика', 'біологія'] },
//   { name: 'Ківі', score: 94, courses: ['література', 'інформатика'] },
// ];

// // const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// // const names = sortedByAscendingScore.map(student => student.name);

// // console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map(student => student.name);

// console.log(names); // ['Аякс', 'Полі', 'Манго', 'Ківі']

// const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['біологія', 'інформатика', 'література', 'математика', 'фізика']

// ! 38
// // Доповни код таким чином,
// // щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates,
// // відсортована за зростанням,
// // а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];
// // Change code below this line
// console.log(releaseDates);
// console.log(authors);

// // const ascendingReleaseDates = releaseDates.sort((a, b) => a - b);
// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);
// console.log(releaseDates);

// // const alphabeticalAuthors = authors.sort((a, b) => a.localeCompare(b));
// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors);
// console.log(authors);

// // Оголошена змінна releaseDates
// // Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// // Оголошена змінна authors
// // Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// // Оголошена змінна ascendingReleaseDates
// // Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// // Оголошена змінна alphabeticalAuthors
// // Значення змінної alphabeticalAuthors - це масив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// // Використаний метод sort()

// ! 39
// // Онлайн бібіліотеці необхідно відображати книги,
// // відсортовані за датою видання, за її зростанням або спаданням.
// // Доповни код таким чином,
// // щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates,
// // відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// console.log(ascendingReleaseDates);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(descendingReleaseDates);

// // Оголошена змінна releaseDates
// // Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// // Оголошена змінна ascendingReleaseDates
// // Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// // Оголошена змінна descendingReleaseDates
// // Значення змінної descendingReleaseDates - це масив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
// // Використаний метод sort()

// ! 40
// // Онлайн бібіліотеці необхідно відображати книги,
// // відсортовані за автором, в алфавітному і зворотному алфавітному порядку.
// // Доповни код таким чином,
// // щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors,
// // відсортована за алфавітом, а у змінній authorsInReversedOrder - копія,
// // відсортована у зворотному алфавітному порядку.

// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// // Оголошена змінна authors
// // Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// // Оголошена змінна authorsInAlphabetOrder
// // Значення змінної authorsInAlphabetOrder - це масив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// // Оголошена змінна authorsInReversedOrder
// // Значення змінної authorsInReversedOrder - це масив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
// // Використаний метод sort()

// ! 41
// // Доповни код таким чином, щоб:

// // У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// // У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// // У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// // У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

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
// console.table(books);

// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) =>
//   firstAuthor.author.localeCompare(secondAuthor.author),
// );
// console.table(sortedByAuthorName);

// const sortedByReversedAuthorName = [...books].sort(
//   (firstAuthor, secondAuthor) =>
//     secondAuthor.author.localeCompare(firstAuthor.author),
// );
// console.table(sortedByReversedAuthorName);

// const sortedByAscendingRating = [...books].sort(
//   (firstRating, secondRating) => firstRating.rating - secondRating.rating,
// );
// console.table(sortedByAscendingRating);

// const sortedByDescentingRating = [...books].sort(
//   (firstRating, secondRating) => secondRating.rating - firstRating.rating,
// );
// console.table(sortedByDescentingRating);

// // Оголошена змінна books
// // Значення змінної books - це вихідний масив об'єктів книг
// // Оголошена змінна sortedByAuthorName
// // Значення змінної sortedByAuthorName - це масив книг, відсортований за ім'ям автора в алфавітному порядку
// // Оголошена змінна sortedByReversedAuthorName
// // Значення змінної sortedByReversedAuthorName - це масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку
// // Оголошена змінна sortedByAscendingRating
// // Значення змінної sortedByAscendingRating - це масив книг, відсортований за зростанням рейтингу
// // Оголошена змінна sortedByDescentingRating
// // Значення змінної sortedByDescentingRating - це масив книг, відсортований за спаданням рейтингу
// // Для перебирання масиву books використовується метод sort()

// ! 42
// // Доповни функцію sortByAscendingBalance(users) таким чином,
// // щоб вона повертала масив користувачів, відсортований за зростанням їх балансу (властивість balance).

// // Change code below this line
// const sortByAscendingBalance = users => {
//   return [...users].sort((a, b) => a.balance - b.balance);
// };
// // Change code above this line

// // Оголошена змінна sortByAscendingBalance
// // Змінній sortByAscendingBalance присвоєна стрілочна функція з параметром (users)
// // Значення параметра users не змінюється
// // Виклик функції із зазначеним масивом користувачів
// // повертає новий масив користувачів, відсортований за зростанням їх балансу
// console.log(sortByAscendingBalance(users));

// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// // Для перебирання параметра users використаний метод sort()

// // const users = [
// //     {
// //       name: 'Moore Hensley',
// //       email: 'moorehensley@indexia.com',
// //       eyeColor: 'blue',
// //       friends: ['Sharron Pace'],
// //       isActive: false,
// //       balance: 2811,
// //       gender: 'male',
// //     },

// ! 43
// // Доповни функцію sortByDescendingFriendCount(users) таким чином,
// // щоб вона повертала масив користувачів,
// // відсортований за спаданням кількості їхніх друзів (властивість friends).

// // Change code below this line
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((a, b) => b.friends.length - a.friends.length);
// };
// // Change code above this line

// // Оголошена змінна sortByDescendingFriendCount
// // Змінній sortByDescendingFriendCount присвоєна стрілочна функція з параметром (users)
// // Значення параметра users не змінюється
// // Для перебирання параметра users використаний метод sort()
// // Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів,
// // відсортований за спаданням кількості їхніх друзів
// console.log(sortByDescendingFriendCount(users));
// console.table(sortByDescendingFriendCount(users));

// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ! 44
// // Доповни функцію sortByName(users) таким чином,
// // щоб вона повертала масив користувачів,
// // відсортований за їх ім'ям (властивість name) в алфавітному порядку.

// // Change code below this line
// const sortByName = users => {
//   return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// // Change code above this line

// // Оголошена змінна sortByName
// // Змінній sortByName присвоєна стрілочна функція з параметром (users)
// // Значення параметра users не змінюється
// // Для перебирання параметра users використаний метод sort()
// // Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів,
// // відсортований за ім'ям в алфавітному порядку
// console.log(sortByName(users));

// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ! 45
// // Доповни код таким чином,
// // щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
// // рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

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
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter(item => item.rating > MIN_BOOK_RATING)
//   .map(item => item.author)
//   .sort();

// // Оголошена змінна books
// // Значення змінної books - це вихідний масив об'єктів
// // Оголошена змінна MIN_BOOK_RATING
// // Значення змінної MIN_BOOK_RATING - це число 8
// // Оголошена змінна names
// // Значення змінної names - це масив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// console.log(names);

// // Відсутні оголошені змінні, крім books, MIN_BOOK_RATING і names
// // Використовується ланцюжок методів filter, map, sort

// ! 46
// // Доповни функцію getNamesSortedByFriendCount(users) таким чином,
// // щоб вона повертала масив імен користувачів,
// // відсортований за зростанням кількості їхніх друзів (властивість friends).

// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//   return [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map(item => item.name);
// };
// // Change code above this line

// // Оголошена змінна getNamesSortedByFriendCount
// // Змінній getNamesSortedByFriendCount присвоєна стрілочна функція з параметром (users)
// // У тілі функції використовується ланцюжок методів
// // Значення параметра users не змінюється
// // Виклик функції із зазначеним масивом користувачів повертає масив
// // ["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]
// console.log(getNamesSortedByFriendCount(users));

// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ! 47
// // Доповни функцію getSortedFriends(users) таким чином,
// // щоб вона повертала масив унікальних імен друзів (властивість friends),
// // відсортований за алфавітом.

// // Change code below this line
// const getSortedFriends = users => {
//   return [...users]
//     .flatMap(item => item.friends)
//     .filter((user, index, arr) => arr.indexOf(user) === index)
//     .sort();
// };
// // Change code above this line

// // Оголошена змінна getSortedFriends
// // Змінній getSortedFriends присвоєна стрілочна функція з параметром (users)
// // У тілі функції використовується ланцюжок методів в правильному порядку
// // Значення параметра users не змінюється
// // Виклик функції із зазначеним масивом користувачів повертає масив
// // ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong",
// // "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman",
// // "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]
// console.log(getSortedFriends(users));

// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// ! 48
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//   },
// ];
// // Доповни функцію getTotalBalanceByGender(users, gender) таким чином,
// // щоб вона повертала загальний баланс користувачів (властивість balance),
// // стать яких (властивість gender) збігається зі значенням параметра gender.

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter(item => item.gender === gender)
//     .reduce((total, item) => {
//       return total + item.balance;
//     }, 0);
// };
// // Change code above this line

// console.log(
//   [...users]
//     .filter(item => item.gender === 'male')
//     .reduce((total, item) => {
//       return total + item.balance;
//     }, 0),
// );

// console.log(
//   [...users]
//     .filter(item => item.gender === 'female')
//     .reduce((total, item) => {
//       return total + item.balance;
//     }, 0),
// );

// // Оголошена змінна getTotalBalanceByGender
// // Змінній getTotalBalanceByGender присвоєна стрілочна функція з параметрами (users, gender)
// // У тілі функції використовується ланцюжок методів в правильному порядку
// // Значення параметра users не змінюється
// // Якщо значення параметра gender - це рядок "male", функція повертає число 12053
// console.log(getTotalBalanceByGender(users, 'male'));
// // Якщо значення параметра gender - це рядок "female", функція повертає число 8863
// console.log(getTotalBalanceByGender(users, 'female'));
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// !
// !
// !
// !
// !
// !
// !
// !
// !

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
  },
];
