app.factory('productsData', ['$http', function ($http) {


    var service =
    {
        getProducts: function () {
            return $http.post('/Product/GetProducts/');
        }
    }; return service;
}]);