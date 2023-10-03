const products = require('../models/productsModel')

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await products.find({})
    res.status(200).json(allProducts)
  } catch (error) {
    res.status(500).send('There was an error fetching products from database')
  }
}

const getSingleProduct = async (req, res) => {
  const id = req.params.id
  try {
    const singleProduct = await products.findById(id)
    res.status(200).json(singleProduct)
  } catch (error) {
    res.status(500).send('Failed to fetch product details from database')
  }
}


module.exports = {
  getAllProducts,
  getSingleProduct,
}
