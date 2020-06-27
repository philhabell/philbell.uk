const express = require("express");
const cors = require('cors')
const db = require("./routes/db");
const PORT = 9000;
const app = express();
const mongoose = db.conn();
const admin = db.create_admin();

const Users = db.Users;

app.use(cors())
app.use(express.urlencoded());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const newUser = new Users({ username: username, password: password, perms: "user"});
  res.send(`Successfully created user: ${newUser.username}`);
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  Users.find({ username: username, password: password }, (err, user) => {
    if (err) {
      res.send(err);
    } else {
      res.send(user.length > 0);
    }
  });
});

app.get("/all_users", (req, res) => {
  Users.find({}, (err, users) => {
    if (err) {
      res.send(err);
    } else {
      res.send(users);
    }
  });
});

app.post("/clear_database", (req, res) => {
  db.clr_db();
  res.send("Database cleared");
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});