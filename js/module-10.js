const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve(console.log('promise successful'));
    }
    reject(console.log('promise unsuccessful'));
  }, 1000);
});

function onFullfilled(result) {
  console.log('onFullfilled -> onFulfilled');
  console.log(`ok, ${result}`);
}

function onRejected(result) {
  console.log('onRejected -> onRejected');
  console.log(`not ok, ${result}`);
}

promise
  .then(onFullfilled)
  .then(x => {
    console.log(x);
    return 10;
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => console.log(error))
  .finally(() => console.log('It will do in anytime'));
