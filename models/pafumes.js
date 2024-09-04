const mongoose = require('mongoose');

const perfumeProductSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    brand: { type: String, required: true },
    images: { type: [String], required: true },
    price: { type: Number, required: true },
    description: { type: String,  },
    category: { type: String, required: true },
    gender: { type: String,  }
}, { strict: true });

const PerfumeProduct = mongoose.model("perfumes", perfumeProductSchema);

module.exports = PerfumeProduct;
