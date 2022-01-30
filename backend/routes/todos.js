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




module.exports = router;
