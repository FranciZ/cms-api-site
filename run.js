
var express = require('express');
var database = require('./database');
var routes  = require('./routes');
var siteRouter = require('./site-routes');
var bodyParser = require('body-parser');
var server = express();

// serve cms folder on /cms route
server.set('view engine','ejs');
server.use('/cms', express.static('cms'));
server.use('/assets', express.static('assets'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended:true }));

database.connect(function(){
    
    require('./models/article');

    server.listen(3000, function(){
   
        routes.init(server);
        siteRouter.init(server);
        console.log('Server running on port 3000');

    });
    
});
