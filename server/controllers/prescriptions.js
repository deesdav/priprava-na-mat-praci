const Prescription = require("../models/prescriptions");

exports.getAllPrescriptions = async (req, res) => {
    try {
        const result = await Prescription.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Prescriptions found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Prescriptions not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getPrescriptionById = async (req, res) => {
    try {
        const result = await Prescription.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Prescription found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Prescription not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deletePrescription = async (req, res) => {
    try {
        const result = await Prescription.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Prescription deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updatePrescription = async (req, res) => {
    try {
        const data = {
            patient: req.body.patient,
            doctor: req.body.doctor,
            medication: req.body.medication,
            dosage: req.body.dosage,
            instructions: req.body.instructions,
            prescribedDate: req.body.prescribedDate,
        };
        const result = await Prescription.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Prescription updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Prescription was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createPrescription = async (req, res) => {
    try {
        const data = new Prescription({
            patient: req.body.patient,
            doctor: req.body.doctor,
            medication: req.body.medication,
            dosage: req.body.dosage,
            instructions: req.body.instructions,
            prescribedDate: req.body.prescribedDate,
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Prescription created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Prescription was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
