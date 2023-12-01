app.factory('accountData', ['$http', function ($http) {


    var service =
    {
        getRoles: function () {
            return $http.post('/Account/GetRoles/');
        },
        getUsers: function (userModel) {
            return $http.post('/Account/GetUsers/', userModel);
        },
        deleteUser: function (item) {
            return $http.post('/Account/DeleteUser/' + item);
        },
        updateUser: function (userModel) {
            return $http.post('/Account/updateUser/', userModel).then(function (data) {
                return data
            });
        }

    }; return service;
}]);