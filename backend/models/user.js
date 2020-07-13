const mongoose = require('mongoose')

const userScheme = mongoose.Schema({
    //CREATING THE UNQUIE ID FOR USER
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: 'string', require: 'true' },
    lastName: { type: 'string', require: 'true' },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i 
    },
    password : { type: String , require:true}
})

module.exports = mongoose.model('User', userScheme);