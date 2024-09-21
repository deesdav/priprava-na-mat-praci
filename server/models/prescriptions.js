const mongoose = require("mongoose");

const schema = mongoose.Schema({
    patient: { type: String, required: true },
    doctor: { type: String, required: true },
    medication: { type: String, required: true },
    dosage: { type: String, required: true },
    instructions: { type: String, required: true },
    prescribedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Prescription", schema);
