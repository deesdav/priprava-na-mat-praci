const Employee = require("../models/employees");

exports.getAllEmployees = async (req, res) => {
    try {
        const result = await Employee.find();
        if (result && result.length !== 0) {
            return res.status(200).send({
                msg: "Employees found!",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Employees not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const result = await Employee.findById(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Employee found",
                payload: result,
            });
        }
        res.status(404).send({ msg: "Employee not found" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        const result = await Employee.findByIdAndDelete(req.params.id);
        if (result) {
            return res.status(200).send({
                msg: "Employee deleted",
            });
        }
        res.status(500).send({ msg: "Something went wrong" });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            position: req.body.position,
            salary: req.body.salary,
            department: req.body.department
        };
        const result = await Employee.findByIdAndUpdate(req.params.id, data);
        if (result) {
            return res.status(200).send({
                msg: "Employee updated",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Employee was not updated",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const data = new Employee({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            position: req.body.position,
            salary: req.body.salary,
            department: req.body.department
        });
        const result = await data.save();
        if (result) {
            return res.status(201).send({
                msg: "Employee created",
                payload: result,
            });
        }
        res.status(500).send({
            msg: "Employee was not created",
        });
    } catch (error) {
        res.status(500).send(error);
    }
};
