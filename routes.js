var mongoose = require('mongoose');

exports.init = function(server){
  
    console.log('Setup routes');
    
    server.get('/api/articles', function(req, res){
       
        var Article = mongoose.model('Article');
        
        Article.find(function(err, docs){
           
            res.send(docs);
            
        });
        
    });

    server.put('/api/article/:id', function(req, res){

        var id = req.params.id;

        var Article = mongoose.model('Article');

        Article.findByIdAndUpdate(id, req.body, function(err, doc){

            if(!err){
                res.send(doc);
            }else{
                res.sendStatus(400);
            }

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

        var newArticle = new Article(data);
        
        newArticle.save(function(err){

            if(!err) {
                res.send(data);
            }else{
                console.log(err);
                res.sendStatus(400);
            }
            
        });
        
    });

    server.post('/api/project', function(req, res){

        var data = req.body;

        var Project = mongoose.model('Project');

        var newProject = new Project(data);

        newProject.save(function(err){

            if(!err){
                res.send(newProject);
            }else{
                console.log(err);
                res.sendStatus(400);
            }

        });


    });

};








