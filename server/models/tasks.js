const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: { type: String, required: true },
    descp: { type: String, required: true },
    completed: { type: String, required: true },
});

module.exports = mongoose.model("Task", schema);