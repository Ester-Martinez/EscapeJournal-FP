
const mongoose = require("mongoose");
const EscapeRoom = require("../models/EscapeRooms");
const escapeRooms = require('../escapeRoomsMad')

mongoose
  .connect(process.env.MONGO, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


EscapeRoom.deleteMany()
.then(() => {
  escapeRooms.forEach(escape => {
    let {name, email, phone, address, web_page, trip_advisor, facebook, google_map_link, post_code, instagram} = escape
    let coordinates = [escape.longitude, escape.latitude]
    let city = escape.city.id;
    let province = escape.city.province.id;
    let newScape = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      web_page: web_page,
      trip_advisor: trip_advisor,
      facebook: facebook,
      location: {
        type: "Point",
        coordinates: coordinates
      },
      google_map_link: google_map_link,
      post_code: post_code,
      instagram: instagram,
    city: city,
    province: province
    }
    EscapeRoom.create(newScape)
    .then(escapeSaved => mongoose.disconnect())
    .catch(err => {
      mongoose.disconnect()
      throw err
    })
  })
})

.catch(err => {
  mongoose.disconnect()
  throw err
})