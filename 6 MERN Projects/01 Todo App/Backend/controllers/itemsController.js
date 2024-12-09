const TodoItem = require("../model/TodoItem");

exports.postTodoItem = async (req, res, next) => {
  try {
    // console.log(req.body);
    const todoItem = new TodoItem(req.body);
    const item = await todoItem.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTodoItems = async (req, res, next) => {
  try {
    const item = await TodoItem.find();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTodoItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    // console.log("Came to delete ", id);
    const deletedItem = await TodoItem.findByIdAndDelete(id);
    console.log(deletedItem);
    res.json(deletedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
