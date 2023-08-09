const express = require("express");

const {loginUser, registerUser, getUser} = require("../controllers/userController");
const validateToken = require("../middlewares/validateTokenHandler");

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.get("/getUser", validateToken, getUser);


module.exports = router;