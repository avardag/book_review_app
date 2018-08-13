const express = require("express"),
  bodyParser = require("body-parser"),
  cookieParser = require("cookie-parser"),
  mongoose = require("mongoose"),
  config = require("../config/config").get(process.env.NODE_ENV),
  app = express();

// /mongo settings
mongoose.Promise = global.Promise;
mongoose.connect(config.DATABASE);
//db models
const { User } = require("./models/user");
const { Book } = require("./models/book");

app.use(bodyParser.json());
app.use(cookieParser());






//SERVER
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
