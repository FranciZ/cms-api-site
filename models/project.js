var mongoose = require('mongoose');

var Schema = mongoose.Schema({

    title       : { type:String, required:true },
    description : String,
    dateCreated : { type:Date, default:Date.now }

});

mongoose.model('Project', Schema);