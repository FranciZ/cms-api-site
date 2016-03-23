var mongoose = require('mongoose');

exports.connect = function(cb){
  
    mongoose.connect('mongodb://localhost/simple-crud-2');
    
    mongoose.connection.on('error', function(err){
        
        console.log(err);
        
    });
    
    mongoose.connection.once('open', function(){
        
        console.log('Connected to the database');
        if(cb){
            cb();
        }
        
    });
    
};