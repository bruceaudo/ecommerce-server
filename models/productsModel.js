const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    imageURL: {
        type: [{type:String}],
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const products = mongoose.model("products", ProductsSchema);
module.exports = products;