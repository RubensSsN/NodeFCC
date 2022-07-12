var express = require("express");
var app = express();
//tried this in place of mySecret too. const secret = process.env.MESSAGE_STYLE

/* app.get('/', function(req, res) {
  res.send('Hello Express');
}); */

app.use("/public", express.static(__dirname + "/public"));

const mySecret = process.env.MESSAGE_STYLE;

app.get("/json", function (req, res) {
  const helloJSON = "Hello json";
  let message;
  if (process.env.MESSAGE_STYLE === "uppercase") { // I also put process.env.MESSAGE_STYLE in place of mySecret
    message = helloJSON.toUpperCase();
  } else {
    message = helloJSON;
  }
  const data = {
    message: message,
  };
  res.json(data);
});

app.get("/", function (req, res) {
  const filePath = __dirname + "/views/index.html";
  console.log(filePath);
  res.sendFile(filePath);
});

module.exports = app;
