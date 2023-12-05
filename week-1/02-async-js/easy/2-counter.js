console.clear();

let i = 1;

const sleep = () => {
  setTimeout(() => {
    console.clear();
    console.log(i++);
    sleep();
  }, 1000);
};

sleep();
