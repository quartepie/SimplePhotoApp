var app = angular.module("photoApp",['ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "templates/photolist.html"
            })
            .when("/photos/:photo_Id", {
                templateUrl : 'templates/photo.html'
            })
            .when("/albums/:album_Id", {
                templateUrl : 'templates/album.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
