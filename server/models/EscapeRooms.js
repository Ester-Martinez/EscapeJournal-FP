const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const escapeSchema = new Schema(  {
  "name": String,
  "email": String,
  "phone": String,
  "address": String,
  "web_page": String,
  "trip_advisor": String,
  "facebook": String,
  "location": { "type": { "type": String }, "coordinates": [Number] },
  "google_map_link": String,
  "post_code": String,
  "instagram": String,
  "city": String,
"province": String
}, {
  timestamps: true
});

const Escape = mongoose.model('Escape', escapeSchema);
module.exports = Escape;
