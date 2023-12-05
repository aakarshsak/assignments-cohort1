const fs = require("fs");

fs.readFile("./file.txt", (err, data) => {
  console.log(data);
  const newData = data.toString().replace(/\s+/g, " ");
  console.log(newData);
  fs.writeFile("./file.txt", newData, (err) => {
    if (err) {
      console.log(err);
    } else console.log("Writing to file...");
  });
});
