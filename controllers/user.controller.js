const User = require("../models/User.model");

module.exports.UserController = {
  addUser: async (req, res) => {
    try {
      const addedUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        login: req.body.login,
        password: req.body.password
      });
      res.json(addedUser)
    } catch (err) {
      res.json(err);
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const alllUsers = await User.find();
      res.json(alllUsers)
    } catch (err) {
      res.json(err);
    }
  },
  getUserById: async (req, res) => {
    try {
      const userById = await User.findById(req.params.id);
      res.json(userById)
    } catch (err) {
      res.json(err);
    }
  },
  updateUserByID: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        login: req.body.login,
        password: req.body.password
      });
      res.json(updatedUser)
    } catch (err) {
      res.json(err);
    }
  },
  deleteUserById: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      res.json(deletedUser)
    } catch (err) {
      res.json(err);
    }
  },
};
