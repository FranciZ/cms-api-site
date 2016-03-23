angular.module('simpleCrud').controller('EditArticleCtrl',function($scope, $stateParams, articleService, $state){

    var articleId = $stateParams.id;

    $scope.onDeleteClick = function(){

        var removed = articleService.remove(articleId);

        if(removed){
            $state.go('articles');
        }

    };



});
