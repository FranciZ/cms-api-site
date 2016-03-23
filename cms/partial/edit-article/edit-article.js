angular.module('simpleCrud').controller('EditArticleCtrl',function(
    $scope,
    $stateParams,
    articleService,
    $state
){

    $scope.article = {};

    var articleId = $stateParams.id;

    var articleList = articleService.model.list;

    angular.forEach(articleList, function(article, i){

        if(article._id === articleId){
            $scope.article = article;
        }

    });

    $scope.onSaveClick = function(){

        articleService.update(articleId, $scope.article, function(){

            $state.go('articles');

        });

    };

    $scope.onDeleteClick = function(){

        var removed = articleService.remove(articleId);

        if(removed){
            $state.go('articles');
        }

    };



});
