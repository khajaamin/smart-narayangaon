app.component("signup", {
    templateUrl: "js/components/signup/signup.html",
    controller: function($scope, $state, SignupService, sessionService,$ionicPopup) {
        $scope.title = $state.name;
        $scope.user = {};
        $scope.msg = [];
        $scope.signup = function(frm) {
            sessionService.set("mobileNo", $scope.user.mobile);
            // If Form Valid 
            if (frm.$valid) {
                SignupService.signup($scope.user).then(
                    function(res) {

                        $scope.msg = res.data.status;
                      	
                      	if(res.data.status=='error'){

                      var alertPopup = $ionicPopup.alert({
                         title: res.data.title,
                         template: res.data.message
                       });

                       alertPopup.then(function(res) {
						$scope.count++;
						console.log($scope.count);
						$state.go('app.otp');	
						});

                      	}else{

                      		$state.go('app.otp');	

                      	}
                      
                    },
                    function(error) {
                        console.log(error);
                    });
            } // if From valid END
        }; // Sign up END 
    }

});