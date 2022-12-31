// // Change code below this line
// let pricePerDroid = 800;
// let orderedQuantity = 6;
// let deliveryFee = 50;
// let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// let message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);
// console.log('hello');

// let x = true;
// let y = false;

// const type = typeof pricePerDroid;
// console.log(type);

// alert('what?');
// confirm('what?');

// const conf = confirm('what?');
// console.log(conf);

// let quantity = prompt('tell me about');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elem = '50.25px';
// const resultInt = Number.parseInt(elem);
// console.log(resultInt);
// const resultFloat = Number.parseFloat(elem);
// console.log(resultFloat);

// let salary = 120.213671;
// salary = Number(salary.toFixed(2));
// console.log(salary);
// console.log(Number(salary.toFixed(2)));

// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(result);
// console.log(Math.pow(base, power));
// console.log(base ** power);
// console.log(Math.sqrt(16));

// let base = prompt('tell me your number');
// base = Number(base);
// console.log(base);
// let power = prompt('tell me your power');
// power = Number(power);
// console.log(power);
// const result = base ** power;
// console.log(result);

// console.log(Math.random());
// const max = 100;
// const min = 0;
// console.log(Math.random() * (max - min) + min);
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// const colors = ['teal', 'orange', 'red', 'green', 'tomato'];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;

// let firstName = 'Volodymyr';
// let lastName = 'Poliakov';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// let brand = 'samsung';
// // brand = brand.toLowerCase();
// // console.log(brand);
// // brand = brand.toUpperCase();
// // console.log(brand);
// // console.log(brand[4]);
// // console.log(brand.slice(3));
// brand = brand[0].toUpperCase() + brand.slice(1).toLocaleLowerCase();
// console.log(brand);

// const string2 = 'Найбільш';
// const string1 = 'Найбільший розпродаж зимових чобіт в Німеччині';
// console.log(string1.includes(string2));

// console.log(1 && 0);
// console.log(null || (2 && 3));

// console.log(Number(null));
// console.log(Number(false));
// console.log(Number('0'));

// const balance = 10;
// const message = balance > 0 ? 'Positive balance' : 'Negative balance';
// console.log(message);

// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта,
// запиши у змінну message рядок "Insufficient funds!";
// в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну
// message повідомлення: "You ordered <число> droids, you have <число> credits left".
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${
//       customerCredits - totalPrice
//     } credits left`;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// const x = 5;
// const y = 10;
// const z = 5;
// console.log('x > y:', x > y); // false
// console.log('x < y:', x < y); // true
// console.log('x < z:', x < z); // false
// console.log('x <= z:', x <= z); // true
// console.log('x === y:', x === y); // false
// console.log('x === z:', x === z); // true
// console.log('x !== y:', x !== y); // true
// console.log('x !== z:', x !== z); // false

// const value = '12.64niv454';
// console.log(Number.parseInt(value));
// console.log(Number.parseFloat(value));
// console.log(Number(value));

// const validNumber = Number('51'); // 51
// console.log(Number.isNaN(validNumber)); // false
// const invalidNumber = Number('qweqwe'); // NaN
// console.log(Number.isNaN(invalidNumber)); // true

// console.log(0.1 + 0.2 === 0.3); // false
// console.log(0.1 + 0.2); // 0.30000000000000004
// console.log(0.4 + 0.2);

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 * 100 + 0.24 * 100) / 100); // 0.41

// console.log(0.17 + 0.24); // 0.41000000000000003
// console.log((0.17 + 0.24).toFixed(2)); // 0.41

// // Math.floor(num) - повертає найбільше ціле число,
// // менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1
// // Math.ceil(num) - повертає найбільше ціле число,
// // більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2
// // Math.round(num) - повертає значення числа,
// // округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2
// // Math.max(num1, num2, ...) - повертає найбільше ціле число з набору
// console.log(Math.max(20, 10, 50, 40)); // 50
// // Math.min(num1, num2, ...) - повертає найменше ціле число з набору
// console.log(Math.min(20, 10, 50, 40)); // 10
// // Math.pow(base, exponent) - піднесення до степеня
// console.log(Math.pow(2, 4)); // 16
// // Math.random() - повертає псевдовипадкове число в діапазоні [0, 1)
// console.log(Math.random()); // випадкове число між 0 і 1
// console.log(Math.random() * (10 - 1) + 1); // псевдовипадкове число від 1 до 10

// const message = 'Mango ' + 'is' + ' happy';
// console.log(message); // Mango is happy
// console.log(1 + '2'); // "12"
// console.log(1 + '2' + 4); // "124"
// console.log(1 + 2 + '4'); // "34"

// const message = 'Welcome to Bahamas!';
// console.log(message.length); // 19
// console.log('There is nothing impossible to him who will try'.length); // 47

// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message); // "Welcome to Bahamas!"

// const BRAND_NAME = 'SAMSUNG';
// const userInput = 'saMsUng';
// const normalizedToUpperCaseInput = userInput.toUpperCase();
// console.log(userInput); // 'saMsUng'
// console.log(userInput === BRAND_NAME); // false
// console.log(normalizedToUpperCaseInput); // 'SAMSUNG'
// console.log(normalizedToUpperCaseInput === BRAND_NAME); // true

// const message = 'Welcome to Bahamas!';
// console.log(message.indexOf('to')); // 8
// console.log(message.indexOf('hello')); // -1
// console.log(message.indexOf('elco'));

// const productName = 'Ремонтний дроїд';
// console.log(productName.includes('н')); // true
// console.log(productName.includes('Н')); // false
// console.log(productName.includes('дроїд')); // true
// console.log(productName.includes('Дроїд')); // false
// console.log(productName.includes('Ремонтний')); // true
// console.log(productName.includes('ремонтний')); // false

// const jsFileName = 'script.js';
// console.log(jsFileName.endsWith('.js')); // true
// const cssFileName = 'styles.css';
// console.log(cssFileName.endsWith('.js')); // false

// const jsFileName = 'script.js';
// const minifiedJsFileName = jsFileName.replace('.js', '.min.js');
// console.log(minifiedJsFileName); // "script.min.js"

// const cssFileNames = 'styles.css, about.css, portfolio.css';
// const minifiedCssFileNames = cssFileNames.replaceAll('.css', '.min.css');
// console.log(minifiedCssFileNames); // "styles.min.css, about.min.css, portfolio.min.css"

// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true
// console.log(1 && 5); // true && true -> 5
// console.log(5 && 1); // true && true -> 1
// console.log(0 && 2); // false && true -> 0
// console.log(2 && 0); // true && false -> 0
// console.log("" && "Mango"); // false && true -> ""
// console.log("Mango" && ""); // true && false -> ""
// console.log("Mango" && "Poly"); // true && true -> "Poly"
// console.log("Poly" && "Mango"); // true && true -> "Mango"

// console.log(true || false); // true
// console.log(false || true); // true
// console.log(true || true); // true
// console.log(3 || false); // 3
// console.log(false || 3); // 3
// console.log(3 || true); // 3
// console.log(true || 3); // true

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!'Mango'); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!''); // !"" -> !false -> true
// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false

// let cost = 0;
// const subscription = 'pro';
// if (subscription === 'pro') {
//   cost = 100;
// }
// console.log(cost); // 100

// let cost;
// const subscription = 'free';
// if (subscription === 'pro') {
//   cost = 100;
// } else {
//   cost = 0;
// }
// console.log(cost); // 0

// let cost;
// const subscription = 'premium';
// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else {
//   console.log('Invalid subscription type');
// }
// console.log(cost); // 500

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type); // "adult"

// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;
// console.log(biggerNumber); // 10

// let cost;
// const subscription = 'premium';
// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;
//   case 'pro':
//     cost = 100;
//     break;
//   case 'premium':
//     cost = 500;
//     break;
//   default:
//     console.log('Invalid subscription type');
// }
// console.log(cost); // 500

// const cost = 5;
// switch (cost) {
//   case 1:
//     console.log(`Your price is - one dollar! Congratulations!`);
//     break;
//   case 2:
//     console.log(`Your price is - two dollars}! Congratulations!`);
//     break;
//   case 3:
//     console.log(`Your price is - three dollars! Congratulations!`);
//     break;
//   case 4:
//     console.log(`Your price is - four dollars! Congratulations!`);
//     break;
//   case 5:
//     console.log(`Your price is - five dollars! Congratulations!`);
//     break;
//   default:
//     console.log('You have a wrong price!');
//     break;
// }

// let counter = 0;
// while (counter < 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;
// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = '';
// do {
//   password = prompt('Введіть пароль довший 4-х символів', '');
// } while (password.length < 5);
// console.log('Ввели пароль: ', password);

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;
// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }
// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);
//   if (i === 3) {
//     console.log('Знайшли число 3, перериваємо виконання циклу');
//     // break;
//   }
// }

// const number = 10;
// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log('Непарне i: ', i); // 1, 3, 5, 7, 9
// }

// Функція checkPassword(password) отримує пароль користувача в параметр password,
// перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD
// і повертає повідомлення про результат порівняння, яке зберігається у змінній message.
// Якщо значення параметра password дорівнює null, значить користувач скасував операцію
// і в message записується рядок "Canceled by user!".
// Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну
// message присвоюється рядок "Welcome!".
// Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок
// "Access denied, wrong password!".
// ТЕСТИ
// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
// Виклик checkPassword(null) повертає "Canceled by user!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam") повертає "Welcome!"
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password !== ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }
// checkPassword('mangohackzor');
// checkPassword(null);
// checkPassword('polyhax');
// checkPassword('jqueryismyjam');

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   // Change code above this line
//   return message;
// }

// function isNumberInRange(start, end, number) {
//   const isInRange = start <= number && number <= end; // Change this line
//   return isInRange;
// }
// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !(number >= start && number <= end); // Change this line
//   return isNotInRange;
// }
// Виклик isNumberNotInRange(10, 30, 17) повертає false
// Виклик isNumberNotInRange(10, 30, 5) повертає true
// Виклик isNumberNotInRange(20, 50, 24) повертає false
// Виклик isNumberNotInRange(20, 50, 76) повертає true

// Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей
// (параметр totalSpent) в магазині за весь час (партнерська програма). Знижка записується у змінну discount
// і повертається з функції як результат її роботи.
// Використовуючи розгалуження і логічні оператори, доповни код функції.
// Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
// Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
// Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
// Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
// Значення знижок кожного рівня зберігаються в однойменних константах
// BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (20000 <= totalSpent && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (5000 <= totalSpent && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 5000) {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(137000)); /* повертає 0.1 */
// console.log(getDiscount(46900)); /* повертає 0.05 */
// console.log(getDiscount(8250)); /* повертає 0.02 */
// console.log(getDiscount(1300)); /* повертає 0 */
// console.log(getDiscount(5000)); /* повертає 0.02 */
// console.log(getDiscount(20000)); /* повертає 0.05 */
// console.log(getDiscount(50000)); /* повертає 0.1 */

// рефакторінг з тернарним оператором
// if (ordered > available) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   //   if (ordered > available) {
//   //     message = 'Not enough goods in stock!';
//   //   } else {
//   //     message = 'The order is accepted, our manager will contact you';
//   //   }
//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type),
// перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається
// у змінній price.
// Якщо значення параметра type - це рядок:
// "starter" - ціна передплати 0 кредитів.
// "professional" - ціна передплати 20 кредитів.
// "organization" - ціна передплати 50 кредитів.
// Спочатку в тілі функції була інструкція if...else, яка виглядала ось так.
// if (type === "starter") {
//   price = 0;
// } else if (type === "professional") {
//   price = 20;
// } else if (type === "organization") {
//   price = 50;
// }
// Після рефакторингу інструкція if..else була замінена на switch.
// Доповни код інструкції switch, щоб функція працювала правильно.
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line
//   switch (
//     type // Change this line
//   ) {
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;
//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;
//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }
//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice('professional'));
// console.log(getSubscriptionPrice('organization'));
// console.log(getSubscriptionPrice('starter'));

// Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора
// у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.
// Якщо значення параметра password:
// дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
// Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   //   if (password === null) {
//   //     message = 'Canceled by user!';
//   //   } else if (password === ADMIN_PASSWORD) {
//   //     message = 'Welcome!';
//   //   } else {
//   //     message = 'Access denied, wrong password!';
//   //   }
//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case 'jqueryismyjam':
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));

// Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача (параметр country)
// і повертати повідомлення про результат, що зберігається у змінній message. Обов'язково використовуй інструкцію switch.
// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price>,
// необхідно підставити відповідні значення.
// Список країн і вартість доставки:
// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів
// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути
// рядок "Sorry, there is no delivery to your country"
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   let price;
//   switch (country) {
//     case 'China':
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case 'Chile':
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case 'Australia':
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     case 'Jamaica':
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//       break;
//   }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost('Australia'));
// console.log(getShippingCost('Germany'));
// console.log(getShippingCost('China'));
// console.log(getShippingCost('Chile'));
// console.log(getShippingCost('Jamaica'));
// console.log(getShippingCost('Sweden'));

// Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина.
// Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
//   return message;
// }
// console.log(getNameLength('Poly'));
// console.log(getNameLength('Harambe'));
// console.log(getNameLength('Billy'));
// console.log(getNameLength('Joe'));

// Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних елементів або властивостей рядка у змінній course.
// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.
// const courseTopic = 'JavaScript essentials';
// // Change code below this line
// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];
// // Change code above this line

// Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів.
// Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
// string - оригінальний рядок
// length - кількість символів з початку рядка для підрядка
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line
//   return substring;
// }
// console.log(getSubstring('Hello world', 3)); /* повертає "Hel" */
// console.log(getSubstring('Hello world', 6)); /* повертає "Hello" */
// console.log(getSubstring('Hello world', 8)); /* повертає "Hello wo" */
// console.log(getSubstring('Hello world', 11)); /* повертає "Hello world" */
// console.log(getSubstring('Hello world', 0)); /* повертає "" */

// Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення в параметрі maxLength.
// Доповни код функції таким чином, що якщо довжина рядка:
// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів
// і додає в кінець три крапки "...", після чого повертає скорочену версію.
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else {
//     message = message.slice(0, maxLength);
//     result = `${message}...`;
//   }
//   /// Change code above this line
//   return result;
// }
// console.log(
//   formatMessage('Curabitur ligula sapien', 16),
// ); /* повертає "Curabitur ligula..." */
// console.log(
//   formatMessage('Curabitur ligula sapien', 23),
// ); /* повертає "Curabitur ligula sapien" */
// console.log(
//   formatMessage('Vestibulum facilisis purus nec', 20),
// ); /* повертає "Vestibulum facilisis..." */
// console.log(
//   formatMessage('Vestibulum facilisis purus nec', 30),
// ); /* повертає "Vestibulum facilisis purus nec" */
// console.log(
//   formatMessage('Nunc sed turpis a felis in nunc fringilla', 15),
// ); /* повертає "Nunc sed turpis..." */
// console.log(
//   formatMessage('Nunc sed turpis a felis in nunc fringilla', 41),
// ); /* повертає "Nunc sed turpis a felis in nunc fringilla" */

// Функція checkForName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.
// fullname - повне ім'я, що складається з двох слів (імені та прізвища), розділених пробілом.
// name - ім'я для перевірки входження в повне ім'я.
// Присвой змінній result вираз перевірки входження імені (параметр name), у повне ім'я (параметр fullname). Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.
// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(checkForName('Egor Kolbasov', 'Egor')); /* повертає true */
// console.log(checkForName('Egor Kolbasov', 'egor')); /* повертає false */
// console.log(checkForName('Egor Kolbasov', 'egOr')); /* повертає false */
// console.log(checkForName('Egor Kolbasov', 'Zhenya')); /* повертає false */
// console.log(checkForName('Vadim Nekrasov', 'Vadim')); /* повертає true */
// console.log(checkForName('Vadim Nekrasov', 'vadim')); /* повертає false */
// console.log(checkForName('Vadim Nekrasov', 'Dima')); /* повертає false */

// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.
// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.
// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   if (message.toLowerCase().includes('spam')) {
//     result = true;
//   } else if (message.toLowerCase().includes('sale')) {
//     result = true;
//   } else if (
//     !message.toLowerCase().includes('spam') &&
//     !message.toLowerCase().includes('sale')
//   ) {
//     result = false;
//   }
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam('Latest technology news')); /* повертає false */
// console.log(checkForSpam('JavaScript weekly newsletter')); /* повертає false */
// console.log(checkForSpam('Get best sale offers now!')); /* повертає true */
// console.log(checkForSpam('Amazing SalE, only tonight!')); /* повертає true */
// console.log(
//   checkForSpam('Trust me, this is not a spam message'),
// ); /* повертає true */
// console.log(
//   checkForSpam('Get rid of sPaM emails. Our book in on sale!'),
// ); /* повертає true */
// console.log(checkForSpam('[SPAM] How to earn fast money?')); /* повертає true */

// const max = 5;
// const min = 0;
// let value = Math.round(Math.random() * (max - min) + min);
// console.log(value);
// let price;
// switch (value) {
//   case 0:
//     price = 0;
//     console.log(`Price is ${price}.`);
//     break;
//   case 1:
//   case 2:
//     price = 1;
//     console.log(`Price is ${price}.`);
//     break;
//   case 3:
//     price = 3;
//     console.log(`Price is ${price}.`);
//     break;
//   case 4:
//     price = 4;
//     console.log(`Price is ${price}.`);
//     break;
//   case 5:
//     price = 5;
//     console.log(`Price is ${price}.`);
//     break;
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log(`Price is ${i}.`);
// }

// // задача була згенерувати цикл якій рахує рандомну сумму рандомної кількості співробітників.
// const maxCountEmployee = 10;
// const minCountEmployee = 0;
// let countEmployee = Math.round(
//   Math.random() * (maxCountEmployee - minCountEmployee) + minCountEmployee,
// );
// console.log(`Count of employee is ${countEmployee}`);
// let totalSalary = 0;
// for (let i = 0; i <= countEmployee; i += 1) {
//   const maxSalary = 1000;
//   const minSalary = 100;
//   let salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   console.log(`Salary of that empolyee is ${salary}`);
//   totalSalary += salary;
//   console.log(`Total amount is ${totalSalary}`);
//   if (i + 1 > countEmployee) {
//     console.log(`In last iteration totalSalary  is ${totalSalary}`);
//   }
// }

// // задача порахувати суму всіх не четних чисел
// let sumOfNumbers = 0;
// for (let i = 0; i < 10; i += 1) {
//   if (i % 2 === 0) {
//     sumOfNumbers += i;
//   }
// }
// console.log(sumOfNumbers);
// // рішення з - якщо не рівно то пропускаємо
// let sumOfNumbers2 = 0;
// for (let i = 0; i < 10; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   sumOfNumbers2 += i;
// }
// console.log(sumOfNumbers2);

// function squareDigits(num) {
//   return num * 2;
// }
// console.log(squareDigits(10));
