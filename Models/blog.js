const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define Comment Schema
const commentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Define Blog Schema
const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comments: [commentSchema],
  tags: [
    {
      type: String,
    },
  ],
});

// Compile the model
const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
