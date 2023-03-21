const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String, 
        required: true, 
        trim: true
    }, 
    author: { 
        type: String, 
        required: true, 
        trim: true
    },
    body: { 
        type: String, 
        required: true, 
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    image: {
        type: String, 
        trim: true
    },
    comments: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
        required: true
    },
    likes: { 
        type: Number,
        default: 0
    },
    likers: { 
        type: Array
    }

})

module.exports = mongoose.model('Post', postSchema)