const express = require('express')
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const {expressjwt} = require('express-jwt');
require('dotenv').config();


app.use(express.json());
app.use(morgan('dev'));

async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log('Connected to the DB');
    } catch (error) {
      console.error(error);
    }
  }
  connectToDatabase();

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256']})) // req.user
app.use('/feed', require('./Routes/feedRouter.js'))

app.listen(9000, () => { 
    console.log('Server is running on Port 9000')
})