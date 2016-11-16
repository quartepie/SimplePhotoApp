app.controller('StartController', ['$scope','GetPhotos',function ($scope, GetPhotos) {
    $scope.limit = 30;
    GetPhotos.success(function (data) {
        $scope.photos = data;
    })
}]);

app.controller('AlbCtrl',function ($scope, GetPhotos, $routeParams) {
    $scope.albumId = $routeParams.album_Id;
    GetPhotos.success(function (data) {
        $scope.photos = data;
    });
    $scope.albumPhoto = function (item) {
        return item.albumId == $scope.albumId;
    };
});

app.controller('PhotoCtrl',function ($scope, GetPhotos, $routeParams) {
    $scope.photoId = $routeParams.photo_Id;
    $scope.Index = $scope.photoId - 1;
    GetPhotos.success(function (data) {
        $scope.photos = data;
        $scope.imgUrl = $scope.photos[$scope.Index].url;
        $scope.Title = $scope.photos[$scope.Index].title;
    });
    
});

