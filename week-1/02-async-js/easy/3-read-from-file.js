const fs = require("fs");

fs.readFile("./3-read-from-file.md", (err, data) => {
  console.log(data.toString());
});
// console.log(content);

for (let i = 0; i < 10000000000; i++) {
  console.clear();
}
