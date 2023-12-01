app.directive('fileInput', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        require: 'ngModel', // Add require for NgModelController
        link: function (scope, element, attrs, ngModelCtrl) { // Inject ngModelCtrl
            element.bind('change', function () {
                scope.$apply(function () {
                    var file = element[0].files[0];
                    ngModelCtrl.$setValidity('required', !!file); // Set validity using ngModelCtrl
                    ngModelCtrl.$setViewValue(file); // Update the model value
                });
            });
        }
    };
}]);
