const express = require("express");
const indexRouter = require("./routes/index");
const helmet = require("helmet");

const app = express();

app.use(helmet());
app.use("/", indexRouter);
app.use("/clubcard/:req_id", indexRouter);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.sendStatus(404);
});

module.exports = app;
