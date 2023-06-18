const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Handles login request
 * @param {Object} req 
 * @param {Object} res 
 */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Fetches user
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      let isValidatePassword = await User.validatePassword(
        password,
        user.password
      );
      if (isValidatePassword) {
        console.log(process.env.JWT_SECRET, "JWTSecret");
        let token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.JWT_SECRET
        );
        res.send({ token, user });
        res.end();
      } else {
        res.send({ error: "Passsword doesn't match" });
        res.end();
      }
    } else {
      res.send({ error: "Please enter a valid email address" });
      res.end();
    }
  } catch (err) {
    res.send({ error: err.message });
  }
};

/**
 * Handles user signup
 * @param {Object} req
 * @param {Object} res
 */
exports.signup = async (req, res) => {
  console.log(req.body, "requestBody");
  const { email } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (user) {
      res.send({ error: "User email already exists!" });
      res.end();
    } else {
      const result = await User.create(req.body);
      res.send({
        data: result,
        message: "User has been created successfully!",
      });
      res.end();
    }
  } catch (err) {
    res.send({ error: err.message });
    res.end();
  }
};
