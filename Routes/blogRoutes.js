const express = require("express");
const router = express.Router();
const blogController = require('./../Controllers/blogController');
const { protect } = require("../Controllers/userController");

router.route('/').get(blogController.getAllBlog).post(blogController.addBlog);
router.route('/:blogId').get(protect ,blogController.getBlogById)

module.exports = router;
