const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:1JLMEM12Hd801CDe@cluster0.ku4wnda.mongodb.net/todos"
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
