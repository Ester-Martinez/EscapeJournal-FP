const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: "EscapeJournal",
  allowedFormats: ["jpg", "png", "svg"],
  function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage
});

module.exports = upload;
