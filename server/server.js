const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

let ToDo = require("./model/Todo.js");
mongoose.connect(
  "mongodb://RaresButuc:d0Vn6uGtJyqSKJ7S@ac-x5czvds-shard-00-00.9unmpzm.mongodb.net:27017,ac-x5czvds-shard-00-01.9unmpzm.mongodb.net:27017,ac-x5czvds-shard-00-02.9unmpzm.mongodb.net:27017/test?replicaSet=atlas-ry9s82-shard-0&ssl=true&authSource=admin"
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("not here");
});

app.get("/api/todo", async (req, res) => {
  const todos = await ToDo.find();
  return res.json(todos);
});
app.post("/api/todo", (req, res) => {
  const title = req.body.title;
  const comment = req.body.comment;
  const createdAt = Date.now();
  const todo = new ToDo({
    title,
    comment,
    createdAt,
  });
  todo
    .save()
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json({ success: false }));
});

app.get("/api/todo/:id", async(req, res) => {
  const element = await ToDo.findById(req.params.id)
  return res.json(element)
});

app.delete("/api/todo/:id", async (req, res) => {
  const deleted = await ToDo.findByIdAndDelete(req.params.id);
  return res.json(deleted)
});

app.listen(5000, () => console.log("Server started on port 5000"));
