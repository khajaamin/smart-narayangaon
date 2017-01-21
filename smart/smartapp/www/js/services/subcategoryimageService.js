app.service("SubCategoryImageService",function($http,API_BASE){
		return {
			find:function(params){
				return $http({
					method:"get",
					url:API_BASE.toString()+"vendorsapi/shop-image",
					params:params

				});
			}


		}; 

});