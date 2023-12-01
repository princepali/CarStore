(function () {
    var style = '<div><style>.dvloader{position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:99999;background:rgba(0, 0, 0, 0.5);color:#fff;}\                    .global-loader{position:fixed;z-index:9999;top:50%;left:50%;width:48px;height:48px;}\
                </style>';

    angular.module('lazyLoader', []).directive('loader', ['$http', '$rootScope', function ($http, $rootScope) {
        return {
            restrict: 'AE',
            replace: true,
            scope: {
            },
            template: style + '<div class="dvloader" style="display:none;" >\
                    <span class="global-loader">\
                     <i class="fa fa-spinner fa-spin fa-3x"></i>\
                    </span>\
           </div></div>',
            link: function (scope) {
            },
            controller: 'lazyLoader'
        }
    }]);

    angular.module('lazyLoader').controller('lazyLoader', ['$scope', '$http', function ($scope, $http) {
        angular.element(document).ready(function () {
            //angular.element(".dvloader").hide();
            document.getElementsByClassName("dvloader")[0].style.display = 'none';
        });

        $http.defaults.transformRequest.push(function (data) {
            //angular.element(".dvloader").show();
            document.getElementsByClassName("dvloader")[0].style.display = 'block';
            return data;
        });
        $http.defaults.transformResponse.push(function (data, status, statusCode) {
            //angular.element(".dvloader").hide();
            if (typeof (data) == "string" && data.indexOf('/Account/Login') == 0 && statusCode == 403) {
                window.location = data;
            }
            document.getElementsByClassName("dvloader")[0].style.display = 'none';
            return data;
        })
        return $http;
    }]);
})();


