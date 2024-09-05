const express = require("express");
const router = express.Router();
const UsersSchema = require('../models/users');

// GET all users
router.get('/all', async (req, res) => {
    try {
        const users = await UsersSchema.find({});
        res.send(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// GET BY ID
router.get("/:id", async (req, res) => {
    try {
        const user = await UsersSchema.findById(req.params.id);
        res.send(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST create a new user
router.post("/create", async (req, res) => {
    const user = new UsersSchema(req.body);
    

    try {
        const newUser = await UsersSchema.insertMany(user);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
