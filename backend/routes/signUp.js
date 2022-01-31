const bcrypt = require("bcrypt");
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

  res.send("User created");

}catch(error){
  res.status(500).send(error.message);
  console.log(error.message);
}

});

module.exports = router;
