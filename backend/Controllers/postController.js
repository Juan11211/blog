const Post = require('../Models/Post');

const getAllPost = async (req, res, next) => {
    try {
      const posts = await Post.find();
      res.status(200).json({ posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

const getAllUserPosts = async (req, res, next) => {
    try {
      const userId = req.auth._id; // get the user ID from the authenticated request
      const posts = await Post.find({ userId }); // find all posts with matching user ID
      res.status(200).json({ posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  const getUserPosts = async (req, res, next) => {
    try {
      const userId = req.auth._id;
      const posts = await Post.find({ userId });
      res.status(200).json({ posts });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }                                                                                                                     ;
  
  

const postPost = async(req, res, next) => {
    try {
        // this is what being passed in by the user
      const { title, body, image, author, tags } = req.body;
      // userId is the id of the auth -- if schema was authId it would be called authId
      const userId = req.auth._id;
      // newPost is including the userId
      const newPost = new Post({ title, body, image, author, userId, tags });
      const savedPost = await newPost.save();
      return res.status(201).send(savedPost);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

const editPost = async (req, res, next) => {
    try {
      const updatedPost = await Post.findOneAndUpdate(
        { _id: req.params.postId },
        req.body,
        { new: true }
      );
  
      if (!updatedPost) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      return res.status(200).json(updatedPost);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const deletePost = async (req, res, next) => {
    try {
      const deletedPost = await Post.findOneAndDelete({ _id: req.params.postId });
  
      if (!deletedPost) {
        return res.status(404).json({ message: 'Post cannot be deleted' });
      }
  
      return res.status(200).json({ message: 'Post has been deleted'});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
  
  
  

  

module.exports = {getAllPost, getAllUserPosts, postPost, editPost, deletePost, getUserPosts}