const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const EscapeRooms = require('./../models/EscapeRooms')
const Rooms = require('./../models/Rooms')
const User = require('./../models/User')

const experienceSchema = new Schema({
  escapeDone: [{ type : Schema.Types.ObjectId, ref: 'EscapeRooms' }],
  roomsDone: [{ type : Schema.Types.ObjectId, ref: 'Rooms' }],
  team: [{ type : Schema.Types.ObjectId, ref: 'User' }],
  date: Date,
  imgName: String,
  imgPath: String,
}, {
  timestamps: true
});

const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;
