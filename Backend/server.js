var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  User = require('./api/models/userModel'),
  Change = require('./api/models/changeModel'),
  Pipe = require('./api/models/pipeModel'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose') ;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/NVM'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var changeRoutes = require('./api/routes/changeRoutes');
var userRoutes = require('./api/routes/userRoutes');
var pipeRoutes = require('./api/routes/pipeRoutes'); 
changeRoutes(app); 
userRoutes(app);
pipeRoutes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);