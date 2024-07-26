const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root! thank you so much",
  });
});

app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.get("/pathss", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from paths!",
    statusCode: 200,
    statusCodeDescription: "OK"
  })
});

app.get("/hello-world", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from hello!",
  });
});

app.get("/custom-error", (req, res, next) => {
  throw new Error("This is a custom error");
});


app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.run = serverless(app);
