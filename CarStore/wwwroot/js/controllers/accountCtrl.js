
app.controller('accountCtrl', ['$scope', 'accountData', function ($scope, accountData) {
    $scope.selectedUser = {};
    $scope.userFilter = {};
    $scope.userRecordIds = [];
    accountData.getRoles().then(function (result) {
        $scope.roles = result.data;
    }, function (err) {
        console.log(err);
    });
    //Getting users
    $scope.getUsers = function (filter) {
        accountData.getUsers(filter).then(function (resp) {
            $scope.userList = resp.data;
            if (resp.data && resp.data.length > 0) {
                $scope.totalUsers = resp.data[0].totalRecords;

            } else {
                $scope.totalUsers = 0;
                $scope.totalRecords = 0;
            }
        })
            .catch(function (error) {

            });
    };
    //Selecting User details for deleting records
    $scope.selectedDelete = function (item) {
        $("#deleteMember").modal("show");
        $scope.clickedUser = item;
    };
    //Deleting User
    $scope.deleteUser = function () {
        accountData.deleteUser($scope.clickedUser).then(function (result) {
            $scope.data = result.data;
            $scope.message = $scope.data.message;
            $scope.isValid = result.data.isValid;
            $("#deleteMember").modal("hide");
            $scope.modalPopup();
        });
    };
    //Selecting User details for editing records
    $scope.selectedEdit = function (item) {
        $scope.userDetails = {};
        angular.extend($scope.userDetails, item);
        $("#editMember").modal("show");
    };
    //update user details
    $scope.updateUser = function (userDetails) {
        $scope.selectedUser = userDetails;
        accountData.updateUser($scope.selectedUser).then(function (result) {
            $("#editMember").modal("hide");
            $scope.data = result.data;
            $scope.message = $scope.data.message;
            $scope.isValid = result.data.isValid;
            $scope.modalPopup();
        });
    };
    //success message popup
    $scope.modalPopup = function () {
        if ($scope.message !== undefined) {
            $("#successMsg").modal("show");
        }
        $scope.getUsers($scope.userFilter);
    }
    //clear filter from usermanagemnet
    $scope.clearFilter = function (filter) {
        $scope.userFilter = {};
        $scope.userFilter.pageNumber = filter.pageNumber;
        $scope.userFilter.pageSize = filter.pageSize;
        $scope.getUsers($scope.userFilter);
    };
    // Pagination for Usermanagement page size and page number from view
    $scope.getPaginatedUsers = function (pageSize, pageNumber) {
        $scope.userFilter.pageSize = pageSize;
        $scope.userFilter.pageNumber = pageNumber;
        $scope.getUsers($scope.userFilter);
    };
    //SideNavbar at mobile responsive page
    $('.navbar-toggler').click(function () {
        $('.navbar-collapse').toggleClass('right');
        $('.navbar-toggler').toggleClass('indexHighlight');
    });


}]);
