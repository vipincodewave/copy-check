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
  if(1===1){
    return res.status(200).json({
      message: "Hello from pathss!",
      statusCode: 200,
      statusCodeDescription: "OK"
    })
  }
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.run = serverless(app);
