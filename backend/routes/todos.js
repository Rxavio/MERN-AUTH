const { Todo } = require("../models/todo");
const Joi = require("joi");

const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(200).required(),
    author: Joi.string().min(3),
    uid: Joi.string(),
    isComplete: Joi.boolean(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const { name, author, isComplete, date, uid } = req.body;
  let todo = new Todo({ name, author, isComplete, date, uid });
  todo = await todo.save();
  res.send(todo);
});

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ date: -1 });
    res.send(todos);
  } catch (error) {
    res.status(500).send("Error: " + error.message);

  }
});

router.delete("/:id", async (req, res) => {
  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
  res.send(deletedTodo);
});




module.exports = router;
