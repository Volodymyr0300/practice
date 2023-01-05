// const clients = ['Molly', 'Sally', 'Denny'];
// console.log(clients);
// // console.log(clients[0]);
// // console.log(clients[1]);
// // console.log(clients[2]);
// clients[0] = 'Dolly';
// clients[2] = 'Molly';
// console.log(clients);
// // console.log(clients[0]);
// // console.log(clients[1]);
// // console.log(clients[2]);
// console.log(clients.length);
// console.log(clients.length - 1);
// const lastMassiveElement = clients.length - 1;
// console.log(clients[lastMassiveElement]);
// console.log(clients);
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients2 = ['Molly', 'Sally', 'Denny'];
// for (const client of clients2) {
//   console.log(client);
// }

// const string = 'javascript';
// for (const charaster of string) {
//   console.log(charaster);
// }

// const clients2 = ['Molly', 'Sally', 'Denny'];
// const clientNameToFind = 'Denny';
// let message;
// for (const client of clients2) {
//   if (client === clientNameToFind) {
//     message = "Клієнт з таким ім'ям є в базі даних!";
//     break;
//   }
//   message = "Клієнт з таким ім'ям відсутній в базі даних!";
// }
// console.log(message);

// const name = 'Mango';
// console.log();

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.
function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] === 'r' || name[0] === 'R') {
    name = `${name} plays banjo`;
  } else {
    name = `${name} does not play banjo`;
  }
  return name;
}
console.log(areYouPlayingBanjo('rolly'));
