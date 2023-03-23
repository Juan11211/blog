const mongoose = require('mongoose');
const Schema = mongoose.Schema

const commentSchema = new Schema({
  text: {
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
});

module.exports = mongoose.model("Comment", commentSchema);
