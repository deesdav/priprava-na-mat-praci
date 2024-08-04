const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: { type: String, required: true },
    year: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model("Event", schema);
