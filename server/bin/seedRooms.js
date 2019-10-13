const mongoose = require("mongoose");
const EscapeRoom = require("../models/EscapeRooms");
const Rooms = require("../models/Rooms");
const escapeRooms = require("../escapeRoomsMad");

mongoose
  .connect("mongodb+srv://Journal:3PqGVSmpR7l6tB0H@cluster0-xivn5.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

Rooms.deleteMany()
  .then(() => {
    escapeRooms.forEach(escape => {
      let name = escape.name;
      EscapeRoom.findOne({ name }).then(escapeFound => {
        let id = escapeFound.id;
        escape.games.forEach(game => {
          let roomName = game.name.es;
          let { minGamer, maxGamer, minPrice, maxPrice } = game;
          let newRoom = {
            escape: id,
            name: roomName,
            minGamer: minGamer,
            maxGamer: maxGamer,
            minPrice: minPrice,
            maxPrice: maxPrice
          };
          Rooms.create(newRoom)
            .then(() => {return})
            .catch(err => {
              mongoose.disconnect();
              throw err;
            });
        });
      })
    });
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  })
