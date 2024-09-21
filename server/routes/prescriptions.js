var express = require("express");
var router = express.Router();

const controller = require("../controllers/prescriptions");

router.get("/", controller.getAllPrescriptions);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getPrescriptionById);

router.delete("/:id", controller.deletePrescription);

router.put("/:id", controller.updatePrescription);

router.post("/", controller.createPrescription);

module.exports = router;
