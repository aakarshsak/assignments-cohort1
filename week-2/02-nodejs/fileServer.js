/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module

  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files

  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt

    - For any other route not defined in the server return 404

    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

let files = [];
app.get("/files", async (req, res) => {
  fs.readdir("files", (err, fileNames) => {
    fileNames.forEach((f) => files.push(f));
    console.log(files);
    res.status(200).send({ files: files });
  });
});

app.get("/files/:filename", async (req, res) => {
  const filename = req.params.filename;
  console.log(filename);
  fs.readdir("files", (err, fileNames) => {
    const foundFile = fileNames.filter((f) => f === filename)[0];
    console.log(foundFile, "Found");
    if (!foundFile) {
      return res.status(404).send("File not found");
    }
    fs.readFile(`./files/${filename}`, (err, content) => {
      console.log(content);
      res.status(200).send(content);
    });
  });
});

app.listen(3000, () => {
  console.log("Listening on 3000....");
});
// module.exports = app;
