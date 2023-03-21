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
  

module.exports = getAllPost