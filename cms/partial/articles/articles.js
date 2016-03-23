angular.module('simpleCrud').controller('ArticlesCtrl',function($scope, articleService){

    $scope.articles = articleService.model.list;

    $scope.onDeleteClick = function(id){

        articleService.remove(id);

    };


});
