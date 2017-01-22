app.component("signup", {
    templateUrl: "js/components/signup/signup.html",
    controller: function($scope, $state, SignupService, sessionService) {
        $scope.title = $state.name;
        $scope.user = {};
        $scope.msg = [];
        $scope.signup = function() {

            sessionService.set("mobileNo", $scope.user.mobile);
            SignupService.signup($scope.user).then(
                function(res) {
                    console.log(res);
                    $scope.msg = res.data;
                    $state.go('app.otp');
                },
                function(error) {
                    console.log(error);
                });
        }
    }
});