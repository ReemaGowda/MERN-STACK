const express = require('express')
const app = express();




const morgan = require('morgan')
const cors = require('cors')
//extended the json data and make easy to read bodypraser
const bodyPraser = require('body-parser')
//mongoose make very easy to connect to mongodb database
const mongoose = require('mongoose')
 

//CONNECTING OUR APP TO MONGODB DATABASE

mongoose.connect('mongodb://127.0.0.1/videoServer', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// .then(() => console.log( 'Database Connected' ))
// .catch(err => console.log( err ));
mongoose.Promise = global.Promise


app.use(morgan('dev'))
app.use(cors())
//can post only simple object not nested object (so extended false)
app.use(bodyPraser.urlencoded({ extended: false }))
app.use(bodyPraser.json())



//ROUTE
// app.use('/', (req, res) => {
//     res.send('App is running on port..')
// })


// ROUTE
app.use('/api/signup', require('./route/signup'))
app.use('/api/signin', require('./route/signin'))



module.exports = app;