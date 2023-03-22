const express = require('express');
const postComment = require('../Controllers/commentController');
const commentRouter = express.Router();

commentRouter.post('/:postId', postComment )


module.exports = commentRouter;