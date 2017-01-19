app.service("SliderService",function($http,API_BASE){
		return {
			find:function(params){
				return $http({
					method:"get",
					url:API_BASE.toString()+"categoriesapi/slider",
					params:params

				});
			}


		}; 

});