app.component("categories",
{
	templateUrl:"/js/components/categories/categories.html",
	controller:function($scope,CategoriesService,IMG_BASE) {

		$scope.IMG_BASE = IMG_BASE; 
		$scope.categories = []; 
		CategoriesService.find({parent_id:0}).then(
				function(res){
					$scope.categories = res.data;
				},
				function(error){
					console.log(error);
				});
}
});