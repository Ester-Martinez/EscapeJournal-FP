const express = require("express");
const router = express.Router();
const User = require("../models/User");
const EscapeRooms = require("../models/EscapeRooms");
const Rooms = require("../models/Rooms");
const Friend = require("../models/Friends");
const Experience = require("./../models/Experience");
const uploader = require("./../configs/cloudinary.config");
const moment = require("moment");

router.post("/add-experience", (req, res, next) => {
  const { escapeDone, roomDone, team, date, imgName, imgPath } = req.body;
  const owner = req.user._id;
  formatedDate = moment(date).format("L");

  const newExperience = new Experience({
    escapeDone,
    roomDone,
    imgName,
    imgPath,
    team,
    date: formatedDate,
    owner
  });
  newExperience.save().then(savedExp =>
    User.findByIdAndUpdate(
      { _id: req.user.id },
      { $push: { experiences: savedExp._id } },
      { new: true }
    )
      .then(savedInUser => res.json(savedExp))
      .catch(error => next(error))
  );
});

router.post("/add-friend", (req, res, next) => {
  const { friendName, friendEmail } = req.body;
  const newFriend = new Friend({
    friendName,
    friendEmail
  });
  newFriend
    .save()
    .then(savedFriend =>
      User.findByIdAndUpdate(
        { _id: req.user.id },
        { $push: { friends: savedFriend._id } },
        { new: true }
      )
        .then(updatedFriend => res.json(updatedFriend))
        .catch(error => next(error))
    )
    .catch(error => next(error));
});

router.get("/allescapes", (req, res, next) => {
  EscapeRooms.find().then(escapesFound => {
    res.json(escapesFound);
  });
});

router.get("/myfriends", (req, res, next) => {
  let currentUser = req.user._id;
  User.findById(currentUser)
    .populate("friends")
    .then(userFriends => {
      res.json(userFriends.friends);
    });
});
router.get("/allUsers", (req, res, next) => {
  User.find().then(usersFound => {
    res.json(usersFound);
  });
});
router.get("/myexperiences", (req, res, next) => {
  let currentUser = req.user._id;
  User.findById(currentUser)
    .populate({ path: "experiences", populate: { path: "roomDone" } })
    .populate({ path: "experiences", populate: { path: "team" } })
    .populate({ path: "experiences", populate: { path: "escapeDone" } })
    .populate({ path: "experiences", populate: { path: "owner" } })
    .then(userExperiences => {
      res.json(userExperiences.experiences);
    });
});
router.get("/experience/:id", (req, res, next) => {
  let experience = req.params.id;
  Experience.findById(experience)
    .populate("roomDone")
    .populate("team")
    .populate("escapeDone")
    .populate("owner")
    .then(thisExperience => {
      res.json(thisExperience);
    });
});

router.get("/allrooms", (req, res, next) => {
  Rooms.find().then(roomsFound => {
    res.json(roomsFound);
  });
});

router.post("/upload", uploader.single("imageUrl"), (req, res, next) => {
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  res.json({ secure_url: req.file.secure_url });
});

module.exports = router;
