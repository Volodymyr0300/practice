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
