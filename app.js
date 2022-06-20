const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

// Middlewares

app.use(cors());

app.use(bodyParser.json());

//IMport routes

const postsRoute= require('./routes/posts');
app.use('/posts', postsRoute);

///Routes
app.get('/', (req, res) => {
    res.send('We are on home')
})


//Connect to db
mongoose.connect(process.env.DB_CONNECTION, () => 
console.log('connected to DB!')
)


//How do we start listening to the server
app.listen(3000);