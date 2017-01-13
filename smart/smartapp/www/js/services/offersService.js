app.service("OffersService",function($http,API_BASE){
		return {
			find:function(params){
				return $http({
					method:"get",
					url:API_BASE.toString()+"vendorsapi/offers-details",
					params:params

				});
			}


		}; 

});