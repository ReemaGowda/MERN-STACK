const express = require('express')
const app = express();

// app.use('/', (req, res) => {
//     res.send('App is running on port..')
// })


//SIGNUP ROUTE

app.use('/api/signup', require('./route/signup'))




module.exports = app;