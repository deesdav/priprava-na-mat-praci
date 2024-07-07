const Task = require("../models/tasks");

exports.getAllTasks = async (req, res) => {
  try {
    const result = await Task.find();
    if (result && result.length !== 0) {
      return res.status(200).send({
        msg: "Tasks found!",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Tasks not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const result = await Task.findById(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Task found",
        payload: result,
      });
    }
    res.status(404).send({ msg: "Task not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const result = await Task.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).send({
        msg: "Task deleted",
      });
    }
    res.status(500).send({ msg: "Something went wrong" });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateTask = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      descp: req.body.descp,
      completed: req.body.completed,
    };
    const result = await Task.findByIdAndUpdate(req.params.id, data);
    if (result) {
      return res.status(200).send({
        msg: "Task updated",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Task was not updated",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createTask = async (req, res) => {
  try {
    const data = new Task({
      title: req.body.title,
      descp: req.body.descp,
      completed: req.body.completed,
    });
    const result = await data.save();
    if (result) {
      return res.status(201).send({
        msg: "Task created",
        payload: result,
      });
    }
    res.status(500).send({
      msg: "Task was not created",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
