(function () {
    angular.module('customPagination', []).directive('paging', ['$rootScope', function () {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                data: '=list',
                url: '@url',
                postObj: '=objecttopost',
                responsein: '=getdatain',
                totalRecords: '=totalrecords',
                pageSize$: '=pagesize',
                updateMethod: '=updatemethod',
                pageNo$: '=pageno'
            },
            template: '<div class="col-xs-12 col-12" ng-cloak>\
    <div ng-hide=" totalRecords <= pageSizes[0]" class="row form top-border-gray-1">\
        <div class="col-lg-3 d-none d-lg-block">\
             <label class="form-label" for="groupbutton10">Go to page</label>\
                <div class= "input-group pagenumber d-flex" >\
                    <div class="form-outline">\
                    <input type="number" min="1" class="form-control paging" style="max-width: 90px;" id="groupbutton10" ng-keypress = "searchOnEnter($event)" ng-model="goToPage" />\
                  </div>\
                  <button type="button" class="btn btn-info"  style="border-color:transparent;" ng-click="goToPageUpdate(goToPage);">\
                    <i class="fa fa-search text-white"></i>\
                  </button>\
                  </div>\
        </div>\
        <div class="col-lg-6 col-12  text-center my-3 my-lg-none mt-4">\
            <button type="button" class="btn btn-sm ink-reaction btn-info"  style="border-color:transparent;" ng-disabled ="pageNo==1" ng-click="updatePageNo(pageNo = 1);"><i class="fa fa-angle-double-left text-white"></i></button>\
            <button type="button" class="btn btn-sm ink-reaction btn-info" style="border-color:transparent;"  ng-disabled ="pageNo==1" ng-click="updatePageNo(getInt(pageNo) - 1);"><i class="fa fa-angle-left text-white"></i></button>\
            <span class="form-group top-padding-5">Page <span ng-bind="pageNo"></span> of <span ng-bind="totalPages"></span></span>\
            <button type="button" class="btn btn-sm ink-reaction btn-info" style="border-color:transparent;"  ng-disabled ="pageNo==totalPages" ng-click="updatePageNo(getInt(pageNo) + 1);"><i class="fa fa-angle-right text-white"></i></button>\
            <button type="button" class="btn btn-sm ink-reaction btn-info" style="border-color:transparent;"  ng-disabled ="pageNo==totalPages" ng-click="updatePageNo(totalPages);"><i class="fa fa-angle-double-right text-white"></i></button>\
        </div>\
         <div class="col-4 d-block d-lg-none">\
            <label class="form-label" for="groupbutton10">Go to page</label>\
                <div class= "input-group pagenumber d-sm-none d-flex" >\
                    <div class="form-outline">\
                    <input type="number" min="1" class="form-control paging" style="max-width: 40px;" id="groupbutton10" ng-keypress = "searchOnEnter($event)" ng-model="goToPage" />\
                  </div>\
                  <button type="button" class="btn btn-info" ng-click="goToPageUpdate(goToPage);">\
                    <i class="fa fa-search text-white"></i>\
                  </button>\
                </div>\
                 <div class="input-group pagenumber d-sm-flex d-none" >\
                    <div class="form-outline">\
                    <input type="number" min="1" class="form-control paging" style="max-width: 70px;" id="groupbutton10" ng-keypress = "searchOnEnter($event)" ng-model="goToPage" />\
                  </div>\
                  <button type="button" class="btn btn-info" ng-click="goToPageUpdate(goToPage);">\
                    <i class="fa fa-search text-white"></i>\
                  </button>\
                </div>\
        </div>\
         <div class="col-8 d-block d-lg-none justify-content-end margin-top-sm d-flex pt-3 mt-4">\
            <div class="form-group me-1">\
                <select class="input-sm col-xs-12" ng-model="pageSize" data-ng-change="updatePageNo(1);">\
                    <option ng-repeat="item in pageSizes" value="{{item}}"><span ng-cloak>{{item}}</span></option>\
                </select>\
            </div>\
            <div class="form-group">\
                <label class="fw-bold">Total Record: <span ng-bind="totalRecords"></span></label>\
            </div>\
        </div>\
        <div class="col-lg-3 d-none d-lg-block justify-content-end margin-top-sm d-lg-flex pt-3 mt-4">\
            <div class="form-group me-1">\
                <select class="input-sm col-xs-12" ng-model="pageSize" data-ng-change="updatePageNo(1);">\
                    <option ng-repeat="item in pageSizes" value="{{item}}"><span ng-cloak>{{item}}</span></option>\
                </select>\
            </div>\
            <div class="form-group">\
                <label class="fw-bold">Total Record: <span ng-bind="totalRecords"></span></label>\
            </div>\
        </div>\
    </div>\
   <div ng-if ="totalRecords <= 10 && totalRecords >= 1" class="float-end"><label class="control-label top-padding-10 fs-6">Total Record: <span class="text-bold" ng-bind="totalRecords"></span></label></div>\
</div>',
            link: function (scope) {
            },
            controller: 'paginationController'
        }
    }]);

    angular.module('customPagination').controller('paginationController', ['$scope', '$element', '$attrs', '$transclude', '$http', '$rootScope', function ($scope, $element, $attrs, $transclude, $http, $rootScope) {
        $scope.pageSizes = [10, 20, 30, 40, 50, 100, 250, 500];
        $scope.isInitialized = false;
        if ($scope.totalRecords <= $scope.pageSizes[0]) {
            return;
        }
        $scope.totalRecords = isNaN(parseInt($scope.totalRecords)) ? 0 : parseInt($scope.totalRecords);
        $scope.pageNo = isNaN(parseInt($scope.pageNo$)) ? 1 : parseInt($scope.pageNo$);
        $scope.goToPage = 1;
        $scope.pageSize = isNaN($scope.pageSize$) ? "10" : $scope.pageSize$.toString();
        $scope.totalPages = isNaN(Math.ceil($scope.totalRecords / $scope.pageSize)) ? 1 : Math.ceil($scope.totalRecords / $scope.pageSize) == 0 ? 1 : Math.ceil($scope.totalRecords / $scope.pageSize);
        $scope.getInt = function (no) {
            return parseInt(no);
        }
        $scope.tempPageSize = $scope.pageSize;
        $scope.searchOnEnter = function (event) {
            if (event.which == 13) {
                $scope.goToPageUpdate();
            }
        }
        $scope.goToPageUpdate = function () {
            if ($scope.goToPage == $scope.pageNo)
                return;
            else
                $scope.updatePageNo($scope.goToPage);
        };

        $scope.updatePageNo = function (no) {
            if (no > 0 && no <= $scope.totalPages) {
                $scope.pageNo = isNaN(parseInt(no)) ? 1 : parseInt(no);
                $scope.goToPage = no;
                if ((parseInt($scope.pageNo) != parseInt($scope.totalPages)) || ((parseInt($scope.pageSize) <= parseInt($scope.tempPageSize)) && (parseInt($scope.pageSize) <= parseInt($scope.totalRecords)))) {
                    $scope.applyScope();
                }
                $scope.totalPages = isNaN(Math.ceil($scope.totalRecords / $scope.pageSize)) ? 1 : Math.ceil($scope.totalRecords / $scope.pageSize) == 0 ? 1 : Math.ceil($scope.totalRecords / $scope.pageSize);
                $scope.totalRecords = isNaN($scope.totalRecords) ? 0 : parseInt($scope.totalRecords);
                $scope.tempPageSize = $scope.pageSize;

            }
        };
        $scope.$watch('totalRecords', function () {
            if (Math.ceil($scope.totalRecords / $scope.pageSize) != $scope.totalPages) {
                $scope.totalPages = isNaN(Math.ceil($scope.totalRecords / $scope.pageSize)) ? 1 : Math.ceil($scope.totalRecords / $scope.pageSize) == 0 ? 1 : Math.ceil($scope.totalRecords / $scope.pageSize);
                $scope.pageNo = isNaN($scope.totalRecords) ? 1 : $scope.pageNo;
                $scope.pageNo = 1;
                $scope.goToPage = 1;
            }
        });
        $scope.applyScope = function () {
            $scope.isInitialized = true;
            if (!$scope.pageNo$) {// if no pagNo attribute, only call updatemethod
                return $scope.updateMethod($scope.pageSize, $scope.pageNo);
            }
            // updating these values will apply $watch and call update method accordingly
            $scope.pageNo$ = parseInt($scope.pageNo);
            $scope.pageSize$ = parseInt($scope.pageSize);
        };
        $scope.$watch('pageNo$', function () {
            if ($scope.pageNo$ && $scope.isInitialized) {
                return $scope.updateMethod($scope.pageSize$, $scope.pageNo$);
            }
        });
        $scope.$watch('pageSize$', function () {
            if ($scope.pageNo$ && $scope.isInitialized) {
                return $scope.updateMethod($scope.pageSize$, $scope.pageNo$);
            }
        });

    }]);

})();