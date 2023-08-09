const express = require("express");
const validateToken = require("../middlewares/validateTokenHandler");

const {getAllCart, createCart, getCart, updateCart, deleteCart} = require("../controllers/cartController")

const router = express.Router();

router.use(validateToken);

router.route("/").get(getAllCart);

router.route("/").post(createCart);

router.route("/:id").get(getCart);

router.route("/user/:userId").get(getUserCart);

router.route("/:id").put(updateCart);

router.route("/:id").delete(deleteCart);

module.exports = router;