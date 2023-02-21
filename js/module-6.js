// !
// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// !
// //===================================================
// const message = document.querySelector('#message');
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector('.btn.active');
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector('.image');
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';

// !
// const text = document.querySelector('.article-text');
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector('.article-title');
// title.textContent = 'Welcome to Bahamas!';

// !
// const text = document.querySelector('#paragraph');

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains('red')); // true

// text.classList.remove('big');
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add('new-class');
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add('a', 'b', 'c');
// console.log(text.classList);

// text.classList.toggle('is-hidden'); // will add is-hidden class
// text.classList.toggle('is-hidden'); // will remove is-hidden class

// // classList has a forEach method
// text.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class
// });

// !
// const button = document.querySelector('.btn');

// button.style.backgroundColor = 'teal';
// button.style.fontSize = '24px';
// button.style.textAlign = 'center';

// console.log(button.style); // inline styles object

// !
// const image = document.querySelector('.image');

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute('src')); // true

// console.log(image.getAttribute('alt')); // "Lake and clouds"

// image.setAttribute('alt', 'Amazing nature');

// console.log(image.getAttribute('alt')); // Amazing nature

// !
// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll('.dishes > li');
// dishes.forEach(dish => {
//   console.log(dish.dataset.id);
// });

// !
// const heading = document.createElement('h1');
// console.log(heading); // <h1></h1>
// console.dir(heading);

// heading.textContent = 'This is a heading';
// console.log(heading); // <h1>This is a heading</h1>
// console.dir(heading);

// const image = document.createElement('img');
// image.src = 'https://placeimg.com/640/480/nature';
// image.alt = 'Nature';
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

// !
// // Напишіть функцію, яка розверає масив у зворотньому напрямку.Метод reverse() не використовувати
// const arrNumber = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// function arrReverse(arr) {
//     return arr.map(
//         (item, index, array) => array[array.length - 1 - index],
//       )
// }

// const newArr = arrNumber.map(
//   (item, index, array) => array[array.length - 1 - index],
// );
// console.log(newArr);

// !
// const list = document.querySelector('.usernames');

// // Adds an item to the end of the list
// const lastItem = document.createElement('li');
// lastItem.textContent = 'Poly';
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement('li');
// firstItem.textContent = 'Ajax';
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement('h2');
// title.textContent = 'USERNAMES';
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement('p');
// text.textContent =
//   'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!';
// list.after(text);

// !
// const text = document.querySelector('.text');
// text.remove();

// !
// const article = document.querySelector('.article');
// console.log(article.innerHTML);

// const title = document.querySelector('.article .title');
// console.log(title.innerHTML);

// const text = document.querySelector('.article .text');
// console.log(text.innerHTML);

// const link = document.querySelector('.article .link');
// console.log(link.innerHTML);

// !
// const title = document.querySelector('.article .title');
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// !
// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// console.log(technologies);
// const list = document.querySelector('.list');

// const markup = technologies
//   .map(technology => `<li class="list-item">${technology}</li>`)
//   .join('');
// console.log(markup);
// console.log(typeof markup);

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// !
// const article = document.querySelector('.article');
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference?
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;

// !
// const list = document.querySelector('.list');

// const newTechnologies = ['React', 'TypeScript', 'Node.js'];
// const markup = newTechnologies
//   .map(technology => `<li class="list-item new">${technology}</li>`)
//   .join('');

// list.insertAdjacentHTML('beforeend', markup);
// list.insertAdjacentHTML('beforebegin', '<h2>Popular technologies</h2>');

// !
// const button = document.querySelector('.my-button');

// button.addEventListener('click', () => {
//   console.log('Button was clicked');
// });

// !
// const button = document.querySelector('.my-button');

// const handleClick = () => {
//   console.log('Button was clicked');
// };

// button.addEventListener('click', handleClick);

// !
// const singleBtn = document.querySelector('#single');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// singleBtn.addEventListener('click', handleClick);

// // ===============================================
// const multiBtn = document.querySelector('#multiple');

// const firstCallback = () => {
//   console.log('First callback!');
// };
// const secondCallback = () => {
//   console.log('Second callback!');
// };
// const thirdCallback = () => {
//   console.log('Third callback!');
// };

// multiBtn.addEventListener('click', firstCallback);
// multiBtn.addEventListener('click', secondCallback);
// multiBtn.addEventListener('click', thirdCallback);

// !
// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector('#btn');

// const handleClick = () => {
//   console.log('click event listener callback');
// };

// addListenerBtn.addEventListener('click', () => {
//   btn.addEventListener('click', handleClick);
//   console.log('click event listener was added to btn');
// });

// removeListenerBtn.addEventListener('click', () => {
//   btn.removeEventListener('click', handleClick);
//   console.log('click event listener was removed from btn');
// });

// !
// const mango = {
//   username: 'Mango',
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector('.js-btn');

// // ✅ Працює
// mango.showUsername();
// console.log(mango.showUsername());

// // ❌ this буде посилатися на button, якщо використовувати showUsername як callback
// btn.addEventListener('click', mango.showUsername); // не працює

// // ✅ Не забувайте прив'язувати контекст методів об'єкта
// btn.addEventListener('click', mango.showUsername.bind(mango));

// !
// const handleClick = event => {
//   console.log(event);
// };

// button.addEventListener('click', handleClick);

// !
// const button = document.querySelector('.btn');

// const handleClick = event => {
//   console.log('event: ', event);
//   console.log('event type: ', event.type);
//   console.log('currentTarget: ', event.currentTarget);
// };

// button.addEventListener('click', handleClick);

// !
// const form = document.querySelector('.register-form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const {
//     elements: { username, password },
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });

// !
// document.addEventListener('keydown', event => {
//   console.log('Keydown: ', event);
// });

// document.addEventListener('keyup', event => {
//   console.log('Keyup: ', event);
// });

// !
// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector('.log-list');
// let keypressCounter = 1;

// document.addEventListener('keydown', logMessage);
// document.addEventListener('keyup', logMessage);
// clearLogBtn.addEventListener('click', reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML('afterbegin', markup);

//   if (type === 'keyup') {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = '';
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// !
// const form = document.querySelector('.form');

// form.addEventListener('submit', handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { login, password },
//   } = event.currentTarget;

//   if (login.value === '' || password.value === '') {
//     return console.log('Please fill in all the fields!');
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// !
// const select = document.querySelector('.pizza-select');
// const textOutput = document.querySelector('.text-output');
// const valueOutput = document.querySelector('.value-output');

// setOutput();

// select.addEventListener('change', setOutput);

// function setOutput() {
//   const selectedOptionValue = select.value;
//   //   console.log(selectedOptionValue);

//   const selectedOptionIndex = select.selectedIndex;
//   //   console.log(selectedOptionIndex);

//   const selectedOptionText = select.options[selectedOptionIndex].text;
//   //   console.log(selectedOptionText);

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// !
// const textInput = document.querySelector('.text-input');
// const output = document.querySelector('.output');

// textInput.addEventListener('input', event => {
//   output.textContent = event.currentTarget.value;
// });

// !
// const textInput = document.querySelector('.text-input');
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener('click', () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener('click', () => {
//   textInput.blur();
// });

// textInput.addEventListener('focus', () => {
//   textInput.value = 'This input has focus';
// });

// textInput.addEventListener('blur', () => {
//   textInput.value = '';
// });

// !
// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// ! --- 1
// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// const listEl = document.querySelector("#categories");
// console.log(listEl);

// const listItemEl = document.querySelectorAll("li.item");
// console.log(`Number of categories: ${listItemEl.length}`);
// // console.log(listItemEl);
// // console.log(typeof listItemEl);

// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).

// categoriesAndNumbersOfCategories();

// function categoriesAndNumbersOfCategories() {
//   const listItemEl = document.querySelectorAll('li.item');
//   console.log(`Number of categories: ${listItemEl.length}`);

//   const animalsTextContent =
//     document.body.querySelector('#categories').firstElementChild
//       .firstElementChild.textContent;
//   console.log(`Category: ${animalsTextContent}`);

//   const animalsChildElementCount =
//     document.body.querySelector('#categories').firstElementChild
//       .lastElementChild.childElementCount;
//   console.log(`Elements: ${animalsChildElementCount}`);

//   const productsTextContent =
//     document.querySelector('#categories').firstElementChild.nextElementSibling
//       .firstElementChild.textContent;
//   console.log(`Category: ${productsTextContent}`);

//   const productsChildElementCount =
//     document.querySelector('#categories').firstElementChild.nextElementSibling
//       .lastElementChild.childElementCount;
//   console.log(`Elements: ${productsChildElementCount}`);

//   const technologiesTextContent =
//     document.body.querySelector('#categories').lastElementChild
//       .firstElementChild.textContent;
//   console.log(`Category: ${technologiesTextContent}`);

//   const technologiesChildElementCount =
//     document.body.querySelector('#categories').lastElementChild.lastElementChild
//       .childElementCount;
//   console.log(`Elements: ${technologiesChildElementCount}`);
// }

// const animalsTextContent =
//   document.body.querySelector("#categories").firstElementChild.firstElementChild
//     .textContent;
// console.log(`Category: ${animalsTextContent}`);

// const animalsChildElementCount =
//   document.body.querySelector("#categories").firstElementChild.lastElementChild
//     .childElementCount;
// console.log(`Elements: ${animalsChildElementCount}`);

// const productsTextContent =
//   document.querySelector("#categories").firstElementChild.nextElementSibling
//     .firstElementChild.textContent;
// console.log(`Category: ${productsTextContent}`);

// const productsChildElementCount =
//   document.querySelector("#categories").firstElementChild.nextElementSibling
//     .lastElementChild.childElementCount;
// console.log(`Elements: ${productsChildElementCount}`);

// const technologiesTextContent =
//   document.body.querySelector("#categories").lastElementChild.firstElementChild
//     .textContent;
// console.log(`Category: ${technologiesTextContent}`);

// const technologiesChildElementCount =
//   document.body.querySelector("#categories").lastElementChild.lastElementChild
//     .childElementCount;
// console.log(`Elements: ${technologiesChildElementCount}`);

// // const listRef = document.querySelector("#categories");
// // const allCategoriesRef = listRef.children;
// // console.log("Number of categories:", allCategoriesRef.length);

// !

// const headerRef = document.createElement('header');
// headerRef.classList.add('header');
// headerRef.style.borderBottom = '1px solid #ececec';
// console.log(headerRef);

// const divContainerRef = document.createElement('div');
// divContainerRef.classList.add('header-container');
// divContainerRef.classList.add('container');
// divContainerRef.style.display = 'flex';
// divContainerRef.style.width = '1200px';
// divContainerRef.style.padding = '0 15px';
// divContainerRef.style.margin = 'margin 0 auto';
// headerRef.append(divContainerRef);

// const navRef = document.createElement('nav');
// navRef.classList.add('header-nav');
// navRef.style.display = 'flex';
// navRef.style.flexGrow = '1';
// divContainerRef.append(navRef);

// const logoLinkRef = document.createElement('a');
// logoLinkRef.classList.add('header-logo');
// logoLinkRef.style.fontSize = '26px';
// logoLinkRef.style.lineHeight = '1.19';
// logoLinkRef.style.fontFamily = 'Raleway';
// logoLinkRef.style.fontSize = 'normal';
// logoLinkRef.style.fontWeight = '700';
// logoLinkRef.style.letterSpacing = '.03em';
// logoLinkRef.style.textDecoration = 'none';
// logoLinkRef.style.display = 'flex';
// logoLinkRef.style.alignItems = 'center';
// navRef.append(logoLinkRef);

// const logoTextContent1 = document.createElement('span');
// logoTextContent1.classList.add('header-logo1');
// logoTextContent1.textContent = 'Web';
// logoTextContent1.style.boxSizing = 'inherit';
// logoLinkRef.append(logoTextContent1);

// const logoTextContent2 = document.createElement('span');
// logoTextContent2.classList.add('header-logo2');
// logoTextContent2.textContent = 'Studio';
// logoTextContent2.style.boxSizing = 'inherit';
// logoLinkRef.append(logoTextContent2);

// document.body.append(headerRef);

// !
// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     // this.color = color
//     console.log('changecolor -> this', this);
//   };

//   //   changeColor()
//   const sweat = {
//     color: 'teal',
//   };

//   sweat.uptadeColor = changeColor;
//   sweat.uptadeColor('red');

//   return sweat.uptadeColor;
// };
// makeChangeColor();

// !
// !
// !
// !
// !
// !
// !
// !
// !
