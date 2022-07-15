var express = require('express');
var app = express();
//tried this in place of mySecret too. const secret = process.env.MESSAGE_STYLE

/* app.get('/', function(req, res) {
  res.send('Hello Express');
}); */

app.use('/public', express.static(__dirname + '/public'));

const mySecret = process.env.MESSAGE_STYLE

app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get('/json', function(req, res) {
  const helloJSON = "Hello json";
  let message;
  message = process.env.MESSAGE_STYLE === 'uppercase' ? message = helloJSON.toUpperCase() : message = helloJSON;
  const data = {
    "message": message
  };
  res.json(data);
});

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function(req,res) {
  res.json({time: req.time});
});

app.get('/', function(req, res) {
  const filePath = __dirname + '/views/index.html';
  console.log(filePath);
  res.sendFile(filePath);
});















 module.exports = app;
