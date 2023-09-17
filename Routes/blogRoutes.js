const express = require("express");
const router = express.Router();
const blogController = require('./../Controllers/blogController')

router.route('/').get(blogController.getAllBlog).post(blogController.addBlog);
router.route('/:blogId').get(blogController.getBlogById)

module.exports = router;
