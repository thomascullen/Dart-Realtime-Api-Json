var express = require('express'),
    routes = require('./routes');
 
var app = express();
 
app.get('/dart/stations', routes.dartStations);
app.get('/dart/stations/:id', routes.dartStation);
 
app.listen(3000);
console.log('Listening on port 3000...');