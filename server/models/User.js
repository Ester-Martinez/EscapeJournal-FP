const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const PASSWORD_PATTERN = /(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,}/;
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\“]+(\.[^<>()\[\]\.,;:\s@\“]+)*)|(\“.+\“))@(([^<>()[\]\.,;:\s@\“]+\.)+[^<>()[\]\.,;:\s@\“]{2,})$/i;

const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    password: {
      type: String
      // match: [PASSWORD_PATTERN, "this is not a correct password"]
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      match: [EMAIL_PATTERN, "this is not a correct email"]
    },
    userType: {
      type: String,
      enum: ["escapista", "sala", "admin"],
      default: "escapista"
    },
    name: String,
    experience: [{ type: Schema.Types.ObjectId, ref: "Experience" }],
    roomsDone: [{ type: Schema.Types.ObjectId, ref: "EscapeRooms" }],
    validationCode: { type: String, unique: true },
    active: { type: Boolean, default: false },
    guest: { type: Boolean, default: true }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
