const mongoose = require("mongoose");
const { Schemea } = mongoose;

const UserSchemea = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const UserModel = mongoose.model("User", UserSchemea);

module.exports = UserModel;
