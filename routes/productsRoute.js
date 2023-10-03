const { getAllProducts, getSingleProduct } = require("../controllers/productsController");

const router = require("express").Router();

router.get("/", getAllProducts);
router.get("/:id", getSingleProduct)

module.exports = router;