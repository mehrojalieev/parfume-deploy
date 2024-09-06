const express = require("express");
const router = express.Router();
const UsersSchema = require('../models/users');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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
    try {
        const newUser = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };

        // Check if username already exists
        const existingUser = await UsersSchema.findOne({
            $or: [{ username: newUser.username }, { email: newUser.email }]
        });

        if (existingUser) {
            return res.status(400).json({ message: "Username or email already exists" });
        }   

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);
        newUser.password = hashedPassword;

        // Save the new user
        const userData = await UsersSchema.create(newUser);

        res.status(201).json({
            success: true,
            data: userData,
            message: "User registered successfully"
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the user exists in the database
        const user = await UsersSchema.findOne({ username: username });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Compare the password with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const userJwt = {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email
        }
        const token = jwt.sign(userJwt, process.env.JWT_SECRET, { expiresIn: "10d" });

        // Send token in response
        res.status(200).json({
            message: "Login successful",
            token: token
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
