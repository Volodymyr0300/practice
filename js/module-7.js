// !
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const descendant = document.querySelector('#descendant');

// parent.addEventListener('click', () => {
//   console.log('First log');
// });

// child.addEventListener('click', () => {
//   console.log('Second log');
// });

// descendant.addEventListener('click', () => {
//   console.log('Third log');
// });

// !
// const parent = document.querySelector('#parent');

// parent.addEventListener('click', event => {
//   console.log('event.target: ', event.target);
//   console.log('event.currentTarget: ', event.currentTarget);
// });

// !
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const descendant = document.querySelector('#descendant');

// parent.addEventListener('click', () => {
//   alert(
//     'Parent click handler. This alert will not appear when clicking on Descendant, the event will not reach here!',
//   );
// });

// child.addEventListener('click', () => {
//   alert(
//     'Child click handler. This alert will not appear when clicking on Descendant, the event will not reach here!',
//   );
// });

// descendant.addEventListener('click', event => {
//   event.stopPropagation();
//   alert('Descendant click handler');
// });

// !
// const colorPalette = document.querySelector('.color-palette');
// const output = document.querySelector('.output');

// colorPalette.addEventListener('click', selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomColor();
//     const item = document.createElement('button');
//     item.type = 'button';
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add('item');
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomColor() {
//   return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
// }

// function getRandomHex() {
//   return Math.round(Math.random() * 256)
//     .toString(16)
//     .padStart(2, '0');
// }

// !
// const output = document.querySelector('.output');
// let scrollEventCounter = 0;

// document.addEventListener('scroll', () => {
//   scrollEventCounter += 1;
//   output.textContent = scrollEventCounter;
// });

// !
// const result = _.add(2, 3);
// console.log(result); // 5

// !
// const vanillaOutput = document.querySelector('.output.vanilla');
// const throttledOutput = document.querySelector('.output.throttled');
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
// };

// document.addEventListener('scroll', () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300),
// );

// !
// const vanillaOutput = document.querySelector('.output.vanilla');
// const throttledOutput = document.querySelector('.output.throttled');
// const debouncedOutput = document.querySelector('.output.debounced');
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   debounced: 0,
// };

// document.addEventListener('scroll', () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300),
// );

// document.addEventListener(
//   'scroll',
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300),
// );

// !
// const vanillaOutput = document.querySelector('.output.vanilla');
// const throttledOutput = document.querySelector('.output.throttled');
// const trailingOutput = document.querySelector('.output.trailing');
// const leadingOutput = document.querySelector('.output.leading');
// const eventCounter = {
//   vanilla: 0,
//   throttled: 0,
//   trailing: 0,
//   leading: 0,
// };

// // Trailing debounce
// document.addEventListener(
//   'scroll',
//   _.debounce(() => {
//     eventCounter.trailing += 1;
//     trailingOutput.textContent = eventCounter.trailing;
//   }, 300),
// );

// // Leading debounce
// document.addEventListener(
//   'scroll',
//   _.debounce(
//     () => {
//       eventCounter.leading += 1;
//       leadingOutput.textContent = eventCounter.leading;
//     },
//     300,
//     { trailing: false, leading: true },
//   ),
// );

// document.addEventListener('scroll', () => {
//   eventCounter.vanilla += 1;
//   vanillaOutput.textContent = eventCounter.vanilla;
// });

// document.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300),
// );

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
