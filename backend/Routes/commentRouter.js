const express = require('express');
const {postComment, deleteComment, getAllComments}  = require('../Controllers/commentController');
const commentRouter = express.Router();

commentRouter.get('/:postId/comments', getAllComments);
commentRouter.post('/:postId', postComment)
commentRouter.delete('/:commentId', deleteComment);

module.exports = commentRouter;