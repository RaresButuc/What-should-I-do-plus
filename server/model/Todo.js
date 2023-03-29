const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const toDoSchema = new Schema({
  title: String,
  comment: String,
  createdAt: Date,
});

const ToDo = model("ToDo", toDoSchema);

module.exports = ToDo;