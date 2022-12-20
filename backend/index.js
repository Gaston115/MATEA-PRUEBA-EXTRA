const app = require("./src/app");
const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGO_ATLAS_DB

mongoose
  .connect(uri)
  /* .connect("mongodb://localhost:27017/eCommerce") LOCAL DB "TEST" */
  .then(() => {
    app.listen(8080, () => console.log("Server running"));
  })
  .catch(console.log);
