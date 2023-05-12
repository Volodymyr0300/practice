// // Will run first
// console.log('First log');

// setTimeout(() => {
//   // Will run last, after 2000 milliseconds
//   console.log('Second log');
// }, 2000);

// // Will run second
// console.log('Third log');

// !

// const onClick = () => {
//   setTimeout(() => {
//     console.log('I love async JS!');
//   }, 2000);
// };

// console.log(onClick());

// !
// const greet = () => {
//   console.log('Hello!');
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);

// !
// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');
// let timerId = null;

// startBtn.addEventListener('click', () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });

// !
// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"
// console.log(typeof date);

// console.log(date.toString());
// console.log(typeof date.toString());

// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// !
// console.log(new Date(0));
// // "Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)"

// console.log(new Date(15000));
// // "Thu Jan 01 1970 03:00:15 GMT+0300 (Eastern European Standard Time)"

// !
// const date = new Date();
// console.log(date.getTime()); // 1624021654154

// !
// const teamMeetingDate = new Date('March 16, 2030');
// console.log(teamMeetingDate);
// // "Mon Mar 16 2030 00:00:00 GMT+0200 (Eastern European Standard Time)"

// const preciseTeamMeetingDate = new Date('March 16, 2030 14:25:00');
// console.log(preciseTeamMeetingDate);
// // "Mon Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// !
// new Date('2030-03-16');
// new Date('2030-03');
// new Date('2018');
// new Date('03/16/2030');
// new Date('2030/03/16');
// new Date('2030/3/16');
// new Date('March 16, 2030');
// new Date('March 16, 2030 14:25:00');
// new Date('2030-03-16 14:25:00');
// new Date('2030-03-16T14:25:00');
// new Date('16 March 2030');

// !
// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date);
// // Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)

// !
// const date = new Date();
// console.log('Date: ', date);

// // Повертає день місяця від 1 до 31
// console.log('getDate(): ', date.getDate());

// // Повертає день тижня від 0 до 6
// console.log('getDay(): ', date.getDay());

// // Повертає місяць від 0 до 11
// console.log('getMonth(): ', date.getMonth());

// // Повертає рік з 4 цифр
// console.log('getFullYear(): ', date.getFullYear());

// // Повертає години
// console.log('getHours(): ', date.getHours());

// // Повертає хвилини
// console.log('getMinutes(): ', date.getMinutes());

// // Повертає секунди
// console.log('getSeconds(): ', date.getSeconds());

// // Повертає мілісекунди
// console.log('getMilliseconds(): ', date.getMilliseconds());

// !
// const date = new Date();
// console.log('Date: ', date);

// // Повертає день місяця від 1 до 31
// console.log('getUTCDate(): ', date.getUTCDate());

// // Повертає день тижня від 0 до 6
// console.log('getUTCDay(): ', date.getUTCDay());

// // Повертає місяць від 0 до 11
// console.log('getUTCMonth(): ', date.getUTCMonth());

// // Повертає рік з 4 цифр
// console.log('getUTCFullYear(): ', date.getUTCFullYear());

// // Повертає години
// console.log('getUTCHours(): ', date.getUTCHours());

// // Повертає хвилини
// console.log('getUTCMinutes(): ', date.getUTCMinutes());

// // Повертає секунди
// console.log('getUTCSeconds(): ', date.getUTCSeconds());

// // Повертає мілісекунди
// console.log('getUTCMilliseconds(): ', date.getUTCMilliseconds());

// !
// const date = new Date('March 16, 2030 14:25:00');

// date.setMinutes(50);
// // "Sat Mar 16 2030 14:50:00 GMT+0200"

// date.setFullYear(2040, 4, 8);
// // "Tue May 08 2040 14:50:00 GMT+0300"

// console.log(date);

// !
// const date = new Date('March 16, 2030 14:25:00');

// date.toString();
// // "Sat Mar 16 2030 14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toTimeString();
// // "14:25:00 GMT+0200 (Eastern European Standard Time)"

// date.toLocaleTimeString();
// // "2:25:00 PM"

// date.toUTCString();
// // "Sat, 16 Mar 2030 12:25:00 GMT"

// date.toDateString();
// // "Sat Mar 16 2030"

// date.toISOString();
// // "2030-03-16T12:25:00.000Z"

// date.toLocaleString();
// // "3/16/2030, 2:25:00 PM"

// date.getTime();
// // 1899894300000

// !
// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Will run first
// console.log('Before promise.then()');

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log('onResolve call inside promise.then()');
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log('onReject call inside promise.then()');
//     console.log(error); // "Error! Error passed to reject function"
//   },
// );

// // Will run second
// console.log('After promise.then()');

// !
// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// !
// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// promise
//   .then(value => console.log(value)) // "Success! Value passed to resolve function"
//   .catch(error => console.log(error)) // "Error! Error passed to reject function"
//   .finally(() => console.log('Promise settled')); // "Promise settled"

// !
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Final task');
//   });

// !
// const fetchUserFromServer = (username, onSuccess, onError) => {
//   console.log(`Fetching data for ${username}`);

//   setTimeout(() => {
//     // Change value of isSuccess variable to simulate request status
//     const isSuccess = true;

//     if (isSuccess) {
//       onSuccess('success value');
//     } else {
//       onError('error');
//     }
//   }, 2000);
// };

// const onFetchSuccess = user => {
//   console.log(user);
// };

// const onFetchError = error => {
//   console.error(error);
// };

// fetchUserFromServer('Mango', onFetchSuccess, onFetchError);

// !
// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve('success value');
//       } else {
//         reject('error');
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer('Mango')
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

// !
// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA value', 1000);
// const promiseB = makePromise('promiseB value', 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));

// !
// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA value', 1000);
// const promiseB = makePromise('promiseB value', 3000);

// Promise.race([promiseA, promiseB])
//   .then(value => console.log(value)) // "promiseA value"
//   .catch(error => console.log(error));

// !
// // Fulfilled promise
// new Promise(resolve => resolve('success value')).then(value =>
//   console.log(value),
// );

// Promise.resolve('success value').then(value => console.log(value));

// // Rejected promise
// new Promise((resolve, reject) => reject('error')).catch(error =>
//   console.error(error),
// );

// Promise.reject('error').catch(error => console.error(error));

// !
// const makeGreeting = guestName => {
//   if (guestName === '' || guestName === undefined) {
//     return {
//       success: false,
//       message: 'Guest name must not be empty',
//     };
//   }

//   return {
//     success: true,
//     message: `Welcome ${guestName}`,
//   };
// };

// const result = makeGreeting('Mango');

// if (result.success) {
//   console.log(result.message);
// } else {
//   console.error(result.message);
// }

// !
// const makeGreeting = (guestName, onSuccess, onError) => {
//   if (guestName === '' || guestName === undefined) {
//     return onError('Guest name must not be empty');
//   }
//   onSuccess(`Welcome ${guestName}`);
// };

// makeGreeting(
//   'Mango',
//   greeting => console.log(greeting),
//   error => console.error(error),
// );

// !
// const makeGreeting = guestName => {
//   if (guestName === '' || guestName === undefined) {
//     return Promise.reject('Guest name must not be empty');
//   }

//   return Promise.resolve(`Welcome ${guestName}`);
// };

// makeGreeting('Mango')
//   .then(greeting => console.log(greeting))
//   .catch(error => console.error(error));

// // !

// const a = makeGreeting;

// !
// !
// !
// !
// !
// !
// !
// !
// !
