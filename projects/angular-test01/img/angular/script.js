var hivisasaApp = angular.module('hivisasa', ['ngRoute', 'ngSanitize']);


// configure page routes
hivisasaApp.config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    }).when('/article/:id', {
        templateUrl: 'views/article.html',
        controller: 'singleArticleController'
    }).when('/category/:category', {
        templateUrl: 'views/category.html',
        controller: 'categoryController'
    });

    $locationProvider.html5Mode(false);
});

// controllers
hivisasaApp.controller('sidebarController', function ($scope, $http) {
    $scope.sidebarTitle = 'Top News';

    //get sidebar articles
    $http({method: 'GET', url: 'http://api.hivisasa.com/v1/articles/county/nairobi/top'}).success(function (response) {
        $scope.sidebarArticles = response.articles;
    });
});

hivisasaApp.controller('homeController', function ($scope, $http) {
    // Page/Section Title
    $scope.sectionTitle = 'Lastest News';

    //get latest articles
    $http({method: 'GET', url: 'http://api.hivisasa.com/v1/articles/county/default/page/2'}).success(function (response) {
        $scope.articles = response.articles;
        console.log(response);
    });

});

hivisasaApp.controller('singleArticleController', function ($scope, $http, $routeParams, $window, $route) {
    //get single article

    //var id = $routeParams.id;
    var id = $routeParams.id;
    $scope.url = "http://api.hivisasa.com/v1/articles" + "/" + parseInt(id);
    //$scope.url = "http://localhost/hivisasa_api/get_single_article.json";

    var transform = function (data) {
        return $.param(data);
    };

    $http({method: 'GET', data: '',
        url: $scope.url}).success(function (response) {
        $scope.articles = response.content;
        $scope.articleImage = $scope.articles.image_uri;
        $scope.sectionTitle = $scope.articles.title;
        $scope.articleBody = $scope.articles.body;
        $scope.articleWriter = $scope.articles.writer.name;
        $scope.articleDate = $scope.getDate($scope.articles.post_date);
        $scope.articleCategory = $scope.articles.category;
        $scope.pageViews = $scope.articles.page_view;

        // get related articles
        $scope.relatedArticles = response.related_articles;
        $window.scrollTo(0, 0);
        console.log(response);
    });


    //converts timestamp to human readable date
    $scope.getDate = function (timestamp) {
        var d = new Date(timestamp);
        return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    };
});

hivisasaApp.controller('categoryController', function ($scope, $http, $routeParams, $window) {
    // Page/Section Title
    $scope.sectionTitle = $routeParams.category;
    $scope.url = "http://api.hivisasa.com/articles/county/nakuru/category" + "/" + $scope.sectionTitle;
    //$scope.url = "http://localhost/hivisasa_api/get_latest_articles_by_location.json";
    console.log($scope.url);
    //get latest articles
    $http({method: 'GET', url: $scope.url}).success(function (response) {
        $scope.articles = response;
        console.log(response);
    });

});