// !
// const arr = [1, 2, 3];
// console.log(arr);
// arr.hello = 'world';
// console.log(arr);
// console.table(arr);
// for (const i of arr) {
//   console.log(i);
// }

// !
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };
// console.log(book);
// console.table(book);

// !
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
// console.log(user);
// console.table(user);

// !
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book.genres;
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// !
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: {
//     country: 'Jamaica',
//     city: 'Ocho Rios',
//   },
//   hobbies: ['swiming', 'music', 'sci-fi'],
// };

// const location = user.location;
// console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // 'Jamaica'

// console.log(user.name);
// console.log(user.location.city);

// const hobbies = user.hobbies;
// console.log(hobbies); // ['swiming', 'music', 'sci-fi']

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // 'swiming'

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// !
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// const bookTitle = book['title'];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book['genres'];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = 'author';
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// !
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };

//   book.rating = 9;
//   book.isPublic = false;
//   book.genres.push("драма");

//   console.log(book.rating); // 9
//   console.log(book.isPublic); // false
//   console.log(book.genres); // ['historical prose', 'adventures', 'драма']

// !
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = 'en';
// book.translations = ['ua', 'ru'];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']

// console.log(book);
// console.table(book);

// !
// const name = 'Генрі Сибола';
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25

// console.log(typeof user.name);
// console.log(user.name);

// !
// const propName = 'name';
// console.log(propName);
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взяте зі значення змінної propName
//   [propName]: 'Генрі Сибола',
// };
// console.log(user);

// console.log(user.name); // 'Генрі Сибола'

// !
// // ✅ Логічно і синтаксично згруповані сутності
// const bookShelf = {
//   books: ['The Last Kingdom', 'Dream Guardian'],
//   // Це метод об'єкта
//   getBooks() {
//     console.log('Цей метод буде повертати всі книги - властивість books');
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log('Цей метод буде додавати нову книгу у властивість books');
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook('Нова книга');

// !
// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     console.log(this);
//   },
// };

// // Перед крапкою знаходиться об'єкт bookShelf,
// // тому, викликаючи метод, this буде зберігати посилання на нього.
// bookShelf.getBooks(); // {books: ['The Last Kingdom'], getBooks: f}

// !
// const object1 = {
//   name: 'John',
//   age: 38,
//   friends: {
//     name1: 'Bill',
//     name2: 'Smit',
//     getNameOfFriend() {
//       console.log(this);
//     },
//   },
// };
// console.log(object1);

// !
// const bookShelf = {
//   books: ['The Last Kingdom'],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook('The Mist');
// bookShelf.addBook('Dream Guardian');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook('The Mist');
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'Dream Guardian']

// !!!
// ???
// !!!
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// const keys = Object.keys(book);
// console.log(keys);

// const values = Object.values(book);
// console.log(values);

// for (const key of keys) {
//   console.log(key);
//   console.log(book[key]);
// }

// for (const value of values) {
//   console.log(value);
// }

// !!!
// ???
// !!!
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }

// !
// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);

// dog.name = 'Манго';

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// !
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// !
// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const values = Object.values(goods); // [6, 3, 4, 7]

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total); // 20

// !!!
// ???
// !!!
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'rating']

// const values = Object.values(book);
// console.log(values); // ['The Last Kingdom', 'Bernard Cornwell', 8.38]

// const entries = Object.entries(book); // !!!
// console.log(entries);
// // [["title", "The Last Kingdom"], ["author", "Bernard Cornwell"], ["rating", 8.38]]

// !
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
//   {
//     title: 'Сон смішної людини',
//     author: 'Федір Достоєвський',
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// console.log(bookNames); // ["The Last Kingdom", "На березі спокійних вод", "Сон смішної людини"]

// let totalRating = 0;

// for (const book of books) {
//   totalRating += book.rating;
// }

// const averageRating = (totalRating / books.length).toFixed(1);
// console.log(averageRating); // 8.2

// !
// // Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:
// // imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// // descr - опис, значення "Spacious apartment in the city center";
// // rating - рейтинг, значення 4;
// // price - ціна, значення 2153;
// // tags - метаінформація, масив ["premium", "promoted", "top"].
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// console.log(apartment);
// console.table(apartment);
// // Оголошена змінна apartment
// // Значення змінної apartment - це об'єкт
// // Об'єкт містить властивість imgUrl
// // Значення властивості imgUrl - це рядок "https://via.placeholder.com/640x480"
// // Об'єкт містить властивість descr
// // Значення властивості descr - це рядок "Spacious apartment in the city center"
// // Об'єкт містить властивість rating
// // Значення властивості rating - це число 4
// // Об'єкт містить властивість price
// // Значення властивості price - це число 2153
// // Об'єкт містить властивість tags
// // Значення властивості tags - це масив ["premium", "promoted", "top"]

// !
// // Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника.
// // Додай йому наступні властивості:
// // name - ім'я власника, значення "Henry";
// // phone - телефон, значення "982-126-1588";
// // email - пошта, значення "henry.carter@aptmail.com".
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// // Оголошена змінна apartment
// // Значення змінної apartment - це об'єкт
// // В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tags зі значеннями
// // В об'єкті apartment присутня властивість owner
// // Значення властивості owner - це об'єкт
// // В об'єкті owner присутня властивість name
// // Значення властивості name - це "Henry"
// // В об'єкті owner присутня властивість phone
// // Значення властивості phone - це "982-126-1588"

// !
// // Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// // aptRating - рейтинг;
// // aptDescr - опис;
// // aptPrice - ціна;
// // aptTags - теги.
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// // Оголошена змінна apartment
// // Значення змінної apartment - це об'єкт
// // В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tags зі значеннями
// // Оголошена змінна aptRating
// // Значення змінної aptRating - це число 4
// // Оголошена змінна aptDescr
// // Значення змінної aptDescr - це рядок "Spacious apartment in the city center"
// // Оголошена змінна aptPrice
// // Значення змінної aptPrice - це число 2153
// // Оголошена змінна aptTags
// // Значення змінної aptTags - це масив рядків ["premium", "promoted", "top"]

// !
// // Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.
// // ownerName - ім'я власника;
// // ownerPhone - телефон власника;
// // ownerEmail - пошта власника;
// // numberOfTags - кількість елементів масиву у властивості tags;
// // firstTag - перший елемент масиву у властивості tags;
// // lastTag - останній елемент масиву у властивості tags.
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line
// // Оголошена змінна apartment за допомогою const
// // Значення змінної apartment - це об'єкт
// // Оголошена змінна ownerName за допомогою const
// // Значення змінної ownerName - це рядок "Henry"
// // Оголошена змінна ownerPhone за допомогою const
// // Значення змінної ownerPhone - це "982-126-1588"
// // Оголошена змінна ownerEmail за допомогою const
// // Значення змінної ownerEmail - це "henry.carter@aptmail.com"
// // Оголошена змінна numberOfTags за допомогою const
// // Значення змінної numberOfTags - це 3
// // Оголошена змінна firstTag за допомогою const
// // Значення змінної firstTag - це "premium"
// // Оголошена змінна lastTag за допомогою const
// // Значення змінної lastTag - це "top"

// !
// // Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей
// // об'єкта apartment, використовуючи синтаксис «квадратних дужок».
// // aptRating - рейтинг;
// // aptDescr - опис;
// // aptPrice - ціна;
// // aptTags - теги.
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line
// // Оголошена змінна apartment
// // Значення змінної apartment - це об'єкт
// // Оголошена змінна aptRating
// // Значення змінної aptRating - це 4
// // Оголошена змінна aptDescr
// // Значення змінної aptDescr - це "Spacious apartment in the city center"
// // Оголошена змінна aptPrice
// // Значення змінної aptPrice - це 2153
// // Оголошена змінна aptTags
// // Значення змінної aptTags - це ["premium", "promoted", "top"]

// !
// // Доповни код, оновивши значення властивостей об'єкта apartment:
// // ціну у властивості price на 5000;
// // рейтинг квартири у властивості rating на 4.7;
// // ім'я власника у вкладеній властивості name на "Henry Sibola";
// // масив тегів у властивості tags, додавши в кінець рядок "trusted".
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
// // Оголошена змінна apartment
// // Значення змінної apartment - це об'єкт
// // Значення вкладеної властивості price - це число 5000
// // Значення вкладеної властивості rating - це число 4.7
// // Значення вкладеної властивості name - це рядок "Henry Sibola"
// // Значення вкладеної властивості tags - це масив ["premium", "promoted", "top", "trusted"]

// !
// // Додай об'єкту apartment кілька нових властивостей:
// // area - площа в квадратних метрах, число 60;
// // rooms - кількість кімнат, число 3;
// // location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// // country - країна, рядок "Jamaica";
// // city - місто, рядок "Kingston".
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// console.table(apartment);

// // Оголошена змінна apartment
// // Значення змінної apartment - це об'єкт
// // Значення вкладеної властивості area - це число 60
// // Значення вкладеної властивості rooms - це число 3
// // Значення вкладеної властивості location - це об'єкт
// // Значення вкладеної властивості location.country - це рядок "Jamaica"
// // Значення вкладеної властивості location.city - це рядок "Kingston"

// !
// // Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price,
// // image і tags зі значеннями зі змінних з аналогічними іменами. Обов'язково використовуй синтаксис коротких властивостей.
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// // Оголошена змінна product
// // Значення змінної product - це об'єкт
// // Значення вкладеної властивості name - це рядок "Repair Droid"
// // Значення вкладеної властивості price - це число 2500
// // Значення вкладеної властивості image - це рядок "https://via.placeholder.com/640x480"
// // Значення вкладеної властивості tags - це масив ["on sale", "trending", "best buy"]

// !
// // Доповни код оголошення об'єкта credentials таким чином,
// // щоб в результаті у нього були дві властивості: email і password,
// // імена яких зберігаються у змінних emailInputName і passwordInputName.
// // Значенням властивості email повинен бути рядок "henry.carter@aptmail.com",
// // а значенням властивості password - рядок "jqueryismyjam".
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
//   // Change code above this line
// };
// // Оголошена змінна credentials
// // Значення змінної credentials - це об'єкт
// // Об'єкт credentials містить властивість email
// // Значення вкладеної властивості email - це рядок "henry.carter@aptmail.com"
// // Об'єкт credentials містить властивість password
// // Значення вкладеної властивості password - це рядок "jqueryismyjam"
// !
// // Перебери об'єкт apartment, використовуючи цикл for...in,
// // і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// // const keysApartment = Object.keys(apartment);
// // console.log(keysApartment);
// // const valuesApartment = Object.values(apartment);
// // console.log(valuesApartment);
// for (const key in apartment) {
//   keys.push(key);
// }
// for (const value in apartment) {
//   values.push(apartment[value]);
// }

// console.log(keys);
// console.log(values);

// // for (const key in keysApartment) {
// //   keys.push(key);
// // }
// // for (const value in valuesApartment) {
// //   values.push(value);
// // }

// // Change code below this line

// // Оголошена змінна apartment
// // Значення змінної apartment - це об'єкт
// // Оголошена змінна keys
// // Значення змінної keys - це масив ["descr", "rating", "price"]
// // Оголошена змінна values
// // Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]

// !
// // Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   // Change code above this line
// }

// // Оголошена змінна advert.
// // Значення змінної advert - це об'єкт.
// // Оголошена змінна apartment.
// // Значення змінної apartment - це об'єкт.
// // Оголошена змінна keys.
// // Значення змінної keys - це масив ["descr", "rating", "price"].
// // Оголошена змінна values.
// // Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].

// !
// // Напиши функцію countProps(object),
// // яка рахує і повертає кількість власних властивостей об'єкта в параметрі object.
// // Використовуй змінну propCount для зберігання кількості властивостей об'єкта.
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }
//   // Change code above this line
//   return propCount;
// }

// // Оголошена функція countProps(object)
// console.log(countProps({})); //повертає 0
// console.log(countProps({ name: 'Mango', age: 2 })); // повертає 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // повертає 3
// // Функція підраховує тільки власні властивості об'єкта

// !
// // Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// // Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
// // і додай в масив values всі значення його властивостей.
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);

// const valueOfApartment = Object.values(apartment);
// for (const value of valueOfApartment) {
//   values.push(value);
// }

// // Оголошена змінна apartment.
// // Значення змінної apartment - це об'єкт.
// // Оголошена змінна keys.
// // Значення змінної keys - це масив ["descr", "rating", "price"].
// // Значення змінної keys отримане за допомогою методу Object.keys().
// // Оголошена змінна values.
// // Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// // Значення змінної values отримане за допомогою циклу for...of.

// !
// // Виконай рефакторинг функції countProps(object),
// // використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   //   for (const key in object) {
//   //     if (object.hasOwnProperty(key)) {
//   //       propCount += 1;
//   //     }
//   //   }

//   const keys = Object.keys(object);
//   for (const key of keys) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }

// // Оголошена функція countProps(object)
// console.log(countProps({})); // повертає 0
// console.log(countProps({ name: 'Mango', age: 2 })); // повертає 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // повертає 3
// // Функція підраховує тільки власні властивості об'єкта
// // Функція використовує метод Object.keys() і, можливо, цикл for...of

// !
// // Запиши у змінну keys масив ключів власних властивостей об'єкта apartment,
// // а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// // Оголошена змінна apartment
// // Значення змінної apartment - це об'єкт
// // Оголошена змінна keys
// // Значення змінної keys - це масив ["descr", "rating", "price"]
// // Оголошена змінна values
// // Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]
// // Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// // Для отримання масиву значень об'єкта apartment використовується Object.values()

// !
// // Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат,
// // де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата.
// // Функція повинна розрахувати загальну суму зарплат співробітників і повернути її.
// // Використовуй змінну totalSalary для зберігання загальної суми зарплати.
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// // Оголошена функція countTotalSalary(salaries)
// console.log(countTotalSalary({})); // повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // повертає 400
// // Функція враховує тільки власні властивості об'єкта

// !
// // Перебери масив об'єктів colors, використовуючи цикл for...of.
// // Додай у масив hexColors значення властивостей hex,
// // а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const key of colors) {
//   hexColors.push(key.hex);
// }
// console.log(hexColors);
// for (const key of colors) {
//   rgbColors.push(key.rgb);
// }
// console.log(rgbColors);

// // Оголошена змінна colors
// // Значення змінної colors - це масив
// // Оголошена змінна hexColors
// // Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// // Оголошена змінна rgbColors
// // Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// !

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
// ];

// for (const book of books) {
//   // Об'єкт книги
//   console.log(book);
//   // Назва
//   console.log(book.title);
//   // Автор
//   console.log(book.author);
//   // Рейтинг
//   console.log(book.rating);
// }

// !
// // Напиши функцію getProductPrice(productName),
// // яка приймає один параметр productName - назва продукту.
// // Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products
// // і повертає його ціну (властивість price).
// // Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   // ? 1. Треба знайти у об‘єкті значее яке міститься в name.
//   // ? 2. Якщо Таке значення є, повернути значення його ціни price.

//   for (const product of products) {
//     // console.log(product);
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// // Оголошена функція getProductPrice(productName).
// console.log(getProductPrice('Radar')); // повертає 1300.
// console.log(getProductPrice('Grip')); // повертає 1200.
// console.log(getProductPrice('Scanner')); // повертає 2700.
// console.log(getProductPrice('Droid')); // повертає 400.
// console.log(getProductPrice('Engine')); // повертає null.

// ! 19 task
// // Напиши функцію getAllPropValues(propName),
// // яка приймає один параметр propName - ім'я (ключ) властивості.
// // Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// // Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line

//   const arr = [];
//   for (const product of products) {
//     // console.log(product);

//     const keys = Object.keys(product);
//     // console.log(keys);
//     // console.log(keys.includes(propName));
//     // console.log(keys.indexOf(propName));
//     const indexOfPropName = keys.indexOf(propName);

//     const values = Object.values(product);
//     // console.log(values);

//     if (keys.includes(propName)) {
//       arr.push(values[indexOfPropName]);
//     }
//   }
//   return arr;

//   // Change code above this line
// }
// // Оголошена функція getAllPropValues(propName)
// console.log(getAllPropValues('name')); // повертає ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues('quantity')); // повертає [4, 3, 7, 9]
// console.log(getAllPropValues('price')); // повертає [1300, 2700, 400, 1200]
// console.log(getAllPropValues('category')); // повертає []

// ! 20 task
// // Напиши функцію calculateTotalPrice(productName),
// // яка приймає один параметр productName - назва товару.
// // Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;

//   for (const i of products) {
//     // console.log(i);

//     // const keys = Object.keys(i);
//     // console.log(keys);

//     const values = Object.values(i);
//     // console.log(values);

//     // const indexOfProductName = values.indexOf(productName);
//     // console.log(indexOfProductName);
//     // console.log(values.indexOf(productName));

//     if (values.includes(productName)) {
//       totalPrice = values[1] * values[2];
//     }
//     // console.log(values.includes(productName));
//   }
//   return totalPrice;
//   // Change code above this line
// }

// // Оголошена функція calculateTotalPrice(productName)
// console.log(calculateTotalPrice('Blaster')); // повертає 0
// console.log(calculateTotalPrice('Radar')); // повертає 5200
// console.log(calculateTotalPrice('Droid')); // повертає 2800
// console.log(calculateTotalPrice('Grip')); // повертає 10800
// console.log(calculateTotalPrice('Scanner')); // повертає 8100

// !
// const temps = [14, -4, 25, 8, 11];

// // В консолі буде масив
// console.log(temps);
// // ❌ Так не спрацює, тому що передаємо цілий масив
// console.log(Math.max(temps)); // NaN

// // В консолі буде набір окремих чисел
// console.log(...temps);
// // ✅ Розподілимо колекцію елементів у якості окремих аргументів
// console.log(Math.max(...temps)); // 25

// !
// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]
// console.log(temps);
// console.log(copyOfTemps === temps);

// const arr = [1, 2, 3, 4, 5];
// const secondCopyOfTemps = [...temps, ...arr, ...copyOfTemps];
// console.log(secondCopyOfTemps);

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// !
// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// !
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }

// !
// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }

// !
// function multiply(...args) {
//   console.log(args); // масив усіх аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// !
// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// !
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// const accessType = book.isPublic ? 'публічному' : 'закритому';
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;

// console.log(accessType);
// console.log(message);

// !
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// // Деструктуризуємо
// const { title, author, isPublic, rating, coverImage } = book;
// console.log(coverImage); // undefined

// const accessType = isPublic ? 'публічному' : 'закритому';
// const message = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

// console.log(accessType);
// console.log(message);
// console.log(book);

// !
// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
// };

// // Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
// const {
//   title,
//   coverImage = 'https://via.placeholder.com/640/480',
//   author,
// } = book;

// console.log(title); // The Last Kingdom
// console.log(author); // Bernard Cornwell
// console.log(coverImage); // https://via.placeholder.com/640/480

// !
// const firstBook = {
//   title: 'The Last Kingdom',
//   coverImage:
//     'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
// };

// const {
//   title: firstTitle,
//   coverImage: firstCoverImage = 'https://via.placeholder.com/640/480',
// } = firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const secondBook = {
//   title: 'Сон смішної людини',
// };

// const {
//   title: secondTitle,
//   coverImage: secondCoverImage = 'https://via.placeholder.com/640/480',
// } = secondBook;

// console.log(secondTitle); // Сон смішної людини
// console.log(secondCoverImage); // https://via.placeholder.com/640/480/ https://via.placeholder.com/640/480

// !
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'На березі спокійних вод',
//     author: 'Роберт Шеклі',
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.author);
//   console.log(book.rating);
// }

// for (const book of books) {
//   const { title, author, rating } = book;

//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// !
// const user = {
//   name: 'Jacques Gluke',
//   tag: 'jgluke',
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes = 0 },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes); // 1308

// !
// const rgb = [200, 255, 100];
// const [red, green, blue] = rgb;

// console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"
// const [...args] = rgb;
// console.log(...args);
// console.log(rgb);

// !
// const rgb = [200, 100, 255];

// const [red, green, blue, alfa = 0.3] = rgb;

// console.log(`R:${red},G:${green},B:${blue},Alfa:${alfa}`); // "R:200,G:100,B:255,Alfa:0.3"

// !
// const rgb = [200, 255, 100];

// const [red, ...colors] = rgb;

// console.log(red); // "200"
// console.log(colors); // [255, 100]

// !
// const rgb = [200, 100, 255];

// const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"

// !
// const numbers = [0, 5, 10, ...[1, 2, 3, 1000, 5, 5000], 4, 5, 1];
// console.log(numbers);

// !
// // Надійшов триденний прогноз максимальних температур
// // і ми рахуємо середню температуру за три дні (meanTemperature).
// // Заміни оголошення змінних yesterday, today і tomorrow однією
// // операцією деструктуризації властивостей об'єкта highTemperatures.
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);

// // Оголошена змінна highTemperatures
// // Значення змінної highTemperatures - це об'єкт
// // Оголошена змінна yesterday за допомогою деструктуризації
// // Значення змінної yesterday - це число 28
// // Оголошена змінна today за допомогою деструктуризації
// // Значення змінної today - це число 26
// // Оголошена змінна tomorrow за допомогою деструктуризації
// // Значення змінної tomorrow - це число 33
// // Оголошена змінна meanTemperature
// // Значення змінної meanTemperature - це число 29
// // Використовується синтаксис деструктуризації об'єкта highTemperatures

// !
// // У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди.
// // Заміни оголошення змінних yesterday, today, tomorrow і icon
// // однією операцією деструктуризації властивостей об'єкта highTemperatures.
// // Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// // Оголошена змінна highTemperatures
// // Значення змінної highTemperatures - це об'єкт
// // Оголошена змінна highTemperatures
// // Значення змінної highTemperatures - це об'єкт
// // Оголошена змінна yesterday за допомогою деструктуризації
// // Значення змінної yesterday - це число 28
// // Оголошена змінна today за допомогою деструктуризації
// // Значення змінної today - це число 26
// // Оголошена змінна tomorrow за допомогою деструктуризації
// // Значення змінної tomorrow - це число 33
// // Оголошена змінна icon за допомогою деструктуризації
// // Значення змінної icon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// // Використовується деструктуризація об'єкта

// !
// // Заміни оголошення змінних highYesterday, highToday,
// // highTomorrow і highIcon однією операцією деструктуризації властивостей об'єкта highTemperatures.
// // Задай значення за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// // const highYesterday = highTemperatures.yesterday;
// // const highToday = highTemperatures.today;
// // const highTomorrow = highTemperatures.tomorrow;
// // const highIcon = highTemperatures.icon;
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// console.log(highTemperatures);
// console.log(highTemperatures.highIcon);
// console.log(highYesterday);
// console.log(highToday);
// console.log(highTomorrow);
// console.log(highIcon);

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// // Оголошена змінна highTemperatures
// // Значення змінної highTemperatures - це об'єкт
// // Оголошена змінна highYesterday
// // Значення змінної highYesterday - це число 28
// // Оголошена змінна highToday
// // Значення змінної highToday - це число 26
// // Оголошена змінна highTomorrow
// // Значення змінної highTomorrow - це число 33
// // Оголошена змінна highIcon
// // Значення змінної highIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// // Використовується деструктуризація об'єкта

// !
// // Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// // for (const color of colors) {
// //   hexColors.push(color.hex);
// //   rgbColors.push(color.rgb);
// // }

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// // Оголошена змінна colors
// // Значення змінної colors - це масив
// // Оголошена змінна hexColors
// // Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// // Оголошена змінна rgbColors
// // Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// // Для перебирання масиву використовується цикл for...of
// // В циклі for...of використовується деструктуризація об'єкта

// !
// // Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами,
// // а також необов'язковими іконками.
// // Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast.
// // Задай значення за замовчуванням для іконок,
// // змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     high: highTomorrow,
//     low: lowTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;
// console.log();

// // Оголошена змінна forecast
// // Значення змінної forecast - це об'єкт
// // Оголошена змінна highToday за допомогою деструктуризації
// // Значення змінної highToday - це число 32
// // Оголошена змінна lowToday за допомогою деструктуризації
// // Значення змінної lowToday - це число 28
// // Оголошена змінна todayIcon за допомогою деструктуризації
// // Значення змінної todayIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// // Оголошена змінна highTomorrow за допомогою деструктуризації
// // Значення змінної highTomorrow - це число 31
// // Оголошена змінна lowTomorrow за допомогою деструктуризації
// // Значення змінної lowTomorrow - це число 27
// // Оголошена змінна tomorrowIcon за допомогою деструктуризації
// // Значення змінної tomorrowIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// // Використовується синтаксис деструктуризації об'єкта highTemperatures

// !
// // Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.
// // {
// //     today: { low: 10, high: 20 },
// //     tomorrow: { low: 20, high: 30 }
// // }
// //   Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією
// // операцією деструктуризації властивостей об'єкта forecast.

// // Change code below this line
// function calculateMeanTemperature(forecast) {
//   //   const todayLow = forecast.today.low;
//   //   const todayHigh = forecast.today.high;
//   //   const tomorrowLow = forecast.tomorrow.low;
//   //   const tomorrowHigh = forecast.tomorrow.high;
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// // Оголошена функція calculateMeanTemperature(forecast)
// // В тілі функції використовується деструктуризація об'єкта
// // В тілі функції оголошена змінна todayHigh за допомогою деструктуризації
// // В тілі функції оголошена змінна todayLow за допомогою деструктуризації
// // В тілі функції оголошена змінна tomorrowLow за допомогою деструктуризації
// // В тілі функції оголошена змінна tomorrowHigh за допомогою деструктуризації

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   }),
// ); // повертає 28.5
// console.log(
//   calculateMeanTemperature({
//     today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 },
//   }),
// ); // повертає 37

// !
// // У змінній scores зберігається масив результатів тестування.
// // Використовуючи розподіл і методи Math.max() і Math.min(),
// // доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// console.log(bestScore);

// const worstScore = Math.min(...scores);
// console.log(worstScore);

// // Оголошена змінна scores
// // Значення змінної scores - це масив [89, 64, 42, 17, 93, 51, 26]
// // Оголошена змінна bestScore
// // Значення змінної bestScore - це число 93
// // Оголошена змінна worstScore
// // Значення змінної worstScore - це число 17
// // Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві scores
// // Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві scores

// !
// // У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються
// // результати тестування окремих груп. Використовуючи розподіл, доповни код таким чином, щоб:
// // У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// // У змінній bestScore був найвищий загальний бал.
// // У змінній worstScore був найнижчий загальний бал.
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// console.log(allScores);

// const bestScore = Math.max(...allScores);
// console.log(bestScore);

// const worstScore = Math.min(...allScores);
// console.log(worstScore);

// // Оголошена змінна firstGroupScores
// // Значення змінної firstGroupScores - це масив [64, 42, 93]
// // Оголошена змінна secondGroupScores
// // Значення змінної secondGroupScores - це масив [89, 14, 51, 26]
// // Оголошена змінна thirdGroupScores
// // Значення змінної thirdGroupScores - це масив [29, 47, 18, 97, 81]
// // Оголошена змінна allScores.
// // Значення змінної allScores - це масив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// // Оголошена змінна bestScore
// // Значення змінної bestScore - це число 97
// // Оголошена змінна worstScore
// // Значення змінної worstScore - це число 14
// // Для присвоєння значення змінної allScores використовувався синтаксис ... для заповнення масиву
// // Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві allScores
// // Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві allScores

// !
// // В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням,
// // які зберігаються у змінній defaultSettings. Під час створення тесту,
// // усі або частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings.

// // Для того щоб отримати фінальні налаштування тесту,
// // необхідно взяти налаштування за замовчуванням
// // і поверх них застосувати перевизначені налаштування.
// // Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// // Оголошена змінна defaultSettings
// // Значення змінної defaultSettings - це об'єкт
// // Оголошена змінна overrideSettings
// // Значення змінної overrideSettings - це об'єкт
// // Оголошена змінна finalSettings
// // Значення змінної finalSettings - це об'єкт
// // Значення властивості finalSettings.theme дорівнює "light"
// // Значення властивості finalSettings.public дорівнює "false"
// // Значення властивості finalSettings.withPassword дорівнює "true"
// // Значення властивості finalSettings.minNumberOfQuestions дорівнює 10
// // Значення властивості finalSettings.timePerQuestion дорівнює 30
// // Для присвоєння значення змінній finalSettings використовується синтаксис ...

// ! 30
// // Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// // text - текст завдання.
// // category - категорія завдання.
// // priority - пріоритет завдання.
// // Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data.
// // У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// // В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми.
// // Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням,
// // що зберігаються в однойменних локальних змінних.
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   const newObject = { category, priority, completed, ...data };
//   return newObject;
//   // Change code above this line
// }

// // Оголошена функція makeTask(data)
// console.log(makeTask({}));
// // повертає { category: "General", priority: "Normal", completed: false }
// console.log(
//   makeTask({
//     category: 'Homemade',
//     priority: 'Low',
//     text: 'Take out the trash',
//   }),
// );
// // повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: 'Finance', text: 'Take interest' }));
// // повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ priority: 'Low', text: 'Choose shampoo' }));
// // повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(makeTask({ text: 'Buy bread' }));
// // повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// !
// // Використовуючи операцію rest, доповни код функції add() таким чином,
// // щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.

// // Change code below this line
// function add(...args) {
//   let sum = 0;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
//   // Change code above this line
// }

// // Оголошена функція add
// // Функція add використовує параметр args
// // Для збирання аргументів у змінну args, у підписі функції використовується синтаксис ... (оператор rest)
// console.log(add(15, 27)); // повертає 42
// console.log(add(12, 4, 11, 48)); // повертає 75
// console.log(add(32, 6, 13, 19, 8)); // повертає 78
// console.log(add(74, 11, 62, 46, 12, 36)); // повертає 241

// !
// // Функція addOverNum() рахує суму всіх аргументів.
// // Зміни параметри і тіло функції addOverNum() таким чином,
// // щоб вона рахувала суму тільки тих аргументів, які більші за задане число.
// // Це число повинно бути першим параметром функції.

// // Change code below this line
// function addOverNum(num, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > num) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }

// // Оголошена функція addOverNum()
// console.log(addOverNum(50, 15, 27)); // повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // повертає 218

// ! 33
// // Функція findMatches() приймає довільну кількість аргументів.
// // Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

// // Доповни код функції таким чином, щоб вона повертала новий масив matches,
// // в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

// // Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2],
// // тому що тільки вони є в масиві першого аргументу.

// // Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (const arr of array) {
//     for (const arg of args) {
//       if (arr === arg) {
//         matches.push(arg);
//       }
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// // Оголошена функція findMatches()
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // повертає [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // повертає [17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // повертає [24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // повертає []

// !
// // Додай об'єкту bookShelf ще два методи,
// // які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).

// // Метод removeBook(bookName) буде видаляти книгу за назвою.
// // Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName.

// // Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.
// // Повертає рядок "Updating book <стара назва> to <нова назва>",
// // де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },

//   // Change code above this line
// };

// // Оголошена змінна bookShelf
// // Значення змінної bookShelf - це об'єкт
// // Значення властивості bookShelf.getBooks - це метод об'єкта
// console.log(bookShelf.getBooks()); // повертає рядок "Returning all books"
// // Значення властивості bookShelf.addBook - це метод об'єкта
// console.log(bookShelf.addBook('Haze')); // повертає рядок "Adding book Haze"
// // Значення властивості bookShelf.removeBook - це метод об'єкта
// console.log(bookShelf.removeBook('Red sunset')); // повертає рядок "Deleting book Red sunset"
// // Значення властивості bookShelf.updateBook - це метод об'єкта
// console.log(bookShelf.updateBook('Sands of dune', 'Dune')); // повертає рядок "Updating book Sands of dune to Dune"

// !
// // Доповни метод updateBook(oldName, newName) таким чином,
// // щоб він змінював назву книги з oldName на newName у властивості books.
// // Використовуй indexOf() для того, щоб знайти потрібний елемент масиву,
// // і splice() для того, щоб замінити цей елемент.
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     console.log(this.books);
//     const indexOfBooksName = this.books.indexOf(oldName);
//     // console.log(indexOfBooksName);
//     this.books.splice(indexOfBooksName, 1, newName);
//     // console.log(this.books);
//     return this.books;
//     // Change code above this line
//   },
// };

// // Оголошена змінна bookShelf
// // Значення змінної bookShelf - це об'єкт
// // Значення властивості bookShelf.updateBook - це метод об'єкта
// console.log(bookShelf.updateBook('Haze', 'Dungeon chronicles'));
// // значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.updateBook('The last kingdom', 'Dune'));
// // значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

// !
// // До нас звернулася власниця крамниці зілля «У старої жаби»
// // і замовила програму для ведення інвентарю - додавання,
// // видалення, пошуку та оновлення зілля.
// // Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.

// const atTheOldToad = {
//   // Change code below this line
//   potions: [],

//   // Change code above this line
// };

// // Оголошена змінна atTheOldToad
// // Значення змінної atTheOldToad - це об'єкт
// // Значення властивості atTheOldToad.potions - це масив []

// !
// // // Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.
// // const atTheOldToad = {
// //   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
// //   // Change code below this line
// //   getPotions() {
// //     return this.potions;
// //   },
// //   // Change code above this line
// // };

// // // Оголошена змінна atTheOldToad
// // // Значення змінної atTheOldToad - це об'єкт
// // // Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// // // Значення властивості atTheOldToad.getPotions - це метод об'єкта
// // // Виклик методу atTheOldToad.getPotions() повертає ["Speed potion", "Dragon breath", "Stone skin"]

// // !
// // Доповни метод addPotion(potionName) таким чином,
// // щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//     return this.potions.push(potionName);
//     // Change code above this line
//   },
// };

// // Оголошена змінна atTheOldToad
// // Значення змінної atTheOldToad - це об'єкт
// // Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// // Значення властивості atTheOldToad.addPotion - це метод об'єкта

// // Після першого виклику методу atTheOldToad.addPotion("Invisibility"),
// // у властивості potions буде масив ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]

// // Після другого виклику методу atTheOldToad.addPotion("Power potion"),
// // у властивості potions буде масив ["Speed potion", "Dragon breath",
// // "Stone skin", "Invisibility", "Power potion"]

// !
// // Доповни метод removePotion(potionName) таким чином,
// // щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//     // Change code above this line
//   },
// };

// // Оголошена змінна atTheOldToad
// // Значення змінної atTheOldToad - це об'єкт
// // Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// // Значення властивості atTheOldToad.removePotion - це метод об'єкта
// // Після першого виклику методу atTheOldToad.removePotion("Dragon breath"),
// // у властивості potions буде масив ["Speed potion", Stone skin"]
// // Після другого виклику методу atTheOldToad.removePotion("Speed potion"),
// // у властивості potions буде масив ["Stone skin"]

// !
// // Доповни метод updatePotionName(oldName, newName) таким чином,
// // щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//     // Change code above this line
//   },
// };

// // Оголошена змінна atTheOldToad
// // Значення змінної atTheOldToad - це об'єкт
// // Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// // Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// // Після першого виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
// // у властивості potions буде масив ["Speed potion", "Polymorth", "Stone skin"]
// // Після другого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"),
// // у властивості potions буде масив ["Speed potion", "Polymorth", "Invisibility"]

// !

// // Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям,
// // але й ціною, а в майбутньому, можливо, й іншими характеристиками.
// // Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями.

// // {
// //   name: "Dragon breath",
// //   price: 700
// // }
// // Виконай рефакторинг методів об'єкта atTheOldToad таким чином,
// // щоб вони працювали не з масивом рядків, а з масивом об'єктів.

// // getPotions() - метод для отримання всього зілля.
// // Повертає значення властивості potions.
// // addPotion(newPotion) - додає зілля newPotion (вже об'єкт) в масив
// // у властивості potions, але тільки, якщо такого зілля ще немає в інвентарі.
// // В іншому випадку повертається рядок.
// // removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву
// // у властивості potions.
// // updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля
// // з назвою oldName на newName в масиві potions.

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     // if (this.potions.includes(newPotion)) {
//     //   return `Error! Potion ${newPotion} is already in your inventory!`;
//     // }
//     for (const arr of this.potions) {
//       //   console.log(arr);
//       const values = Object.values(arr);
//       for (const value of values) {
//         // console.log(value);
//         const newPotionValues = Object.values(newPotion);
//         for (const newPotionValue of newPotionValues) {
//           if (newPotionValue === value) {
//             return `Error! Potion ${newPotionValue} is already in your inventory!`;
//           }
//         }
//       }
//     }
//     return this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     // const potionIndex = this.potions.indexOf(potionName);
//     // if (potionIndex === -1) {
//     //   return `Potion ${potionName} is not in inventory!`;
//     // }
//     for (const arr of this.potions) {
//       const values = Object.values(arr);
//       for (const value of values) {
//         if (value === potionName) {
//           return this.potions.splice(this.potions.indexOf(arr), 1);
//         }
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     // const potionIndex = this.potions.indexOf(oldName);
//     // if (potionIndex === -1) {
//     //   return `Potion ${oldName} is not in inventory!`;
//     // }
//     // this.potions.splice(potionIndex, 1, newName);

//     for (const arr of this.potions) {
//       console.log(arr);
//       const values = Object.values(arr);
//       for (const value of values) {
//         console.log(value);
//         if (value === oldName) {
//           console.log(value);
//           console.log('we find it');
//           return (arr.name = newName);
//         }
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

// // Оголошена змінна atTheOldToad
// // Значення змінної atTheOldToad - це об'єкт
// // Значення властивості atTheOldToad.getPotions - це метод об'єкта
// console.log(atTheOldToad.getPotions());
// // повертає [
// // { name: "Speed potion", price: 460 },
// // { name: "Dragon breath", price: 780 },
// // { name: "Stone skin", price: 520 }
// //  ]

// // // Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// // // Для вихідного об'єкта після виклику методу
// // console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// // // в масиві potions останнім елементом буде цей об'єкт

// // // Для вихідного об'єкта після виклику методу
// // console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// // // в масиві potions останнім елементом буде цей об'єкт

// // console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// // atTheOldToad.addPotion({ name: 'Power potion', price: 270 });

// // // Якщо зілля, що додається, вже є в масиві potions,
// // //  метод addPotion повертає рядок з текстом з вихідного коду

// // // Якщо зілля, що додається, вже є в масиві potions,
// // // метод addPotion не додає в нього переданий об'єкт

// // // Для вихідного об'єкта після виклику
// // console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// // // масив potions не змінюється
// // // Для вихідного об'єкта після виклику
// // console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// // // массив potions не змінюється

// // Для вихідного об'єкта виклик
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// // повертає рядок "Error! Potion Dragon breath is already in your inventory!"

// // Для вихідного об'єкта виклик
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// // повертає рядок "Error! Potion Stone skin is already in your inventory!"
// // Значення властивості atTheOldToad.removePotion - це метод об'єкта

// // // Для вихідного об'єкта після виклику методу
// // console.log(atTheOldToad.removePotion('Dragon breath'));
// // // у властивості potions буде масив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// // console.log(atTheOldToad.potions);

// // // Для вихідного об'єкта після виклику методу
// // console.log(atTheOldToad.removePotion('Speed potion'));
// // // у властивості potions буде масив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// // console.log(atTheOldToad.potions);

// // // Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// // // Для вихідного об'єкта після виклику методу
// // console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// // console.log(atTheOldToad.potions);
// // // у властивості potions буде масив [
// // // { name: "Speed potion", price: 460 },
// // // { name: "Polymorth", price: 780 },
// // // { name: "Stone skin", price: 520 }
// // //  ]

// // // Для вихідного об'єкта після виклику методу
// // console.log(
// //   atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'),
// // );
// // // у властивості potions буде масив [
// // // { name: "Speed potion", price: 460 },
// // // { name: "Dragon breath", price: 780 },
// // // { name: "Invulnerability potion", price: 520 }
// // //  ]

// console.log(atTheOldToad.potions);

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
