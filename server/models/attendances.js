const mongoose = require("mongoose");

const schema = mongoose.Schema({
    studentName: { type: String, required: true },
    date: { type: Date, default: Date.now },
    status: { type: String, required: true },
    notes: { type: String, required: true }
});

module.exports = mongoose.model("Attendance", schema);
