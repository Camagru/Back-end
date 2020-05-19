const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('./server')

app.use('/', bodyParser.json())
app.use('/',server)



app.listen(5000, () => {
    console.log(`Server is running on port 5000 `)
})