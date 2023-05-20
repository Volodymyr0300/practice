// ! GET
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));

// // Change this number to fetch different post
// const postId = 15;
// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// ! POST
// const postToAdd = {
//   author: 'Mango',
//   body: 'CRUD is awesome',
// };
// console.log('🚀 ~ file: module-11.js:19 ~ postToAdd:', postToAdd);

// const options = {
//   method: 'POST',
//   body: JSON.stringify(postToAdd),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };
// console.log('🚀 ~ file: module-11.js:28 ~ options:', options);

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// {
//     "id": 1,
//     "author": "Mango",
//     "content": "CRUD is awesome"
//   }

// ! PUT and PUTCH
// // Change value of id property to update different post
// const postToUpdate = {
//   id: 1,
//   body: 'CRUD is really awesome',
// };

// const options = {
//   method: 'PATCH',
//   body: JSON.stringify(postToUpdate),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

// fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log('ERROR' + error));

// {
//     id: 1,
//     author: 'Mango',
//     content: 'CRUD is really awesome',
//   }

// ! DELETE
// const postIdToDelete = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`, {
//   method: 'DELETE',
// })
//   .then(() => console.log('Post deleted'))
//   .catch(error => console.log('Error:', error));

// ! ASYNC
// ? підтвердити його права доступу до цієї сторінки на бекенді.
// ? Для цього потрібно зробити запит до my-api.com/me
// const fetchFriends = () => {
//   return fetch('my-api.com/me').then(token => {
//     console.log(token);
//   });
// };

// !
// ? Потім необхідно зробити запит профілю користувача
// ? з my-api.com/profile, але профіль - неповний,
// ? він містить тільки критично важливу
// ? інформацію: ідентифікатор користувача без списку друзів.
// const fetchFriends = () => {
//   return fetch('my-api.com/me')
//     .then(token => {
//       return fetch(`my-api.com/profile?token=${token}`);
//     })
//     .then(user => {
//       console.log(user.id);
//     });
// };

// !
// ? І тільки після цього можна зробити запит списку друзів
// ? з my-api.com/users/:userId/friends.
// const fetchFriends = () => {
//   return fetch('my-api.com/me')
//     .then(token => {
//       return fetch(`my-api.com/profile?token=${token}`);
//     })
//     .then(user => {
//       return fetch(`my-api.com/users/${user.id}/friends`);
//     });
// };

// fetchFriends()
//   .then(friends => console.log(friends))
//   .catch(error => console.error(error));

// !
// const fetchFriends = async () => {
//   const token = await fetch('my-api.com/me');
//   const user = await fetch(`my-api.com/profile?token=${token}`);
//   const friends = await fetch(`my-api.com/users/${user.id}/friends`);
//   return friends;
// };

// fetchFriends()
//   .then(friends => console.log(friends))
//   .catch(error => console.error(error));

// !
// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await response.json();
//   return users;
// };

// fetchUsers().then(users => console.log(users));

// !
// // Function declaration
// async function foo() {
//   // ...
// }

// // Functional expression
// const foo = async function () {
//   // ...
// };

// // Arrow function
// const foo = async () => {
//   // ...
// };

// // Object method
// const user = {
//   async foo() {
//     // ...
//   },
// };

// // Class method
// class User {
//   async foo() {
//     // ...
//   }
// }

// !
// const fetchUsers = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchUsers();

// !
// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await response.json();
//   return users;
// };

// fetchUsers()
//   .then(users => console.log(users))
//   .catch(error => console.log(error));

// !
// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await response.json();
//   return users;
// };

// // ❌ SyntaxError: await is only valid in async function
// const users = await fetchUsers();

// !
// const fetchUsers = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   const users = await response.json();
//   return users;
// };

// const doStuff = async () => {
//   try {
//     const users = await fetchUsers();
//     console.log(users);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// doStuff();

// !
// const fetchUsers = async () => {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const firstResponse = await fetch(`${baseUrl}/users/1`);
//   const secondResponse = await fetch(`${baseUrl}/users/2`);
//   const thirdResponse = await fetch(`${baseUrl}/users/3`);

//   const firstUser = await firstResponse.json();
//   const secondUser = await secondResponse.json();
//   const thirdUser = await thirdResponse.json();

//   console.log(firstUser, secondUser, thirdUser);
// };

// fetchUsers();

// !
// const fetchUsers = async () => {
//   const baseUrl = 'https://jsonplaceholder.typicode.com';
//   const userIds = [1, 2, 3];

//   // 1. Створюємо масив промісів
//   const arrayOfPromises = userIds.map(async userId => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     return response.json();
//   });

//   // 2. Запускаємо усі проміси паралельно і чекаємо на їх завершення
//   const users = await Promise.all(arrayOfPromises);
//   console.log(users);
// };

// fetchUsers();

// !

// !
