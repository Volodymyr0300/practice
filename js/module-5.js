// !
// const bookShelf = {
//   authors: ['Бернард Корнуелл', 'Роберт Шеклі'],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
// bookShelf.addAuthor('Лі Таніт');
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]

// !
// function showThis() {
//   console.log('this in showThis: ', this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // this in showThis: Window

// const user = {
//   username: 'Mango',
// };

// // Записуємо посилання на функцію у властивість об'єкта
// // Зверніть увагу, що це не виклик - немає ()
// user.showContext = showThis;

// // Викликаємо функцію в контексті об'єкта
// // this буде вказувати на поточний об'єкт, в контексті
// // якого здійснюється виклик, а не на глобальний об'єкт.
// user.showContext(); // this in showThis: {username: "Mango", showContext: ƒ}
// console.log(user.showContext());

// !
// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Буде помилка у виклику функції

// !
// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis(); // this in showThis: window

// const user = {
//   username: 'Mango',
// };
// user.showContext = showThis;

// user.showContext(); // this in showThis: window

// !
// const hotel = {
//   username: 'Resort hotel',
//   showThis() {
//     const foo = () => {
//       // Стрілки запам'ятовують контекст під час оголошення
//       // з батьківської області видимості
//       console.log('this in foo: ', this);
//     };

//     foo();
//     console.log('this in showThis: ', this);
//   },
// };

// hotel.showThis();
// // this in foo: {username: 'Resort hotel', showThis: ƒ}
// // this in showThis: {username: 'Resort hotel',showThis: ƒ}

// !
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Полі',
// };

// greetGuest.call(mango, 'Ласкаво просимо'); // Ласкаво просимо, Манго.
// greetGuest.call(poly, 'З прибуттям'); // З прибуттям, Полі.

// !
// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = {
//   username: 'Манго',
// };
// const poly = {
//   username: 'Полі',
// };

// greetGuest.apply(mango, ['Ласкаво просимо']); // Ласкаво просимо, Манго.
// greetGuest.apply(poly, ['З прибуттям']); // З прибуттям, Полі.

// !
// function greet(clientName) {
//   return `${clientName}, ласкаво просимо в «${this.service}».`;
// }

// const steam = {
//   service: 'Steam',
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter('Манго'); // "Манго, ласкаво просимо в «Steam»."

// const gmail = {
//   service: 'Gmail',
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter('Полі'); // "Полі, ласкаво просимо в «Gmail»."

// !
// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() - це виклик методу getFullName без об'єкта
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// // Передамо колбеком не оригінальний метод getFullName, а його копію з прив'язаним контекстом об'єкту customer.

// // ❌ Було
// // makeMessage(customer.getFullName); // Виникне помилка на момент виклику функції

// // ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обробляємо заявку від Jacob Mercer.

// ! 1
// // Виконай рефакторинг методів об'єкта pizzaPalace,
// // розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// // Метод checkPizza об'єкта pizzaPalace використовує this.
// // Метод order об'єкта pizzaPalace використовує this
// console.log(pizzaPalace.order('Smoked')); // повертає рядок "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order('Four meats')); // повертає рядок "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order('Big Mike')); // повертає рядок "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order('Viennese')); // повертає рядок "Sorry, there is no pizza named «Viennese»"

// ! 2
// // Перед звільненням розробник зламав вихідний код управління
// // акаунтами користувачів нашого сервісу доставки їжі.
// // Виконай рефакторинг методів об'єкта customer,
// // розставивши відсутні this під час звернення до властивостей об'єкта.

// // Після оголошення об'єкта ми додали виклики методів у тій послідовності,
// // в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// // Оголошена змінна customer
// // Значення змінної customer - це об'єкт з властивостями і методами
// console.log(customer.getDiscount());
// // повертає поточне значення властивості discount
// console.log(customer.setDiscount(0.15));
// //  оновлює значення властивості discount
// console.log(customer.getBalance());
// // повертає поточне значення властивості balance.
// console.log(customer.getOrders());
// // повертає поточне значення властивості orders
// console.log(customer.addOrder(5000, 'Steak'));
// // додає "Steak" в масив значень властивості orders і оновлює баланс

// // Метод getBalance об'єкта customer використовує this
// // Метод getDiscount об'єкта customer використовує this
// // Метод setDiscount об'єкта customer використовує this
// // Метод getOrders об'єкта customer використовує this
// // Метод addOrder об'єкта customer використовує this

// ! 3
// // Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі.
// // Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService,
// // щоб методи почали працювати правильно.

// const historyService = {
//   orders: [
//     { email: 'jacob@hotmail.com', dish: 'Burrito' },
//     { email: 'solomon@topmail.net', dish: 'Burger' },
//     { email: 'artemis@coldmail.net', dish: 'Pizza' },
//     { email: 'solomon@topmail.net', dish: 'Apple pie' },
//     { email: 'jacob@hotmail.com', dish: 'Taco' },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(' - ');
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// // Оголошена змінна historyService
// // Значення змінної historyService - це об'єкт з вихідними властивостями та методами
// console.log(historyService.getOrdersLog());
// // повертає рядок з переліком даних всіх замовлень з властивості orders
// console.log(historyService.getEmails());
// // повертає масив всіх унікальних поштових адрес з властивості orders
// console.log(historyService.getOrdersByEmail('solomon@topmail.net'));
// // повертає [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// console.log(historyService.getOrdersByEmail('artemis@coldmail.net'));
// // повертає [{ email: "artemis@coldmail.net", dish: "Pizza" }]
// // Метод getOrdersLog об'єкта historyService використовує this
// // Метод getEmails об'єкта historyService використовує this
// // Метод getOrdersByEmail об'єкта historyService використовує this

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
