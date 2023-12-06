/**
  You need to create a HTTP server in Node.js which will handle the logic of an authentication server.
  - Don't need to use any database to store the data.

  - Save the users and their signup/login data in an array in a variable
  - You can store the passwords in plain text (as is) in the variable for now

  The expected API endpoints are defined below,
  1. POST /signup - User Signup
    Description: Allows users to create an account. This should be stored in an array on the server, and a unique id should be generated for every new user that is added.
    Request Body: JSON object with username, password, firstName and lastName fields.
    Response: 201 Created if successful, or 400 Bad Request if the username already exists.
    Example: POST http://localhost:3000/signup

  2. POST /login - User Login
    Description: Gets user back their details like firstname, lastname and id
    Request Body: JSON object with username and password fields.
    Response: 200 OK with an authentication token in JSON format if successful, or 401 Unauthorized if the credentials are invalid.
    Example: POST http://localhost:3000/login

  3. GET /data - Fetch all user's names and ids from the server (Protected route)
    Description: Gets details of all users like firstname, lastname and id in an array format. Returned object should have a key called users which contains the list of all users with their email/firstname/lastname.
    The users username and password should be fetched from the headers and checked before the array is returned
    Response: 200 OK with the protected data in JSON format if the username and password in headers are valid, or 401 Unauthorized if the username and password are missing or invalid.
    Example: GET http://localhost:3000/data

  - For any other route not defined in the server return 404

  Testing the server - run `npm run test-authenticationServer` command in terminal
 */

const express = require("express");
const PORT = 3000;
const app = express();
// write your logic here, DONT WRITE app.listen(3000) when you're running tests, the tests will automatically start the server

let users = [
  {
    firstName: "Aakarsh",
    lastName: "Sinha",
    password: "sinha",
    username: "aakarshsak1",
    id: 1273595,
  },
  {
    firstName: "Aakarsh",
    lastName: "Sinha",
    password: "sinha",
    username: "aakarshsak",
    id: 3427267,
  },
  {
    firstName: "Aakarsh",
    lastName: "Sinha",
    password: "sinha",
    username: "aakarshsak2",
    id: 6492711,
  },
];

app.use(express.json());
app.post("/signup", (req, res) => {
  const data = req.body;
  console.clear();
  console.log(data);
  let id;
  do {
    id = Math.floor(Math.random() * 10000000);
  } while (users.filter((u) => u.id === id).length > 0);
  data.id = id;
  const isExist = users.filter((u) => u.username === data.username).length > 0;
  if (isExist) {
    return res
      .status(400)
      .send({ msg: "User already exist...", status: "400" });
  }
  users.push(data);
  console.log(users);
  res.status(201).send();
});

app.post("/login", (req, res) => {
  const data = req.body;
  console.clear();
  console.log(data);

  const user = users.filter(
    (u) => u.username === data.username && u.password === data.password
  )[0];
  if (!user) {
    res.status(401).send({ msg: "Invalid username/password", status: "401" });
  }
  users.push(data);
  console.log(users);
  let token = "ex";
  for (let i = 0; i < 254; i++)
    token +=
      Math.floor(Math.random() * 10) % 2 == 0
        ? Math.floor(Math.random() * 10)
        : String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  res.status(200).send(token);
});

app.get("/data", (req, res) => {
  console.clear();
  const { username, password } = req.headers;
  if (
    users.filter((u) => u.username === username && u.password === password)
      .length === 0
  ) {
    return res
      .status(401)
      .send({ msg: "Invalid username/password", status: "401" });
  }
  res.status(200).send({ users: users });
});

app.listen(3000, () => {
  console.log("Listening on port....");
});

// module.exports = app;
