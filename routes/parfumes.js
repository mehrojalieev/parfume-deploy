const express = require("express")
const router = express.Router()
const ParfumeSchema = require('../models/pafumes')
const verify_user = require("../middlewares/verify-user")

// GET ALL
router.get('/parfumes', verify_user, async (req, res) => {
  try {
    const parfumes = await ParfumeSchema.find()
    res.send({
      data: parfumes,
      success: true
    })
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// POST => CREATE
router.post("/parfume/create", async (req, res) => {
  const datas = req.body
  try {
    const alldata = datas.save()
    res.status(201).json({
      success: true,
      data: alldata
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET PRODUCT BY ID
router.get("/parfume/:id", async (req, res) => {
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

// UPDATE PRODUCT BY ID
router.put("/parfume/update/:id", async (req, res) => {
  const id = req.params.id;
  const allowedUpdates = ["name", "brand", "category", "images", "price", "description", "gender"];

  const unwantedFields = Object.keys(req.body).filter(key => !allowedUpdates.includes(key));
  if (unwantedFields.length > 0) {
    return res.status(400).json({ message: `Unallowed fields: ${unwantedFields.join(', ')}`, error_fields: unwantedFields });
  }

  try {
    const product = await ParfumeSchema.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  }
  catch (error) {
    res.status(500).json(error);
  }
});

// DELETE PRODUCT BY ID
router.delete("/parfume/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ParfumeSchema.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });  
  }
  catch (error) {
    res.status(500).json(error);
  }
});


module.exports = router




