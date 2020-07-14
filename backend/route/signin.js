const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../models/user')


router.post('/', (req, res, next) => {
    console.log(req.body)
    res.status(200).json({
        message:'inside/post /api/signin'
    })

        User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1) {
                //user not found 
                return res.status(401).json({
                    message: 'Auth Failed'
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth Failed'
                    });
                }
                if (result) {
                    //Token send
                    return res.status(200).json({
                        message : " Auth Sucessfull "
                    })
                }
                 res.status(401).json({
                    message: "Auth failed"
                })
            })
            
        })
        .catch(err => {
            console.log(err)
             res.status(500).json({
                error:err
            })
})
})


module.exports = router;