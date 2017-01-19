app.service("SpecialOfferService",function($http,API_BASE){
		return {
			find:function(params){
				return $http({
					method:"get",
					url:API_BASE.toString()+"advertiseapi/list",
					params:params

				});
			}


		}; 

});