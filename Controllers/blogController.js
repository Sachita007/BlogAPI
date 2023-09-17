const AppError = require('../Utils/AppError')
const asyncCatch = require('../Utils/asyncCatch')
const Blog = require('./../Models/blog')


exports.addBlog = asyncCatch( async(req,res,next)=>{
    const newBlog = {title,content,tags} = req.body;
    newBlog.author = req.user._id
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

exports.patchBlog = asyncCatch(async(req,res,next)=>{
    const updatedBlog = {title,content,tags} = req.body
    const blog = await Blog.findByIdAndUpdate(req.params.blogId, updatedBlog,{
    new: true,
    runValidators: true,
  })
  if(!blog){
    return  next(new AppError('No blog found!', 404))
  }
  res.status(200).json({
    success:'true',
    data:blog
  })
})

exports.addComments = asyncCatch(async(req,res,next)=>{
    const userId = req.user._id
    const blogId = req.params.blogId
    const newCommnet = {text} = req.body
    newCommnet.author = userId
    const blogCom = await Blog.findByIdAndUpdate(blogId,{$push:{comments:newCommnet}},{
    new: true,
    runValidators: true,
  })
  if(!blogCom){
    return  next(new AppError('No blog found!', 404))
  }
  res.status(200).json({
    success:'true',
    data:blogCom
  })

})

exports.deleteComments = asyncCatch(async(req,res,next)=>{
    const commentId = req.params.commentId
    const blogId = req.params.blogId
    
   
    const comment = await Blog.findOneAndUpdate({"_id":blogId},{$pull:{"comments":{"_id":commentId}}},{
    new: true,
    runValidators: true,
  })
  
    res.status(200).json({
        success:"true",
        data:comment
    })
})