const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
// app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
// app.use(express.json());

// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// your code goes here
app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/add", (req, res) => {
  if ((req.body.num1 || req.body.num2) == "") {
    return res.json({
      status: "failure",
      message: "Invalid Entry",
    });
  }
  if (isNaN(req.body.num1 || req.body.num2)) {
    return res.json({
      status: "error",
      message: "Invalid data types",
    });
  }
  if (Number(req.body.num1) < -1e6 || Number(req.body.num2) < -1e6) {
    return res.json({
      status: "error",
      message: "Underflow",
    });
  }
  if (Number(req.body.num1) > 1e6 || Number(req.body.num2) > 1e6) {
    return res.json({
      status: "error",
      message: "Overflow",
    });
  }
  if (Number(req.body.num1) + Number(req.body.num2) > 1e6) {
    return res.json({
      status: "error",
      message: "Overflow",
    });
  }
  res.json({
    status: "success",
    message: "the sum of given two numbers",
    sum: `${Number(req.body.num1) + Number(req.body.num2)}`,
  });
});
//---------------------------------------------------------------------------------------------------------
app.post("/sub", (req, res) => {
  if ((req.body.num1 || req.body.num2) == "") {
    return res.json({
      status: "failure",
      message: "Invalid Entry",
    });
  }
  if (isNaN(req.body.num1 || req.body.num2)) {
    return res.json({
      status: "error",
      message: "Invalid data types",
    });
  }
  if (Number(req.body.num1) < -1e6 || Number(req.body.num2) < -1e6) {
    return res.json({
      status: "error",
      message: "Underflow",
    });
  }
  if (Number(req.body.num1) > 1e6 || Number(req.body.num2) > 1e6) {
    return res.json({
      status: "error",
      message: "Overflow",
    });
  }
  if (Number(req.body.num1) - Number(req.body.num2) < -1e6) {
    return res.json({
      status: "error",
      message: "Underflow",
    });
  }
  res.json({
    status: "success",
    message: "the difference of given two numbers",
    difference: `${Number(req.body.num1) - Number(req.body.num2)}`,
  });
});
// ----------------------------------------------------------------------------------------------------------
app.post("/multiply", (req, res) => {
  if ((req.body.num1 || req.body.num2) == "") {
    return res.json({
      status: "failure",
      message: "Invalid Entry",
    });
  }
  if (isNaN(req.body.num1 || req.body.num2)) {
    return res.json({
      status: "error",
      message: "Invalid data types",
    });
  }
  if (Number(req.body.num1) < -1e6 || Number(req.body.num2) < -1e6) {
    return res.json({
      status: "error",
      message: "Underflow",
    });
  }
  if (Number(req.body.num1) > 1e6 || Number(req.body.num2) > 1e6) {
    return res.json({
      status: "error",
      message: "Overflow",
    });
  }
  if (Number(req.body.num1) * Number(req.body.num2) < -1e6) {
    return res.json({
      status: "error",
      message: "Underflow",
    });
  }
  if (Number(req.body.num1) * Number(req.body.num2) > 1e6) {
    return res.json({
      status: "error",
      message: "Overflow",
    });
  }
  res.json({
    status: "success",
    message: "the Multplication of given two numbers",
    result: `${Number(req.body.num1) * Number(req.body.num2)}`,
  });
});
// ----------------------------------------------------------------------------------------------------------
app.post("/divide", (req, res) => {
  if ((req.body.num1 || req.body.num2) == "") {
    return res.json({
      status: "failure",
      message: "Invalid Entry",
    });
  }
  if (isNaN(req.body.num1 || req.body.num2)) {
    return res.json({
      status: "error",
      message: "Invalid data types",
    });
  }
  if (Number(req.body.num1) < -1e6 || Number(req.body.num2) < -1e6) {
    return res.json({
      status: "error",
      message: "Underflow",
    });
  }
  if (Number(req.body.num1) > 1e6 || Number(req.body.num2) > 1e6) {
    return res.json({
      status: "error",
      message: "Overflow",
    });
  }
  if (Number(req.body.num2) === 0) {
    return res.json({
      status: "error",
      message: "Cannot divide by zero",
    });
  }
  if (Number(req.body.num1) / Number(req.body.num2) < -1e6) {
    return res.json({
      status: "error",
      message: "Underflow",
    });
  }
  if (Number(req.body.num1) / Number(req.body.num2) > 1e6) {
    return res.json({
      status: "error",
      message: "Overflow",
    });
  }
  res.json({
    status: "success",
    message: "The division of given numbers",
    result: `${Number(req.body.num1) / Number(req.body.num2)}`,
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
