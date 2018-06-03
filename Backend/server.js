var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  User = require('./api/models/userModel'),
  Change = require('./api/models/changeModel'),
  Pipe = require('./api/models/pipeModel'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  PipeNew = require('./api/models/pipe') ;


mongoose.connect('mongodb+srv://si2018user:si2018pass@cluster0-aqpgk.mongodb.net/test?retryWrites=true')
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var changeRoutes = require('./api/routes/changeRoutes');
var userRoutes = require('./api/routes/userRoutes');
var pipeRoutes = require('./api/routes/pipeRoutes'); 
const pipeNewRoutes = require('./api/routes/pipes');

changeRoutes(app); 
userRoutes(app);
pipeRoutes(app);
app.use('/api', pipeNewRoutes);

app.listen(port);

console.log('RESTful API server started on: ' + port);