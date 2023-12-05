/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Awake Now...");
    }, seconds * 1000);
  });
}

sleep(10).then((d) => {
  console.log(d);
});

console.log("Hi...........");
