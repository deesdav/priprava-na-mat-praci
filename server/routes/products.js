var express = require("express");
var router = express.Router();

const controller = require("../controllers/products");

router.get("/", controller.getAllProducts);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", controller.getProductById);

router.delete("/:id", controller.deleteProduct);

router.put("/:id", controller.updateProduct);

router.post("/", controller.createProduct);

module.exports = router;
