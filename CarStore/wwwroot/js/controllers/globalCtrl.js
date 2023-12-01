app.controller('globalCtrl', ['$scope', function ($scope) {

    $scope.post = function (path, params, method) {
        method = method || "post"; // Set method to post by default if not specified.

        // The rest of this code assumes you are not using a library.
        // It can be made less wordy if you use one.
        var form = document.createElement("form");
        form.setAttribute("method", method);
        form.setAttribute("action", path);
        form.id = "_formPost";
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                var hiddenField = document.createElement("input");
                hiddenField.setAttribute("type", "hidden");
                hiddenField.setAttribute("name", key);
                hiddenField.setAttribute("value", (params[key] == null || undefined) ? '' : params[key]);

                form.appendChild(hiddenField);
            }
        }

        document.body.appendChild(form);
        form.submit();
        document.querySelector('#_formPost').remove();
    };
    //Angularjs Regex Validations
    $scope.validationConstants = {
        guidValidator: "^[{]?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}[}]?$",
        rangeValidator: "^([1-9]|[1-9][0-9]|100)$",
        onlyNumbers : "^[0-9]*$",
        onlyNumbersUptoFiveDecimals : "^[0-9]+(\.[0-9]{1,5})?$",
        onlyNumbersUptoTwoDecimals : "^[0-9]+(\.[0-9]{1,2})?$",
        onlyText : "^[a-zA-Z]*$",
        onlyTextWithSpaces : "^[a-zA-Z\s]*$",
        emailFormat : "^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$",
        caseSensitivePassword: "^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$",
        intAndChars: "^[^A-Za-z0-9]$"
    }

}]);