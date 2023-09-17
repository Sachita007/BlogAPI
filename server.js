const mongoose = require("mongoose");
require('dotenv').config();
const ErrorHandler = require('./Controllers/errorController')
const app = require("./app");


const port = 3000;


mongoose.set("strictQuery", false);


// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/blogDB").then(() => {
    console.log("Connected");
  });
}


app.use(ErrorHandler)
app.listen(port, () => {
  console.log(` App listening on port ${port}`);
});
