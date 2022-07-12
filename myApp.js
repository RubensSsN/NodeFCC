var express = require('express');
var app = express();

console.log('Hello World');



/* app.get('/', function(req, res) {
    res.send('Hello Express');
}); */

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    const filePath = __dirname + '/views/index.html';
    console.log(filePath);
    res.sendFile(filePath);
});




//app.use(__dirname + '/public', express.static('/public'))














    module.exports = app;
