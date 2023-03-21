const express = require('express');
const getAllPost = require('../Controllers/postController');
const postRouter = express.Router();
const Post = require('../Models/Post')

postRouter.get('/', getAllPost)



module.exports = postRouter;