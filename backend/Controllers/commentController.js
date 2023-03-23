const Comment = require('../models/Comment');
const Post = require('../Models/Post')


const getAllComments = async (req, res, next) => {
    const { postId } = req.params;
  
    try {
      const comments = await Comment.find({ postId }).exec();
      return res.status(200).json(comments);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
const postComment = async (req, res, next) => {
    const { postId } = req.params;
    req.body.userId = req.auth._id;
    req.body.username = req.auth.username;
    req.body.postId = postId;
    const newComment = new Comment(req.body);
    try {
        const savedComment = await newComment.save();
        await Post.findByIdAndUpdate(postId, { $push: { comments: savedComment._id } });
        res.status(201).send(savedComment);
    } catch (err) {
        res.status(500);
        next(err);
    }
};

const deleteComment = async (req, res, next) => {
    const { commentId } = req.params;
    const userId = req.auth._id;
  
    try {
      const deletedComment = await Comment.findOneAndDelete({ _id: commentId, userId: userId });
      if (deletedComment) {
        const updatedPost = await Post.findByIdAndUpdate(
          deletedComment.postId,
          { $pull: { comments: commentId } },
          { new: true }
        );
        if (updatedPost) {
          return res.status(200).json({ message: 'Comment has been deleted' });
        } else {
          return res.status(404).json({ message: 'Post not found' });
        }
      }
      return res.status(404).json({ message: 'You are not authorized to delete this comment' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  

module.exports = {
  postComment, deleteComment, getAllComments
}