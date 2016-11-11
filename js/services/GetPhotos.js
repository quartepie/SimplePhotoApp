app.factory('GetPhotos', ['$http',function ($http) {
    return $http.get('http://jsonplaceholder.typicode.com/photos')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        })
    
}]);





/*
 return{
 GetRespond: (function(response){
 return $http.get('http://jsonplaceholder.typicode.com/photos')
 .then(function (response) {
 console.log("coming from servicejs", response.data);
 return response.data;
 });
 })()
 };
 return GetPhotos;
*/