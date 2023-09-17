const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); // To hash passwords

const Schema = mongoose.Schema;

// Define User Schema
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Please provide  username'],
    unique: true,
  },
  email: {
     type: String,
    required: [true, 'Email cannot be empty'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Please provide a valid email address."],
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
  profilePic: {
    type: String, // URL to the profile picture
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  blogs: [
    {
      type: Schema.Types.ObjectId,
      ref: "Blog", // Reference to Blog posts by this user
    },
  ],
});

// Hash the password before saving the user model
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.cpassword = undefined;
  next();
});

// Method to compare password for login
userSchema.methods.comparePassword = async function (
  userPassword,
  databasePassword
) {
  return await bcrypt.compare(userPassword, databasePassword);
};

// Compile the model
const User = mongoose.model("User", userSchema);

module.exports = User;
