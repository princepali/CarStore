var dateTimePicker = function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attrs, ngModelCtrl) {
            var parent = $(element).parent();
            var dtp = parent.datetimepicker({
                format: "DD-MMM-YYYY",
                showTodayButton: true
            });
            dtp.on("dp.change", function (e) {
                ngModelCtrl.$setViewValue(moment(e.date).format("DD-MMM-YYYY"));
                scope.$apply();
            });
        }
    };
};



window.app.directive('dateTimePicker', dateTimePicker);