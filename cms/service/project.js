angular.module('simpleCrud').factory('projectService',function($http) {

	var project = {
        model:{
            list:[],
            item:null
        },
        create:function(projectData) {

            $http.post('/api/project', projectData)
                .then(function(res){

                    console.log(res);

                });

        },
        update:function(){

        },
        getAll:function(){

        },
        delete:function(){


        }
    };

	return project;
});
