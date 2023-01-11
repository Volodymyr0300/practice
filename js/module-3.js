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
