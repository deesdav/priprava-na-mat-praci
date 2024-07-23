const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
});

module.exports = mongoose.model("Dog", schema);
