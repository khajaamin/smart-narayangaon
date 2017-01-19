app.component("vendors",
{
	templateUrl:"/js/components/vendors/vendors.html",
	controller:function($scope,$state,VendorsService,IMG_BASE,$cordovaSocialSharing) {
		$scope.title = $state.name; 
		$scope.IMG_BASE = IMG_BASE; 
		$scope.vendors = []; 
		VendorsService.find({category_id:$state.params.parent_id,subcategory_id:$state.params.id}).then(
				function(res){
					console.log(res.data);
					if(res.data=="fail"){
						$scope.vendors=null;
					}else{
						$scope.vendors = res.data;	
					}
					
				},
				function(error){
					console.log(error);
				});
}
});