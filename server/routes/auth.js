const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const login = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, err => {
      console.log("req.login ");
      console.log(user);
      if (err) {
        reject(new Error("Something went wrong"));
      } else {
        resolve(user);
      }
    });
  });
};

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, theUser, failureDetails) => {
    if (err) next(new Error("Something went wrong"));
    if (!theUser) next(failureDetails);
    login(req, theUser).then(user => res.status(200).json(req.user));
  })(req, res, next);
});

router.get("/currentuser", (req, res, next) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    next(new Error("Not logged in"));
  }
});
router.get("/checkUser", (req, res, next) => {

  console.log(username)
  User.findOne({ username })
  .then(foundUser => {
    if (foundUser) return true;
})
})

router.post("/signup", (req, res, next) => {
  const { username, password, email, name } = req.body;
  if (!username || !password) {
    next(new Error("You must provide both username and password"));
  }
  User.findOne({ username })
    .then(foundUser => {
      if (foundUser) throw new Error("Username already exists");
      
      const validationCode = crypto.randomBytes(20).toString("hex");
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
      return new User({
        username,
        password: hashPass,
        email,
        name,
        validationCode,
        guest: false,
      }).save();
    })
    .then(savedUser => login(req, savedUser))
    .then(user => res.json({ status: "signup & login successful", user }))
    .catch(e => next(e));
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "logged out" });
});

router.use((err, req, res, next) => {
  res.status(304).json({ message: "User not found" });
});

module.exports = router;
