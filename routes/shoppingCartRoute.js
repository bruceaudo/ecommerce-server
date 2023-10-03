const { addToCart } = require("../controllers/shoppingCartController");

const router = require("express").Router();

router.post("/", addToCart)

module.exports = router