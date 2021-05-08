const express = require('express');
const router = express.Router();

const { getAllProducts, getAllProductById} = require('../controller/productControllers');
//@desc GET all products from db
//@route GET /api/products
//@accesss Public
router.get("/", getAllProducts);

//@desc GET all products by id from db
//@route GET /api/products/:id
//@accesss Public

router.get("/:id", getAllProductById);

module.exports = router;