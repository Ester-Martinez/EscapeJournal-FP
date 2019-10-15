const express = require("express");
const router = express.Router();
const User = require("../models/User");
const EscapeRooms = require("../models/EscapeRooms");
const Rooms = require("../models/Rooms");
const upload = require("./../configs/cloudinary.config");
const access = require("./../middlewares/access.mid");
const Experience = require("./../models/Experience");
const uploader = require('./../configs/cloudinary.config');

router.post(
  "/add-experience",
  (req, res, next) => {
    const { escapeDone, roomsDone, team, date, imgName, imgPath } = req.body;
      // console.log('entra')
      const newExperience = new Experience({
        escapeDone,
        roomsDone,
        imgName,
        imgPath,
        team,
        date,
      });
      newExperience
        .save()
        .then(savedExp => res.json(savedExp))
        .catch(error => next(error));
  }
);

router.get("/allescapes", (req, res, next) => {
  EscapeRooms.find()
    .then(escapesFound => {

      res.json(escapesFound)
    });
});

router.get("/allrooms", (req, res, next) => {
  Rooms.find()
    .then(roomsFound => {

      res.json(roomsFound)
    });
});

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {

  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
  // get secure_url from the file object and save it in the 
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.json({ secure_url: req.file.secure_url });
})

module.exports = router;
