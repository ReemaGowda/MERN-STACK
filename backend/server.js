// console.log("hello world")

const http = require('http')

// APP
const app = require('./App');

//To get PORT 
const config = require('./config/default')
const port = config.port;
const server = http.createServer(app);
server.listen(port)

console.log('Server is running on : 127.0.0.1:' + port)