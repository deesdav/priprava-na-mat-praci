const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    founded: { type: Number, required: true },
    championshipsWon: { type: Number, required: true },
});

module.exports = mongoose.model("Sportteam", schema);
