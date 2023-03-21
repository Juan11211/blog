const User = require('../Models/User');
const jwt = require('jsonwebtoken')

const signupRoute = async (req, res, next) => {
  try {
      // try catch method, check to see if user or email exist 
    const user = await User.findOne({ $or: [{ username: req.body.username.toLowerCase() }, { email: req.body.email }] })
        // if exist, we get nack this custom error 
    if (user) {
      res.status(403)
      return next(new Error("That username or email is already taken"))
    }
    // save method to finish it off 
    const newUser = new User(req.body)
    const savedUser = await newUser.save()
    const token = jwt.sign(savedUser.toObject(), process.env.SECRET)
    return res.status(201).send({ token, user: savedUser })
  } catch (err) {
    res.status(500)
    return next(err)
  }
}

const loginRoute = async(req, res, next) => { 
    try {
        const user = await User.findOne({ username: req.body.username.toLowerCase() })
        if(!user){
            res.status(403)
            return next(new Error('Username or password is incorrect'))
        }
        if(req.body.password != user.password){
            res.status(403)
            return next (new Error('Username or password is incorrect'))
        }
        const token = jwt.sign(user.toObject(), process.env.SECRET)
        return res.status(201).send({ token, user })
      } catch (err) {
        res.status(500)
        return next(err)
      }
  }
  
    
module.exports = {signupRoute, loginRoute}
