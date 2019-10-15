const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const friendSchema = new Schema({
  newFriendName: String,
  newFriendEmail: String,
  roomsDone: [{ type : Schema.Types.ObjectId, ref: 'EscapeRooms' }]
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Friend = mongoose.model('Friends', friendSchema);
module.exports = Friend;
