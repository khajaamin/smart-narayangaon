app.component("arrivalbus",
{
	templateUrl:"js/components/arrivalbus/arrivalbus.html",
	controller:function($scope,$state,ArrivalbusService,IMG_BASE) {
		//$scope.dt = new Date();
		$scope.IMG_BASE = IMG_BASE; 
		$scope.arrivalbus = []; 
		ArrivalbusService.find({name:$state.params.name}).then(
				function(res){
				
					$scope.arrivalbus = res.data;
				
				},
				function(error){

					console.log(error);
				
				});
}
});