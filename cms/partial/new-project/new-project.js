angular.module('simpleCrud').controller('NewProjectCtrl',function($scope, projectService){

    $scope.project = {};

    $scope.onSaveClick = function(){

        projectService.create($scope.project);

    };

});
