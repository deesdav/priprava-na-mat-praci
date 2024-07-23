const mongoose = require("mongoose");

const schema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    position: { type: String, required: true },
    salary: { type: Number, required: true },
    department: { type: String, required: true },
});

module.exports = mongoose.model("Employee", schema);
