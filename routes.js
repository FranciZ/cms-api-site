var mongoose = require('mongoose');

exports.init = function(server){
  
    console.log('Setup routes');
    
    server.get('/api/articles', function(req, res){
       
        var Article = mongoose.model('Article');
        
        Article.find(function(err, docs){
           
            res.send(docs);
            
        });
        
    });
    
    server.delete('/api/article/:id', function(req, res){
        
        var id = req.params.id;
        
        var Article = mongoose.model('Article');
        
        Article.findByIdAndRemove(id, function(err, doc){
           
            if(!err){
                res.send(doc);
            }else{
                res.sendStatus(400);
            }
            
        });
        
    });
    
    
    // CREATE 
    server.post('/api/article', function(req, res){
       
        var Article = mongoose.model('Article');
        
        var data = req.body;
        
        var title = data.title;
        var content = data.content;
        
        var newArticle = new Article(data);
        
        newArticle.save(function(err){
           
            console.log(err);
            res.send(data);
            
        });
        
    });
    
};








