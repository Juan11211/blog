const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const bcrypt = require('bcrypt')
const validator = require('validator');

const userSchema = new Schema({
    username: { 
        type: String, 
        required: true,
        unique: true,
        lowercase: true
    }, 
    email: {
        type: String, 
        required: true,
        unique: true
    }, 
    password: {
        type: String, 
        required: true,
    }, 
    isAdmim: { 
        type: Boolean, 
        default: false
    },
    memberSince: { 
        type: Date, 
        default: Date.now
    },
    posts: { 
       type: Array, 
       default: []

    }
})

// userSchema.statics.signup = async function(username, email, password)   {

//     // validation 
//     if(!username || !email || !password ){
//         throw Error('All fields must be filled')
//     }
//     if(!validator.isEmail(email)){
//         throw Error (`Email is not valid`)
//     }
//     if(!validator.isAlphanumeric(username)){
//         throw Error (`Username is not valid`)
//     }
//     if(!validator.isStrongPassword(password)){
//         throw Error(`Password isn't strong enough`)
//     }
//     const exists = await this.findOne({username, email})
//  if (exists) {
//     throw Error('Username or email')
// }

// const salt = await bcrypt.genSalt(10)
// const hash = await bcrypt.hash(password, salt)

// const user = await this.create({ username, email, password: hash})

// return user

// }

// // static login method 
// userSchema.statics.login = async function(username, password){
//     // validation 
//     if(!username || !password ){
//         throw Error('All fields must be filled')
//     }

//     const user = await this.findOne({username})
//     if (!user) {
//        throw Error('Username is incorrect')
//    }

//    const match = await bcrypt.compare(password, user.password)

//    if(!match){
//        throw Error('Incorrect password')
//    }
   
//    return user
    
// }
module.exports = mongoose.model('User', userSchema); 