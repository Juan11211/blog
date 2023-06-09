const express = require('express')
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const {expressjwt} = require('express-jwt');
// const path = require('path');
require('dotenv').config();


app.use(express.json());
app.use(morgan('dev'));


// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'path/to/index.html'));
// });


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
// express jwt = gatekeeper, checks for token
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256']})) // req.user
app.use('/api/post', require('./Routes/postRouter.js'))
app.use('/api/comment', require('./Routes/commentRouter'))

app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(9000, () => { 
    console.log('Server is running on Port 9000')
})