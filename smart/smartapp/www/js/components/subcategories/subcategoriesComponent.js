app.component("subCategories",
{
	templateUrl:"/js/components/subcategories/subcategories.html",
	controller:function($scope,$state,CategoriesService,IMG_BASE) {

		$scope.title = $state.name; 

		$scope.IMG_BASE = IMG_BASE; 
		$scope.categories = []; 
		CategoriesService.find({parent_id:$state.params.id}).then(function(res){
					$scope.categories = res.data;
				});
}
});