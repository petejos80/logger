var express = require ('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

// Use Express
var app = express();

// Server configuration
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));

// Handlebars configuration
app.engine('handlebars', exphbs({
    defaultLarout: 'main'
}));
app.set('view engine', 'handlebars');

// Define routes
var routes = require('./controllers/routes.js');
app.use('/',routes);

// Default to Port 3000
var port = 3000;
app.listen(port);

