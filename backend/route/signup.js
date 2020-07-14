const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcrypt')


router.post('/', (req, res, next) => {
    console.log(req.body)
    res.status(200).json({
         message: 'inside post /api/signup'
    })
    //TO CHECK USER EXIST OR NOT BY USING THE EMAIL ID PROVIDED BY USER BODY
    User.find({ email: req.body.email })
    .exec()
        .then(user => {
            if (user.length >= 1)
            {       // mail exist
                // 409 - conflict
                    return res.status(409).json({
                    message : "user already exist"
                })
            } else
            //create new user
            {
                //bcrypt to stored our password in hash form in database
                bcrypt.hash(req.body.password, 10 ,(err, hash) => {
                    if (err) {
                        console.log(err)
                        //500 interna; server error
                        return res.status(500).json({
                            error:err
                        })
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId,
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: hash
                        });
                        user
                            .save()
                            .then(result => {
                                console.log(result)
                                res.status(201).json({
                                    message:'user created'
                                })
                            })
                            .catch(err => {
                                console.log(err)
                                res.status(500).json({
                                    error:err
                                })
                            })
                        
                    }
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(422).json({
                error: err
            })
    })
 })


module.exports = router;