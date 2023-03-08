const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.UserController = {
  addUser: async (req, res) => {
    try {
      if (await User.findOne({ login: req.body.login })) {
        return res.json({
          error: "Пользователь с таким логином существует!",
        });
      }
      const hashPassword = await bcrypt.hash(
        req.body.password,
        Number(process.env.BCRYPT_ROUNDS)
      );
      const addedUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        login: req.body.login,
        password: hashPassword,
      });
      res.json(addedUser);
    } catch (err) {
      res.json(err);
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const allUsers = await User.find();
      return res.json(allUsers);
    } catch (err) {
      return res.json(err);
    }
  },
  getUserById: async (req, res) => {
    try {
      const userById = await User.findById(req.params.id);
      res.json(userById);
    } catch (err) {
      res.json(err);
    }
  },
  login: async (req, res) => {
    try {
      const candidate = await User.findOne({
        login: req.body.login,
      });

      if (!candidate) {
        return res.json({ error: "Неверные данные!" });
      }

      const valid = await bcrypt.compare(req.body.password, candidate.password);
      if (!valid) {
        return res.json({ error: "Неверные данные!" });
      }

      const payload = {
        id: candidate._id,
        login: candidate.login,
        firstName: candidate.firstName,
        lastName: candidate.lastName,
      };

      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });

      return res.json(token);
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
        password: req.body.password,
      });
      res.json(updatedUser);
    } catch (err) {
      res.json(err);
    }
  },
  deleteUserById: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      res.json(deletedUser);
    } catch (err) {
      res.json(err);
    }
  },
};
