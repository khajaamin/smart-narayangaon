app.component("vendors",
{
	templateUrl:"/js/components/vendors/vendors.html",
	controller:function($scope,$state,VendorsService,IMG_BASE,$cordovaSocialSharing) {
		$scope.title = $state.name; 
		$scope.IMG_BASE = IMG_BASE; 
		$scope.vendors = []; 
	
	$scope.share = function(item)
{

	$cordovaSocialSharing.share("SmartNarayangoan App", "I am using Smart Narayangaon app and its awesome for us", 'https://www.google.nl/images/srpr/logo4w.png', "http://smartnarayangaon.com").then(function(result) {
			console.log(JSON.parse(result));      
	    }, function(err) {
	    	console.log(err);
	    });

	};		

		VendorsService.find({category_id:$state.params.parent_id,subcategory_id:$state.params.id}).then(
				function(res){
console.log("HIii");
					console.log(res.data);
					$scope.vendors = res.data;
				},
				function(error){
					console.log(error);
				});
}
});
