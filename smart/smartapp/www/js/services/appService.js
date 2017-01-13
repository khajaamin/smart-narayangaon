app.service("AppService",function($http,API_BASE){
		return {
			find:function(params){
				return $http({
					method:"get",
					url:API_BASE.toString()+"appapi/list",
					
					//
					params:params

				});
			}


		}; 

});