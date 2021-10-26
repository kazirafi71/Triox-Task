const { product_info_controller } = require("../controllers/productController");

const router = require("express").Router();

router.get('/product-info',product_info_controller)

module.exports = router;
