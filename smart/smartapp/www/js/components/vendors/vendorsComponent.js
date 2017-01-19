app.component("vendors",
{
	templateUrl:"/js/components/vendors/vendors.html",
	controller:function($scope,$state,VendorsService,IMG_BASE,$cordovaSocialSharing) {
		$scope.title = $state.name; 
		$scope.IMG_BASE = IMG_BASE; 
		$scope.vendors = []; 
		$cordovaSocialSharing
    .share(message, subject, file, link) // Share via native share sheet
    .then(function(result) {
      // Success!
    }, function(err) {
      // An error occured. Show a message to the user
    });
		VendorsService.find({category_id:$state.params.parent_id,subcategory_id:$state.params.id}).then(
				function(res){
					console.log(res.data);
					$scope.vendors = res.data;
				},
				function(error){
					console.log(error);
				});
}
});