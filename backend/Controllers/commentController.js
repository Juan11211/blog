const Comment = require('../Models/Comment');
const Post = require('../Models/Post');


const Comment = require('../models/Comment');
const Post = require('../models/Post');

const postComment = async (req, res, next) => { 
  try {
    const post = await Post.findById(req.params.postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const { text } = req.body;
    const { _id: user } = req.user;
    
    const comment = new Comment({ text, user, post: post._id });
    const savedComment = await comment.save();
    
    post.comments.push(savedComment._id);
    await post.save();
    
    return res.status(201).json(savedComment);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = postComment;


module.exports = postComment 