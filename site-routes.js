/**
 * Created by francizidar on 23/03/16.
 */
var mongoose = require('mongoose');

exports.init = function(server){

    server.get('/', function(req,res){

        var Article = mongoose.model('Article');

        Article.find(function(err, articleDocs){

            res.render('articles',{ articles:articleDocs });

        });



    });

};