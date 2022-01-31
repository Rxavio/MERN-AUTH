const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {

  //Validate user with joi
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(200).required().email(),
    password: Joi.string().min(6).max(200).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  
  try{
    //check if user already exist
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists...");

  //get property of  new one
  const { name, email, password } = req.body;
  user = new User({ name, email, password });
 //hash password with bcrypt
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
 //save user
  await user.save();
  // res.send("User created");
  const jwtSecretKey = process.env.SECRET_KEY;
  const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, jwtSecretKey)
  res.send(token);

}catch(error){
  res.status(500).send(error.message);
  console.log(error.message);
}

});

//get request
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

//delete request
router.delete("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send("User not found...");
  const deletedUser = await User.findByIdAndDelete(req.params.id);
  res.send(deletedUser);
});

module.exports = router;
