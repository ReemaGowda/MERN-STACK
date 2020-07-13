const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const User = require('../models/user')


router.post('/', (req, res, next) => {
    console.log(req.body)
    res.status(200).json({
        message: 'inside post /api/signup'
    })
})


module.exports = router;