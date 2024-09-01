const express = require("express")
const router = express.Router()
const ParfumeSchema = require('../models/pafumes')

// Getting All
router.get('/', async (req, res) => {
    try {
            const parfumes = await ParfumeSchema.find()
            res.send(parfumes)
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
})


router.get("/:id", async (req, res) => {
    try {
        const single_product = await ParfumeSchema.findById(req.params.id);
        if (single_product) {
            res.send(single_product);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router
