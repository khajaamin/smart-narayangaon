app.component("offers",
{
	templateUrl:"/js/components/offerdetails/offerdetails.html",
	controller:function($scope,$state,OffersService,IMG_BASE,$ionicModal ) {
		$scope.title = $state.name; 
		$scope.IMG_BASE = IMG_BASE; 
		$scope.offerdetails = []; 
		OffersService.find().then(
				function(res){
				//	console.log(res.data);
					$scope.offerdetails = res.data;
				},
				function(error){
					console.log(error);
				});
}
});