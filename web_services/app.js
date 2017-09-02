var express = require('express');
var routes = require('./routes');
var bodyparser = require('body-parser');

var app = express();

app.listen(8080, function () {
  console.log("Escuchando el puerto 8080 :D");
});

app.use(bodyparser.urlencoded({extend : true}));
app.use('/', routes);
