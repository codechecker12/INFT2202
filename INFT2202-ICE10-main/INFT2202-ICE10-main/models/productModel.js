// productModel.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    // Define your product schema fields here
    // Example: name, category, price, etc.
    // Adjust as needed for your product data
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    // Add other fields relevant to your product

    // You can also include timestamps if needed
    // timestamps: true
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
