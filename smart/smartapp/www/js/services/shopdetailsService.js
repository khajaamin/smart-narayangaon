app.service("ShopDetailsService",function($http,API_BASE){
		return {
			find:function(params){
				return $http({
					method:"get",
					url:API_BASE.toString()+"vendorsapi/shop-details",
					params:params

				});
			}


		}; 

});