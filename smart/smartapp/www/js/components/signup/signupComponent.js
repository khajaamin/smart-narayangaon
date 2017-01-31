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
                      	console.log(res.data);
                      	if(res.data.status=='exist'){

                            var alertPopup = $ionicPopup.alert({
                             title: 'Notify',
                             template: res.data.message,
                           });
                             alertPopup.then(function(res) {
                      
                              $state.go('app.otp'); 
                          });
                        
                        }else{

                        if(res.data.status=='error'){

                        var alertPopup = $ionicPopup.alert({
                           title: res.data.title,
                           template: res.data.message
                         });

                           alertPopup.then(function(res) {
                  		
                  						$state.go('app.otp');	
                  				});

                      	}else{

                          var confirmPopup = $ionicPopup.confirm({
                             title: 'Confirm',
                             template: 'Are you sure?'
                          });

                          confirmPopup.then(function(res) {
                             if(res) {
                             
                                  $state.go('app.otp');
                             
                             } else {

                                console.log('Not sure!');
                             }
                          });

                      			
                      	
                        }
                      }
                    },
                    function(error) {
                        console.log(error);
                    });
            } // if From valid END
        }; // Sign up END 
    }

});