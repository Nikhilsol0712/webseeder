const { Router } = require("express");
const {
  login,
  register,
  getAllUsers,
  deleteUserbyId,
  updateUserByid,
} = require("../controllers/userController.js");
const router = Router();

router.post("/login", login);
router.post("/register", register);
//routes to fetch all users
router.get("/getAllusers", getAllUsers);

//delete user by id
router.delete("/deleteUser", deleteUserbyId);

//update user by id
router.patch("/updateuser", updateUserByid);

module.exports = router;
