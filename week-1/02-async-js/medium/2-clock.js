setInterval(() => {
  console.clear();
  const d = new Date();
  console.log(`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`);
  console.log(
    `${d.getHours() % 12}:${d.getMinutes()}:${d.getSeconds()} ${
      d.getHours() < 12 ? "AM" : "PM"
    }`
  );
}, 1000);
