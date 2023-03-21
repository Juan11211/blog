const mongoose = require('mongoose');
const Schema = new mongoose.Schema;

const commentSchema = new Schema({
    comment: {
        type: String
    },

    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    username: {
        type: Schema.Types.String,
        ref: "User",
        required: true
    },

    postId: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    }

})

module.exports = mongoose.model("Comment", commentSchema)