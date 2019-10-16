const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const Escape = require('./../models/EscapeRooms')
const Rooms = require('./../models/Rooms')
const User = require('./../models/User')

const experienceSchema = new Schema({
  escapeDone: { type : Schema.Types.ObjectId, ref: 'Escape' },
  roomDone: { type : Schema.Types.ObjectId, ref: 'Rooms' },
  owner: { type : Schema.Types.ObjectId, ref: 'User' },
  team: [{ type : Schema.Types.ObjectId, ref: 'Friends' }],
  date: Date,
  imgName: String,
  imgPath: String,
}, {
  timestamps: true
});

const Experience = mongoose.model('Experience', experienceSchema);
module.exports = Experience;
