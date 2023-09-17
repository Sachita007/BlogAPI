const User = require("./../Models/users");
const JWT = require("jsonwebtoken");
const asyncCatch = require("./../Utils/asyncCatch");
const AppError = require("../Utils/AppError");
const { promisify } = require("util");
const signToken = (id)=>{
  return  JWT.sign({id:id},'iron_man', {expiresIn:'3d'})
}


exports.register = asyncCatch(async (req, res, next) => {
 const newUser = {username, email, password, fullName, profilePic,} =req.body
 const user = await User.create(newUser)
 const token = signToken(user._id)
 console.log(token)
 res.status(200).json({
  success:"true",
  token:token
 })
});


exports.logIn = asyncCatch(async (req,res,next)=>{
  const {email,password}=req.body;
  if(!email || !password){
  return next(new AppError('Please provide email or password', 401));
  }

  // Check user exists or password is correct
  const user = await User.findOne({email}).select("password")
 
  if(!user || !(await user.comparePassword(password,user.password))){
  return next(new AppError('Incorrect email or password',401))
  }

  const token  = signToken(user._id)
  res.status(200).json({
    success:'true',
    token:token
  })

})

exports.protect = asyncCatch(async(req,res,next)=>{
  let token;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    token = req.headers.authorization.split(" ")[1];
  }
  if(!token){
    return next(new AppError('You are not logged in! Please log in to get access', 401))
  }
  const decode = await promisify(JWT.verify)(token,process.env.JWT_SECRET)
  const user = await User.findById(decode.id)
  if(!user){
    return next(new AppError('The user blongs to this token no longer exists',401))
  }
    // GRANT ACCESS TO PROTECTED ROUTE
  req.user = currentUser;
  res.locals.user = currentUser;
  
  next()
  

})