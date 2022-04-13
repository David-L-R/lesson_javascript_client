const express = require("express");
const { send } = require("express/lib/response");
const { process_params } = require("express/lib/router");
const users = require("./users.json");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/users", (req, res) => {
  console.log("get users");
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  // const user = users.filter((user) => user._id === req.params.id);
  const user = users.find((user) => user._id === req.params.id);

  console.log(user);

  if (!user) {
    console.log("no user was found");
    res.status(404).send({ message: "user was not found" });
  }
  res.send(user);
});

const capitals = {
  france: "paris",
  israel: "jerusalem",
};

app.get("/capitals", (req, res) => {
  console.log(JSON.stringify(capitals, null, 2));
  res.send(capitals);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
