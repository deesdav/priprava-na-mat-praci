const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    population: { type: Number, required: true },
    established: { type: Number, required: true },
});

module.exports = mongoose.model("City", schema);
