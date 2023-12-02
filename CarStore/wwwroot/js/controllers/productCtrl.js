
app.controller('productCtrl', ['$scope', 'productsData', function ($scope, productsData) {
    //Getting Products
    $scope.getProducts = function () {
        productsData.getProducts().then(function (resp) {
            $scope.products = resp.data;
            if (resp.data && resp.data.length > 0) {
                $scope.totalProducts = resp.data[0].totalRecords;

            } else {
                $scope.totalProducts = 0;
                $scope.totalRecords = 0;
            }
        })
    };


}]);
