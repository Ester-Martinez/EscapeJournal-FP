const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const RoomSchema = new Schema(  {
    escape: { type : Schema.Types.ObjectId, ref: 'EscapeRooms' },
    name: String,
    minGamer: Number,
    maxGamer: Number,
    minPrice: String,
    maxPrice: String,
}, {
  timestamps: true
});

const Rooms = mongoose.model('Rooms', RoomSchema);
module.exports = Rooms;


