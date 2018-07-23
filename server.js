var express = require ('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
let PORT = process.env.PORT || 8000;

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
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
    console.log("Server listening on: http://localhost " + PORT)
  });
