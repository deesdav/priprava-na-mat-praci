const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    owner: { type: String, required: true },
    cuisine: { type: String, required: true },
    ratings: { type: Number, required: true }
});

module.exports = mongoose.model("Restaurant", schema);
