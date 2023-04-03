const express = require('express');
const {getAllPost, postPost, editPost, deletePost, getAllUserPosts, getUserPosts} = require('../Controllers/postController');
const postRouter = express.Router();
const Post = require('../Models/Post')

postRouter.get('/', getAllPost)
postRouter.get('/user', getUserPosts)
postRouter.get('/:userId', getAllUserPosts)
postRouter.post('/', postPost)
postRouter.put('/:postId', editPost)
postRouter.delete('/:postId', deletePost)



module.exports = postRouter;