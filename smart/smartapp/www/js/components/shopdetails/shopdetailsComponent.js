app.component("shopDetails",
{
	bindings:{
		change:"&"
	},
	templateUrl:"/js/components/shopdetails/shopdetails.html",
	controller:function($scope,$state,ShopDetailsService,IMG_BASE,$ionicModal ) {
	
		var self = this; 
		$scope.title = $state.name; 
		$scope.IMG_BASE = IMG_BASE; 
		$scope.shopdetails = [];

		 $scope.isEmpty = function (obj) {
			for (var i in obj) if (obj.hasOwnProperty(i)) return false;
			return true;
		};



		 		
		ShopDetailsService.find({id:$state.params.id}).then(
				function(res){
					console.log(res.data);
					$scope.shopdetails = res.data;
					self.change({details:$scope.shopdetails}); 

				},
				function(error){
					console.log(error);
				});

	
}
});