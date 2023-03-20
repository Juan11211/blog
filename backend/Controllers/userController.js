const User = require('../Models/User');
const jwt = require('jsonwebtoken');

const createToken = (_id) => { // passing in id because of payload. id is being passed in payload
   return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

const loginUser = async(req, res, next) => {
    const {username, password} = req.body

    try{
        const user = await User.login(username, password)
        // create token here 
        const token = createToken(user._id)
        res.status(201).json({username, password, token}) // when creating 201
    } catch(error){
        res.status(400).json({error: error.message})
    }
} 

const signupUser = async(req, res, next) => {
    const { username, email, password} = req.body
    try{
        const user = await User.signup(username, email, password)
        // create token here 
        const token = createToken(user._id)
        res.status(201).json({username, email, token}) // when creating 201
    } catch(error){
        res.status(400).json({error: error.message})
    }
} 

module.exports = { signupUser, loginUser }