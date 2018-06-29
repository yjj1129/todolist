//express_demo.js 文件
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/register.html', function (req, res) {
    res.sendFile( __dirname + "/" + "register.html" );
})

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/list.html', function (req, res) {
    res.sendFile( __dirname + "/" + "list.html" );
})
app.use(express.static('public'));
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})