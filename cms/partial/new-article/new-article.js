angular.module('simpleCrud').controller('NewArticleCtrl',function($scope, articleService, $state){

    $scope.article = {};
    
    $scope.createArticle = function(){
      
        // execute create function in articleService and pass the article data to it
        
        // article data is gathered from the html template using ng-model attributes
        articleService.create($scope.article, function(){
            
            $state.go('articles');
            
        });
        
    };
    
});