angular.module('simpleCrud').factory('articleService',function($http) {

	var article = {
        model:{
            list : [],
            item : null
        },
        // CRUD
        create:function(article, cb){
           
            $http.post('/api/article', article)
                .then(function(res){
                
                console.log(res);
                if(cb){
                    cb();
                }
                
            });
            
        },
        remove:function(id){
            
            var c = confirm('Are you sure?');
            
            if(c){
                
                var promise = $http.delete('/api/article/'+id);
                
                promise.then(function(res){
                    
                    console.log(res);
                   
                    angular.forEach(article.model.list, function(item, i){

                        if(id === item._id){
                            article.model.list.splice(i,1);
                        }

                    });

                });
            
            
            }
            
            return c;
                
        },
        update:function(){
            
        },
        getAll:function(cb){
         
            var promise = $http.get('/api/articles');
            
            promise.then(function(res){
               
                article.model.list = res.data;
                
                if(cb){
                    cb(res.data);
                }
                
            });
            
            return promise;
            
        }
        
    };
    
    
    
    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
    }

	return article;
});