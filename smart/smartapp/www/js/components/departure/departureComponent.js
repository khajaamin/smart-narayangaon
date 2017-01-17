app.component("departure",
{
	templateUrl:"/js/components/departure/departure.html",
	controller:function($scope,$state,BusdetailsService,IMG_BASE) {
		//$scope.dt = new Date();
		$scope.IMG_BASE = IMG_BASE; 
		$scope.departure = []; 
		BusdetailsService.find({name:$state.params.name}).then(
				function(res){
				
					$scope.departure = res.data;
				
				},
				function(error){

					console.log(error);
				
				});
}
});