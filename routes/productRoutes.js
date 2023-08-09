const express = require("express");
const validateToken = require("../middlewares/validateTokenHandler");

const {getAllProduct, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/productController")

const router = express.Router();

router.use(validateToken);

router.route("/").get(getAllProduct);

router.route("/").post(createProduct);

router.route("/:id").get(getProduct);

router.route("/:id").put(updateProduct);

router.route("/:id").delete(deleteProduct);

module.exports = router;