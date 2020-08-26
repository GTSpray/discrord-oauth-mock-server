const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const loginRouter = require("./routes/login.route");
const indexRouter = require("./routes/oauth2.route");
const usersRouter = require("./routes/users.route");

const port = process.env.PORT || 8080

const app = express();

app
  .set('port', port)
  .use(logger("dev"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(cookieParser())
  .use(express.static(path.join(__dirname, "public")))

  .use("/", indexRouter)
  .use("/login", loginRouter)
  .use("/users", usersRouter);

const server = app.listen(app.get('port'), () => {
  console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});
