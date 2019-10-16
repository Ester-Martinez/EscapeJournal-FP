const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const friendSchema = new Schema({
  friendName: String,
  friendEmail: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Friend = mongoose.model('Friends', friendSchema);
module.exports = Friend;
