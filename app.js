const express = require("express");
const app = express();
const blogRoutes = require("./Routes/blogRoutes");
const userRoutes = require("./Routes/userRoutes");
const morgan = require('morgan');
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.json());

app.use("/app/v1/blogs", blogRoutes);

app.use("/app/v1/users", userRoutes);

module.exports = app;
