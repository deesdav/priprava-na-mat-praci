const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: { type: String, required: true },
    photographer: { type: String, required: true },
    uploadDate: { type: Date, default: Date.now },
    location: { type: String, required: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model("Photo", schema);
