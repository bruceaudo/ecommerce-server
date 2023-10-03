const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"products"
    }
});

const cart = mongoose.model("cart", CartSchema);
module.exports = cart;