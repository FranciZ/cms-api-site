
var express = require('express');
var database = require('./database');
var routes  = require('./routes');
var bodyParser = require('body-parser');
var server = express();

// serve cms folder on /cms route
server.use('/cms', express.static('cms'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended:true }));

database.connect(function(){
    
    require('./models/article');

    server.listen(3000, function(){
   
        routes.init(server);
        console.log('Server running on port 3000');

    });
    
});
