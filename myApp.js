var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))

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
  res.json({time: req.time})
})

app.get('/', function(req, res) {
  const filePath = __dirname + '/views/index.html';
  console.log(filePath);
  res.sendFile(filePath);
});


app.get('/:word/echo', function(req,res) {
  word = req.params.word;
  const msg = {echo: word};
  res.json(msg);
});

app.route('/name').get(function(req,res) {
  res.json({ name: `${req.query.first} ${req.query.last}`})
}) .post(function(req,res) {
  res.json({ name: `${req.body.first} ${req.body.last}`})
})

/*app.post('/name', function(req,res) {     ISSO É UMA ALTERNATIVA PARA O DE CIMA SE N TIVESSE O PRIMEIRO .GET NA MESMA ROTA
  res.json({ name: `${req.body.first} ${req.body.last}`})
})*/

/* app.get('/', function(req, res) {
  res.send('Hello Express');
}); */









 module.exports = app;
