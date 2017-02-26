app.component("otp",
{
	templateUrl:"js/components/otp/otp.html",
	controller:function($scope,$state,OtpService,sessionService,$ionicHistory,$ionicPopup) {
	$scope.title = $state.name; 
	$scope.user = {}; 
	$scope.msg = []; 
	$scope.count =0;
		$scope.user.mobile = sessionService.get("mobileNo");

		$scope.otp = function(frm)
		{
			if(frm.$valid)
			{
				OtpService.otp($scope.user).then(
				function(res){
				
				if(res.data.status == "error"){
					 
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
