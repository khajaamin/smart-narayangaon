app.component("busDetail",
{
	templateUrl:"/js/components/busdetails/busdetail.html",
	controller:function($scope,$state,BusesService,IMG_BASE) {
		//$scope.dt = new Date();
		$scope.IMG_BASE = IMG_BASE; 
		$scope.busdetail = []; 
		BusesService.find({name:$state.params.name}).then(
				function(res){
					$scope.busdetail = res.data;
				},
				function(error){
					console.log(error);
				});
}
});