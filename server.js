var express = require ('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Use Express
var app = express();

// Server configuration
app.use(express.static(_dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));

// Use Handlebars
app.engine('handlebars', exphbs({
    defaultLarout: 'main'
}));

// Default Port 3000
var port = 3000;
app.listen(port);

