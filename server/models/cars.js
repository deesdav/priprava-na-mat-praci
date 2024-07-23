const mongoose = require("mongoose");

const schema = mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
    isElectric: { type: Boolean, required: true },
});

module.exports = mongoose.model("Car", schema);
