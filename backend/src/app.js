const express = require("express");
const errorController = require("./controllers/error-controller");
const HttpError = require("./models/http-error");
const app = express();
const cors = require("cors");


app.use(cors());
app.use(express.json(), express.urlencoded({ extended: false }));

app.use("/", require("./routes"));

app.all("*", (req, res, next) => {
  return next(
    new HttpError(
      `The ${req.originalUrl} path does not belong to this server`,
      404
    )
  );
});

app.use(errorController);

module.exports = app;
