const express = require("express");
const router = express.Router();
const User = require("../models/User");
const upload = require("./../configs/cloudinary.config");
const access = require("./../middlewares/access.mid");
const Experience = require("./../models/Experience");

router.post(
  "/add-experience",
  [access.checkLogin, upload.single("picture")],
  (req, res, next) => {
    const { escapeDone, roomsDone, team, date } = req.body;
    let originalname;
    let url;
    if (req.file) {
      originalname = req.file.originalname;
      url = req.file.url;
      const newExperience = new Experience({
        escapeDone,
        roomsDone,
        imgName: originalname,
        imgPath: url,
        team: [{ type: Schema.Types.ObjectId, ref: "User" }],
        date: Date
      });
      newExperience
        .save()
        .then(savedExp => res.json(savedExp))
        .catch(error => next(error));
      // } else {
      //   User.findOneAndUpdate(
      //     { _id: req.user._id },
      //     {
      //       $set: {
      //         username: username,
      //         email: email
      //       }
      //     },
      //     { new: true }
      //   ). then(() => {res.redirect('/')})
      //   .catch ((err)=> {console.log(err)})
    }
  }
);

module.exports = router;
