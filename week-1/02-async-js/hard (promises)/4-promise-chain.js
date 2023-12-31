/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("One...");
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Two...");
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Three...");
    }, 3000);
  });
}

function calculateTime() {
  waitOneSecond()
    .then((val) => {
      console.log(val);
      return waitTwoSecond();
    })
    .then((val) => {
      console.log(val);
      return waitThreeSecond();
    })
    .then((val) => console.log(val));
}

calculateTime();
