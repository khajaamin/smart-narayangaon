app.component("buses",
{
	templateUrl:"/js/components/buses/buses.html",
	controller:function($scope,BusesService,IMG_BASE) {

		$scope.IMG_BASE = IMG_BASE; 
		$scope.buses = []; 
		BusesService.find().then(
				function(res){
					$scope.buses = res.data;
				},
				function(error){
					console.log(error);
				});
}
});