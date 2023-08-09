const express = require("express");
const validateToken = require("../middlewares/validateTokenHandler");

const {getAllOrder, createOrder, getOrder, updateOrder, deleteOrder} = require("../controllers/orderController");

const router = express.Router();

router.use(validateToken);

router.route("/").get(getAllOrder);

router.route("/").post(createOrder);

router.route("/:id").get(getOrder);

router.route("/:id").put(updateOrder);

router.route("/:id").delete(deleteOrder);

module.exports = router;