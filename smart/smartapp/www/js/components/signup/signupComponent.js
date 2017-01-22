app.component("signup",
{
	templateUrl:"/js/components/signup/signup.html",
	controller:function($scope,$state,SignupService,sessionService) {
	$scope.title = $state.name; 
	$scope.user = {}; 
	$scope.msg = []; 
		$scope.signup = function(frm)
		{
			sessionService.set("mobileNo",$scope.user.mobile);
			// If Form Valid 
			if(frm.$valid)
			{
				SignupService.signup($scope.user).then(
					function(res){
						$scope.msg = res.data;
						$state.go('app.otp');
					},
					function(error){
						console.log(error);
					});
			} // if From valid END
		}; // Sign up END 
}
});