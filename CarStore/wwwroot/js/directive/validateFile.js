(function () {
    'use strict';
    app.directive('validateFile', function () {
        return {
            require: 'ngModel',
            link: function (scope, el, attrs, ngModel) {
                //change event is fired when file is selected
                el.bind('change', function () {
                    scope.$apply(function () {
                        ngModel.$setViewValue(el.val());
                        ngModel.$render();
                    });
                });
            }
        }
    });
}());