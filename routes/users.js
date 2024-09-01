const express = require("express")
const router = express.Router()

const UsersSchema = require('../models/users')


router.get('/all',async (req, res) => {
    try {
        const users = await UsersSchema.find({})
        res.send(users)
    } 
    catch (error) {
        res.status(500).json({message: error.message})    
    }
})

module.exports = router