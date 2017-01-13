app.service("CategoriesService",function($http,API_BASE){
		return {
			find:function(params){
				return $http({
					method:"get",
					url:API_BASE.toString()+"categoriesapi/list",
					params:params

				});
			}


		}; 

});