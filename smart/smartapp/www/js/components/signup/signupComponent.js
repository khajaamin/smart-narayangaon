app.component("signup",
{
	templateUrl:"/js/components/signup/signup.html",
	controller:function($scope,$state,SignupService,sessionService) {
	$scope.title = $state.name; 
	$scope.user = {}; 
		$scope.msg = []; 

		sessionService.set("LoggedInUser",{username:"sumit"});
		sessionService.destroy("LoggedInUser");

		console.log(sessionService.get("LoggedInUser"));

		$scope.signup = function()
		{
		SignupService.signup($scope.user).then(
				function(res){
					console.log(res);
					$scope.msg = res.data;
				},
				function(error){
					console.log(error);
				});
		}
}
});