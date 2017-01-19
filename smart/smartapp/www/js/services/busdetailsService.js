app.service("BusdetailsService",function($http,API_BASE){
		return {
			find:function(params){
				return $http({
					method:"get",
					url:API_BASE.toString()+"busesapi/detail",
					params:params

				});
			}


		}; 

});