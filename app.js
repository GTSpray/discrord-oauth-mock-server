const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const loginRouter = require("./routes/login.route");
const indexRouter = require("./routes/oauth2.route");
const usersRouter = require("./routes/users.route");

const app = express();

app
  .use(logger("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, "public")))

  .use("/", indexRouter)
  .use("/login", loginRouter)
  .use("/users", usersRouter);

const listener = app.listen(8080, () => {
  console.log("Listening on port " + listener.address().port);
});
