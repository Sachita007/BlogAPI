const AppError = require('../Utils/AppError')
const asyncCatch = require('../Utils/asyncCatch')
const Blog = require('./../Models/blog')


exports.addBlog = asyncCatch( async(req,res,next)=>{
    const newBlog = {title,author,content,tags} = req.body;
    const blog = await Blog.create(newBlog)
    res.status(200).json({
        success:"true",
        data:blog
    })

})

exports.getAllBlog = asyncCatch( async (req,res,next)=>{
    const blogs = await Blog.find();
    res.status(200).json({
        success:"true",
        data:blogs
    })
})

exports.getBlogById = asyncCatch(async(req,res,next)=>{
    const blog = await Blog.findById(req.params.blogId)
    if(!blog){
        return next(new AppError('No blog with this blogId', 404))
    }
    res.status(200).json({
        success:'true',
        data:blog
    })
})