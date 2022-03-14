/** @format */

const path = require("path");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//static
app.use("/build", express.static(path.join(__dirname, "../build")));

//serving index.html to '/'
app.get("/", (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, "../index.html"));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "express error handle problem",
    status: 500,
    message: { err: "big bad" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT);
console.log(`listening on port ${PORT}`);
