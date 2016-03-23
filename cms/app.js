angular.module('simpleCrud', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('simpleCrud').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('articles', {
        url: '/articles',
        templateUrl: 'partial/articles/articles.html',
        controller:'ArticlesCtrl',
        resolve:{
            articles:function(articleService){

                return articleService.getAll();

            }
        }
    });


    $stateProvider.state('new-article', {
        url: '/new-article',
        templateUrl: 'partial/new-article/new-article.html',
        controller:'NewArticleCtrl'
    });
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'partial/projects/projects.html',
        controller:'ProjectsCtrl'
    });
    $stateProvider.state('edit-article', {
        url: '/edit-article/:id',
        templateUrl: 'partial/edit-article/edit-article.html',
        controller:'EditArticleCtrl',
        resolve:{
            article:function(articleService, $stateParams){

                return true;

            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/articles');

});

angular.module('simpleCrud').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
