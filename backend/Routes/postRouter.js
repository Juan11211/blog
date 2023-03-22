const express = require('express');
const {getAllPost, postPost, editPost, deletePost} = require('../Controllers/postController');
const postRouter = express.Router();
const Post = require('../Models/Post')

postRouter.get('/', getAllPost)
postRouter.post('/', postPost)
postRouter.put('/:postId', editPost)
postRouter.delete('/:postId', deletePost)



module.exports = postRouter;