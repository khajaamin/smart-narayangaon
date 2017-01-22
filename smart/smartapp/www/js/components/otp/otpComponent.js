app.component("otp",
{
	templateUrl:"/js/components/otp/otp.html",
	controller:function($scope,$state,OtpService,sessionService,$ionicHistory) {
	$scope.title = $state.name; 
	$scope.user = {}; 
		$scope.msg = []; 
		
		$scope.user.mobile = sessionService.get("mobileNo");
		
		$scope.otp = function(frm)
		{
			if(frm.$valid)
			{
				OtpService.otp($scope.user).then(
				function(res){
					//console.log(res);
					$scope.msg = res.data;
					//console.log(res.data);
					
					if(res.data == "fail"){
						$state.go('app.otp');	
					}else{
						$ionicHistory.nextViewOptions({
						    disableBack: true
  						});
						$state.go('app.home');	
						sessionService.set("LoggedInUser",res.data);
					}
					
				},
				function(error){
					console.log(error);
				});
			}
		}
}
});