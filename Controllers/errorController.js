const AppError = require('./../Utils/AppError');


// ===== Handle Devlopment Error ==== 
const senErrorDev =(err,req,res)=>{
res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
}

// ====== handle Prroduction Error ====
const sendProdError = (err,req,res)=>{
 if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    } else {
      console.error('ERROR 💥:', err);
      
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong!'
      });
    }
}

// ====== Handle Validation Error ====
const validationError = (err)=>{
 const errors = Object.values(err.errors).map(el => el.message);
  const message = `Invalid input data. ${errors.join('. ')}`;
  return new AppError(message, 400);
}

// ==== Mongoose Error =======
const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = err => {

  const message=`${Object.keys(err.keyValue)}:${Object.values(err.keyValue)} already exists`;
  return new AppError(message, 400);
};

// ==== JWT Error ===
const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please log in again.', 401);

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    senErrorDev(err,req,res)
  } else if (process.env.NODE_ENV === 'production') {
    let error = {...err}
    error.message = err.message
    error.name = err.name

    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if(error.name==='ValidationError') error = validationError(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

     sendProdError(error,req,res)
  }
};

module.exports = globalErrorHandler;
