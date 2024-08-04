const mongoose = require("mongoose");

const schema = mongoose.Schema({
    user: { type: String, required: true },
    product: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
});

module.exports = mongoose.model("Review", schema);
