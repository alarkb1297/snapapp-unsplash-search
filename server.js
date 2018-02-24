// var express = require('express');
// var path = require('path');
// var bodyParser = require('body-parser');
//
// var index = require('./routes/index');
//
// var app = express();
//
// // View Engine
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);
//
// // Set Static Folder
// app.use(express.static(path.join(__dirname, 'client')));
//
// // Body Parser
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
//
// // Routes
// app.use('/', index);

require('dotenv').config();
var app = require('./express');
var express = app.express;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);

