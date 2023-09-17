const express = require("express");
const router = express.Router();
const blogController = require('./../Controllers/blogController');
const { protect, isAuthor, isAuthorized } = require("../Controllers/userController");

router.route('/').get(blogController.getAllBlog).post(protect, blogController.addBlog);
router.route('/:blogId').get( blogController.getBlogById).patch(protect, isAuthor, blogController.patchBlog).delete()
router.route('/:blogId/comments').post(protect,blogController.addComments )
router.route('/:blogId/comments/:commentId').delete(protect, isAuthorized, blogController.deleteComments)


module.exports = router;
