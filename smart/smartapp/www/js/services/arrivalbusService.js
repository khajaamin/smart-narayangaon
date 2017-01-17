app.service("ArrivalbusService",function($http,API_BASE){
		return {
			find:function(params){
				return $http({
					method:"get",
					url:API_BASE.toString()+"busesapi/arrivalbus",
					params:params

				});
			}


		}; 

});