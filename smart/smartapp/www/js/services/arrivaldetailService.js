app.service("ArrivaldetailService",function($http,API_BASE){
		return {
			find:function(params){
				return $http({
					method:"get",
					url:API_BASE.toString()+"busesapi/list",
					params:params

				});
			}


		}; 

});