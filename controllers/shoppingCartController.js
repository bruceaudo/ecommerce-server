const shoppingCart = require('../models/shoppingCartModel.js')

const addToCart = async (req, res) => {
  const { cart } = req.query
  try {
    const newCartItem = await shoppingCart.create({
      productID: cart.id
    })
    res.status(200).json({message:"Product added to cart successfully", body: newCartItem})
  } catch (error) {
    res.status(500).send('There was an error adding the product to cart')
  }
}

module.exports = {
  addToCart
}
