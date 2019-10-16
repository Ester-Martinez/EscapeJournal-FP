const express = require("express");
const router = express.Router();
const User = require("../models/User");
const EscapeRooms = require("../models/EscapeRooms");
const Rooms = require("../models/Rooms");
const Friend = require("../models/Friends");
// const upload = require("./../configs/cloudinary.config");
// const access = require("./../middlewares/access.mid");
const Experience = require("./../models/Experience");
const uploader = require("./../configs/cloudinary.config");

router.post("/add-experience", (req, res, next) => {
  const { escapeDone, roomDone, team, date, imgName, imgPath } = req.body;
  const owner = req.user._id;
  const newExperience = new Experience({
    escapeDone,
    roomDone,
    imgName,
    imgPath,
    team,
    date,
    owner
  });
  newExperience
    .save()
    .then(savedExp =>
      User.findByIdAndUpdate(
        { _id: req.user.id },
        { $push: { experiences: savedExp._id } },
        { new: true }
      )
    )
    .then(savedInUser => res.json(savedExp))
    .catch(error => next(error));
});

router.post("/add-friend", (req, res, next) => {
  const { friendName, friendEmail } = req.body;
  const newFriend = new Friend({
    friendName,
    friendEmail
  });
  newFriend
    .save()
    // .then(savedFriend => res.json(savedFriend))
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
router.get("/myexperiences", (req, res, next) => {
  let currentUser = req.user._id;
  User.findById(currentUser)
  .populate({ path: "experiences", populate: { path: "roomDone" } })
  .populate({ path: "experiences", populate: { path: "team" } })
  .populate({ path: "experiences", populate: { path: "escapeDone" } })
    .then(userExperiences => {
      // console.log(userExperiences)
      res.json(userExperiences.experiences);
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
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.json({ secure_url: req.file.secure_url });
});

module.exports = router;
