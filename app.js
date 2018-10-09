require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const app = express();

app.use(favicon(path.join(__dirname, 'static/Favicon', 'eulerKids.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(express.static(path.join(__dirname, "dist")));

const Env = env => {
  if (env === "development") {
    const allowCrossDomain = (req, res, next) => {
      res.header("Access-Control-Allow-Origin", "http://localhost:8080");
      res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
      res.header("Access-Control-Allow-Headers", "Content-Type");
      next();
    };
    return app.use(allowCrossDomain);
  }
};

Env(app.get("env"));

const Routes = require("./routes/routes");

app.use("/", Routes);

module.exports = app;
