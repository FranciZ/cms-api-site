var mongoose = require('mongoose');

var Schema = mongoose.Schema({
   
    title       : { type:String, required:true },
    content     : String,
    dateCreated : { type:Date, default:Date.now }
    
});

mongoose.model('Article', Schema);