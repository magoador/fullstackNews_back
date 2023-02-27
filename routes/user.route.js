const { Router } = require("express");
const { UserController } = require("../controllers/user.controller");

const router = Router();

router.get('/users', UserController.getAllUsers)
router.get('/user/:id', UserController.getUserById)
router.post('/user', UserController.addUser)
router.patch('/user/update/:id', UserController.updateUserByID)
router.delete('/user/delete/:id', UserController.deleteUserById)

module.exports = router;
