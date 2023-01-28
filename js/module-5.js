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
// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate));

// !
// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());

// !
// const animal = {
//   legs: 4,
// };
// console.log(animal);

// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true

// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty('legs')); // false
// console.log(dog.legs); // 4

// console.log(dog.isPrototypeOf(animal));
// console.log(animal.isPrototypeOf(dog));

// !
// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key); // barks, eats
// }

// !
// const animal = {
//   eats: true,
// };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;

//   console.log(key); // barks
// }

// !
// const animal = {
//     eats: true,
//   };
//   const dog = Object.create(animal);
//   dog.barks = true;

//   const dogKeys = Object.keys(dog);

//   console.log(dogKeys); // ['barks']

// ! 4
// // Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = 'Jason';
// child.age = 27;

// // Оголошена змінна parent
// // Значення змінної parent - це об'єкт
// console.log(parent.hasOwnProperty('surname'));
// // повертає true
// console.log(parent.hasOwnProperty('heritage'));
// // повертає true
// // Оголошена змінна child
// // Значення змінної child - це об'єкт
// console.log(child.hasOwnProperty('name'));
// // повертає true
// // Звернення до child.name повертає "Jason"
// console.log(child.hasOwnProperty('age'));
// // повертає true
// // Звернення до child.age повертає 27
// console.log(child.hasOwnProperty('surname'));
// // повертає false
// // Звернення до child.surname повертає "Moore"
// console.log(child.hasOwnProperty('heritage'));
// // повертає false
// // Звернення до child.heritage повертає "Irish"
// console.log(parent.isPrototypeOf(child));
// // повертає true
// // Використовується метод Object.create()

// ! 5
// // Зміни код, побудувавши ланцюжок прототипів таким чином,
// // щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(ancestor);
// console.log(parent);
// console.log(child);

// // Change code above this line

// // Оголошена змінна ancestor
// // Значення змінної ancestor - це об'єкт.
// // Оголошена змінна parent
// // Значення змінної parent - це об'єкт.
// // Оголошена змінна child
// // Значення змінної child - це об'єкт.
// console.log(ancestor.isPrototypeOf('parent'));
// // повертає true
// console.log(parent.isPrototypeOf('child'));
// // повертає true
// console.log(ancestor.hasOwnProperty('surname'));
// // повертає true
// // Звернення до ancestor.surname повертає "Dawson"
// console.log(parent.hasOwnProperty('surname'));
// // повертає true
// // Звернення до parent.surname повертає "Moore"
// console.log(child.hasOwnProperty('surname'));
// // повертає false
// // Звернення до child.surname повертає "Moore"
// console.log(ancestor.hasOwnProperty('heritage'));
// // повертає true
// // Звернення до ancestor.heritage повертає "Irish"
// console.log(parent.hasOwnProperty('heritage'));
// // повертає false
// // Звернення до parent.heritage повертає "Irish"
// console.log(child.hasOwnProperty('heritage'));
// // повертає false
// // Звернення до child.heritage повертає "Irish"
// // Використовується метод Object.create()

// !
// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}

// !
// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User('Манго', 'mango@mail.com');
// console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

// const poly = new User('Поли', 'poly@mail.com');
// console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// !
// class User {
//   // Деструктуризуємо об'єкт
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: 'Манго',
//   email: 'mango@mail.com',
// });
// console.log(mango); // { name: "Манго", email: "mango@mail.com" }

// const poly = new User({
//   name: 'Поли',
//   email: 'poly@mail.com',
// });
// console.log(poly); // { name: "Поли", email: "poly@mail.com" }

// !
// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   // Метод getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Метод changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// !
// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: 'Манго',
//   email: 'mango@mail.com',
// });
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// // console.log(mango.#email); // Виникне помилка, це приватна властивість

// !
// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Геттер email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// console.log(mango.email); // mango@mail.com
// mango.email = 'mango@supermail.com';
// console.log(mango.email); // mango@supermail.com

// set email(newEmail) {
//     if(newEmail === "") {
//       console.error("Помилка! Пошта не може бути порожнім рядком!");
//       return;
//     }

//     this.#email = newEmail;
//   }

// !
// class User {
//   // Оголошення та ініціалізація статичної властивості
//   static Roles = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// !
// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });
// console.log(mango);

// console.log(User.isEmailTaken('poly@mail.com'));
// console.log(User.isEmailTaken('mango@mail.com'));

// !
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тіло класу ContentEditor
// }

// const editor = new ContentEditor('mango@mail.com');
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"

// !
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     // Виклик конструктора батьківського класу User
//     super(email);
//     this.posts = posts;
//   }
// }

// const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'

// !
// // Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//   constructor({ email, posts }) {
//     super(email);
//     this.posts = posts;
//   }

//   addPost(post) {
//     this.posts.push(post);
//   }
// }

// const editor = new ContentEditor({ email: 'mango@mail.com', posts: [] });
// console.log(editor); // { email: 'mango@mail.com', posts: [] }
// console.log(editor.email); // 'mango@mail.com'
// editor.addPost('post-1');
// console.log(editor.posts); // ['post-1']

// ! 6
// // Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// class Car {}

// // Оголошений клас Car
// // Результат виклику new Car() - це порожній об'єкт

// ! 7
// // Додай класу Car метод constructor, який приймає три параметри:

// // brand - марка автомобіля.
// // model - модель автомобіля.
// // price - ціна автомобіля.
// // Клас Car повинен створювати об'єкт з однойменними властивостями
// // brand, model і price, значеннями яких повинні бути передані
// // аргументи під час його виклику з оператором new.

// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// // Оголошений клас Car
// // Клас Car має метод constructor
// console.log(new Car('Audi', 'Q3', 36000));
// // утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// console.log(new Car('BMW', 'X5', 58900));
// // утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// console.log(new Car('Nissan', 'Murano', 31700));
// // утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// ! 8
// // Виконай рефакторинг класу Car таким чином,
// // щоб він приймав один параметр - об'єкт з властивостями
// // brand, model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }
// // Оголошений клас Car
// // Клас Car має метод constructor
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// // утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));
// // утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));
// утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// ! 9
// // Додай класу Car два методи.

// // getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// // changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     return (this.price = newPrice);
//   }
//   // Change code above this line
// }

// // В класі Car оголошений метод getPrice
// // Метод getPrice повертає значення властивості price екземпляра класу, який його викликає
// // В класі Car оголошений метод changePrice
// // Метод changePrice змінює значення властивості price екземпляра класу, який його викликає

// ! 10
// // Напиши клас Storage, який буде створювати об'єкти для управління складом товарів.
// // Клас очікує тільки один аргумент - початковий масив товарів,
// // який записується у властивість items об'єкта, що створюється.

// // Оголоси наступні методи класу:

// // getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.
// // addItem(newItem) - приймає новий товар newItem
// // і додає його в масив товарів у властивості items об'єкта, який викликає цей метод.
// // removeItem(itemToRemove) - приймає товар itemToRemove
// // і видаляє його з масиву товарів у властивості items об'єкта, який викликає цей метод.
// // Під коментарем ми додали ініціалізацію екземпляра
// // і виклики методів у тій послідовності, в якій твій код перевірятимуть тести.
// // Будь ласка, нічого там не змінюй.

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     return this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     // console.log(itemToRemove);
//     // console.log(this.items.splice(1, 1));
//     // console.log(
//     //   this.items.slice(
//     //     0,
//     //     this.items[this.items.findIndex(item => item === itemToRemove)],
//     //   ),
//     // );
//     // console.log(
//     //   this.items[this.items.findIndex(item => item === itemToRemove)],
//     // );
//     // console.log(this.items[this.items.indexOf(itemToRemove)]);
//     // console.log(this.items.indexOf(itemToRemove));
//     // return this.items.slice(
//     //   0,
//     //   this.items[this.items.findIndex(item => item.items === itemToRemove)],
//     // );
//     // console.log(this.items);
//     // for (const item of this.items) {
//     //   if (item === itemToRemove) {
//     //     console.log(item);
//     //     console.log('I find it');
//     //     console.log(itemToRemove);
//     //   } else {
//     //     console.log(item);
//     //   }
//     // }
//     // return this.items.splice(this.items[this.items.indexOf(itemToRemove)], 1);

//     // const arr1 = this.items.slice(0, indexOfNewItem);
//     // console.log(arr1);
//     // const arr2 = this.items.slice(indexOfNewItem + 1, this.items.length);
//     // console.log(arr2);
//     // const arr3 = [...arr1, ...arr2];
//     // console.log(arr3);
//     // return arr3;
//     // const indexOfNewItem = this.items.indexOf(itemToRemove);
//     // console.log(indexOfNewItem);
//     // console.log(this.items);
//     // console.log(this.items.splice(this.items.indexOf(itemToRemove), 1));
//     this.items.splice(this.items.indexOf(itemToRemove), 1);
//     return this.items;
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// // Оголошений клас Storage
// // В класі Storage оголошений метод getItems
// // В класі Storage оголошений метод addItem
// // В класі Storage оголошений метод removeItem
// // Метод getItems повертає значення властивості items екземпляра класу, який його викликає
// // Метод addItem змінює властивість items екземпляра класу, який його викликає
// // Метод removeItem змінює властивість items екземпляра класу, який його викликає
// // В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
// // Об'єкт storage містить властивість items
// // Перший виклик storage.getItems(), відразу після інціалізаціі екземпляра,
// // повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// // Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"),
// // повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// // Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"),
// // повертає масив ["Nanitoids", "Antigravitator", "Droid"]

// ! 11
// // Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок,
// // кий записується у властивість value об'єкта, що створюється.

// // Оголоси наступні методи класу:

// // getValue() - повертає поточне значення властивості value.
// // padEnd(str) - отримує параметр str (рядок)
// // і додає його в кінець значення властивості value об'єкта, який викликає цей метод.
// // padStart(str) - отримує параметр str (рядок)
// // і додає його на початок значення властивості value об'єкта, який викликає цей метод.
// // padBoth(str) - отримує параметр str (рядок)
// // і додає його на початок і в кінець значення властивості value об'єкта, який викликає цей метод.
// // Під коментарем ми додали ініціалізацію екземпляра
// // і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = `${this.value}${str}`;
//     return this.value; // this.value.push(str);
//   }
//   padStart(str) {
//     this.value = `${str}${this.value}`;
//     return this.value; // this.value.unshift(str);
//   }
//   padBoth(str) {
//     this.value = `${str}${this.value}${str}`;
//     return this.value; // this.value.push(str) && this.value.unshift(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// // Оголошений клас StringBuilder
// // В класі StringBuilder оголошений метод getValue
// // Метод getValue повертає значення властивості value екземпляра класу, який його викликає
// // В класі StringBuilder оголошений метод padEnd
// // Метод padEnd змінює властивість value екземпляра класу, який його викликає
// // В класі StringBuilder оголошений метод padStart
// // Метод padStart змінює властивість value екземпляра класу, який його викликає
// // В класі StringBuilder оголошений метод padBoth
// // Метод padBoth змінює властивість value екземпляра класу, який його викликає
// // В результаті виклику new StringBuilder(".") значення змінної builder - це об'єкт
// // Об'єкт builder містить властивість value
// // Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .
// // Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.
// // Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^
// // Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=

// ! 12
// // Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною,
// // і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// // getBrand() - повертає значення приватної властивості brand.
// // changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.

// class Car {
//   // Change code below this line
//   model;
//   price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   // Change code above this line
// }

// // Оголошений клас Car
// // Властивість brand в класі Car оголошена приватною
// // Конструктор класу приймає об'єкт з властивостями brand, model і price
// // В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 })

// // утвориться об'єкт { model: "Q3", price: 36000 }
// // В результаті виклику new Car({ brand: "bmw", model: "X5", price: 58900 })

// // утвориться об'єкт { model: "X5", price: 58900 }
// // В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 })

// // утвориться об'єкт { model: "Murano", price: 31700 }
// // В екземпляра відсутня публічна властивість brand
// // Метод getBrand() повертає значення приватної властивості brand.
// // Метод changeBrand("Honda") змінює значення приватної властивості brand на "Honda"

// ! 13
// // Виконай рефакторинг класу Storage, зробивши властивість items приватною.

// // Під коментарем ми додали ініціалізацію екземпляра
// // і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class Storage {
//   // Change code below this line
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

// // Оголошений клас Storage
// // Об'єкт storage не містить властивості items
// // В класі Storage оголошений метод getItems
// // В класі Storage оголошений метод addItem
// // В класі Storage оголошений метод removeItem
// // Властивість items в класі Storage оголошена приватною
// // Конструктор класу приймає властивість items
// // В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
// // Перший виклик storage.getItems(), відразу після ініціалізації екземпляра,
// // повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// // Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"),
// // повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// // Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"),
// // повертає масив ["Nanitoids", "Antigravitator", "Droid"]

// ! 14
// // Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

// // Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
// // в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class StringBuilder {
//   // Change code below this line
//   #value;

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // "."
// builder.padStart('^');
// console.log(builder.getValue()); // "^."
// builder.padEnd('^');
// console.log(builder.getValue()); // "^.^"
// builder.padBoth('=');
// console.log(builder.getValue()); // "=^.^="

// // Оголошений клас StringBuilder
// // Властивість value в класі StringBuilder оголошена приватною
// // В класі StringBuilder оголошений метод getValue
// // В класі StringBuilder оголошений метод padEnd
// // В класі StringBuilder оголошений метод padStart
// // В класі StringBuilder оголошений метод padBoth
// // В результаті виклику new StringBuilder('.') значення змінної builder - це об'єкт
// // Об'єкт builder не містить властивості value
// // Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .
// // Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.
// // Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^
// // Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=

// ! 15
// // Виконай рефакторинг класу Car.
// // Зроби властивості model і price приватними,
// // а також #brand. Стандартизуй публічний інтерфейс класу,
// // замінивши вже оголошені методи на гетери та сетери brand,
// // model і price, для взаємодії з приватними властивостями.

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   //   getBrand() {
//   //     return this.#brand;
//   //   }

//   //   changeBrand(newBrand) {
//   //     this.#brand = newBrand;
//   //   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   //   getModel() {
//   //     return this.#model;
//   //   }

//   //   updateModel(newModel) {
//   //     this.#model = newModel;
//   //   }
//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   //   getPrice() {
//   //     return this.#price;
//   //   }

//   //   setPrice(newPrice) {
//   //     this.#price = newPrice;
//   //   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// // Оголошений клас Car
// // В класі Car оголошена приватна властивість brand
// // В класі Car оголошена приватна властивість model
// // В класі Car оголошена приватна властивість price
// // Конструктор класу приймає об'єкт з властивостями brand, model і price
// // В класі Car оголошений гетер brand
// // В класі Car оголошений сетер brand
// // В класі Car оголошений гетер model
// // В класі Car оголошений сетер model
// // В класі Car оголошений гетер price
// // В класі Car оголошений сетер price

// ! 16
// // Виконай рефакторинг класу Car.
// // Додай публічну статичну властивість MAX_PRICE зі значенням 50000 - максимально допустима ціна автомобіля.

// // Додай сетеру price перевірку значення параметра newPrice, що передається.
// // Якщо воно більше за MAX_PRICE, сеттер нічого не робить,
// // а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     // console.log(newPrice);
//     // console.log(Car.Price.MAX_PRICE);
//     // console.log(typeof Car.Price.MAX_PRICE);

//     newPrice > Car.MAX_PRICE ? Car.MAX_PRICE : (this.#price = newPrice);
//     // this.#price = newPrice;
//   }
//   // Change code above this line
// }

// // console.log(Car.Price);

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// // Оголошений клас Car
// // Клас Car містить статичну властивість MAX_PRICE
// // Значення статичної властивості MAX_PRICE - це число 50000
// // Екземпляр не містить властивості MAX_PRICE
// // В класі Car оголошений гетер price
// // В класі Car оголошений сетер price
// // Виклик сетера price в екземпляра класу,
// // зі значенням аргументу меншим за значення MAX_PRICE, змінює властивість #price
// // Виклик сетера price в екземпляра класу,
// // зі значенням аргументу більшим за значення MAX_PRICE, не змінює властивість #price

// ! 17
// // Додай класу Car публічний статичний метод checkPrice (price),
// // що приймає ціну автомобіля.
// // Метод повинен порівняти значення параметра price
// // і приватної статичного властивості MAX_PRICE.

// // Якщо ціна автомобіля перевищує максимальну,
// // метод повинен повернути рядок "Error! Price exceeds the maximum".
// // В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// // Під оголошенням класу ми додали ініціалізацію екземпляра
// // і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line

//   static checkPrice(price) {
//     return price > this.#MAX_PRICE
//       ? 'Error! Price exceeds the maximum'
//       : 'Success! Price is within acceptable limits';
//   }

//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// // Оголошений клас Car
// // Клас Car містить статичний метод checkPrice(price)
// console.log(Car.checkPrice(36000));
// // повертає рядок "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(18000));
// // повертає рядок "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(64000));
// // повертає рядок "Error! Price exceeds the maximum"
// console.log(Car.checkPrice(57000));
// // повертає рядок "Error! Price exceeds the maximum"

// ! 18
// // У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// // Оголоси клас Admin, який наслідує від класу User
// // Додай класу Admin публічну статичну властивість AccessLevel (рівень доступу),
// // значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {
//   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
// }

// // Оголошений клас Admin
// // Клас Admin наслідує від класу User
// // Клас Admin містить публічну статичну властивість AccessLevel
// // Звернення до Admin.AccessLevel.BASIC повертає рядок "basic"
// console.log(Admin.AccessLevel.BASIC);
// // Звернення до Admin.AccessLevel.SUPERUSER повертає рядок "superuser"
// console.log(Admin.AccessLevel.SUPERUSER);

// ! 19
// // Додай класу Admin метод constructor,
// // який приймає один параметр - об'єкт налаштувань з двома властивостями
// // email і accessLevel. Додай класу Admin публічну властивість accessLevel,
// // значення якої буде передаватися під час виклику конструктора.

// // Щоб показати, як буде використовуватися клас Admin,
// // ми додали ініціалізацію екземпляра під оголошенням класу.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// // Оголошений клас Admin
// // Клас Admin наслідує від класу User
// // Клас Admin містить публічну статичну властивість AccessLevel
// // Клас Admin містить метод constructor з параметром у вигляді об'єкта {email, accessLevel}
// // В класі Admin в конструкторі для властивості email використовується звернення до конструктора батьківського класу
// // Звернення до Admin.AccessLevel.BASIC повертає рядок "basic"
// console.log(Admin.AccessLevel.BASIC);
// // Звернення до Admin.AccessLevel.SUPERUSER повертає рядок "superuser"
// console.log(Admin.AccessLevel.SUPERUSER);

// ! 20
// // Додай класу Admin наступні властивості і методи.

// // Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів.
// // Значення за замовчуванням — це порожній масив.
// // Публічний метод blacklist(email) для додавання пошти у чорний список.
// // Метод повинен додавати значення параметра email в масив,
// // що зберігається у властивості blacklistedEmails.
// // Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.
// // Метод повинен перевіряти наявність значення параметра email в масиві,
// // що зберігається у властивості blacklistedEmails, і повертати true або false.
// // Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності,
// // в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmails;

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email) ? true : false;
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true

// // Оголошений клас Admin
// // Клас Admin наслідує від класу User
// // Клас Admin містить публічну властивість blacklistedEmails
// // Клас Admin містить публічний метод blacklist
// // Клас Admin містить публічний метод isBlacklisted
// // Після виклику mango.blacklist("poly@mail.com") значення властивості blacklistedEmails - це масив ["poly@mail.com"]
// // Виклик mango.isBlacklisted("mango@mail.com") повертає false
// console.log(mango.isBlacklisted('mango@mail.com'));
// // Виклик mango.isBlacklisted("poly@mail.com") повертає true
// console.log(mango.isBlacklisted('poly@mail.com'));

// !
// !
// !
