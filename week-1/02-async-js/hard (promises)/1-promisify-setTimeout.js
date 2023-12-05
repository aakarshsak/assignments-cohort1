/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise((resolve, reject) => {
    if (n < 0) {
      reject("Baddd.......");
    }

    setTimeout(() => {
      resolve(`Promise resolved after ${n} seconds`);
    }, n * 1000);
  });
}

wait(2)
  .then((d) => {
    console.log(d);
  })
  .catch((err) => {
    console.log(err);
  });
