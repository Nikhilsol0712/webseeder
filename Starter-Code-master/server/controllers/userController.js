const userModel = require("../models/userModel.js");
const bcrypt = require("bcrypt");

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email: email });
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      let userDetails = await user.toObject();
      delete userDetails["password"];
      return res.json({
        match: true,
        user: userDetails,
      });
    } else {
      return res.json({
        match: false,
      });
    }
  } catch {
    return res.json({
      userNotFound: true,
    });
  }
};

module.exports.register = async (req, res) => {
  const { email, password, name } = req.body;
  const userCheck = await userModel.findOne({ email: email });
  try {
    if (userCheck) {
      return res.json({ userAlreadyExists: true });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await userModel.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
    let user = await createdUser.toObject();
    delete user["password"];
    res.json({
      userCreated: true,
      user: user,
    });
  } catch {
    res.json({ userCreated: false });
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const response = await userModel.find();
    return res.json({
      user: response,
      message: "successfully fetched the user",
    });
  } catch {
    res.json("Didn't fetch the users");
  }
};

module.exports.deleteUserbyId = async (req, res) => {
  console.log("req.body=====", req.body);
  try {
    const response = await userModel.findOneAndDelete(req.body.id);

    return res.json({
      data: response,
      message: "successfully deleted the user",
    });
  } catch {
    res.json("Invalid user Id");
  }
};

module.exports.updateUserByid = async (req, res) => {
  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { _id: req.body.id },
      {
        $set: {
          name: req.body.updates.name,
          email: req.body.updates.email,
        },
      },
      { new: true }
    );
    const newupdatedUser = await userModel.findOne({
      email: updatedUser.email,
    });
    return res.json({
      user: newupdatedUser,
      message: "successfully update the user",
    });
  } catch {
    res.json("cant find the user");
  }
};
