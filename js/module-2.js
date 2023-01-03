const clients = ['Molly', 'Sally', 'Denny'];
console.log(clients);
// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);
clients[0] = 'Dolly';
clients[2] = 'Molly';
console.log(clients);
// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);
console.log(clients.length);
console.log(clients.length - 1);
const lastMassiveElement = clients.length - 1;
console.log(clients[lastMassiveElement]);
console.log(clients);

for (let i = 0; i < clients.length; i += 1) {
  console.log(clients[i]);
}
