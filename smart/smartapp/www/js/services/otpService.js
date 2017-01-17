app.service("OtpService",function($http,API_BASE){
	var user={};
		return {
			otp:function(params){
				return $http({
					method:"post",
					url:API_BASE.toString()+"usersapi/verify",
					data:params, 
            		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				});
			}


		}; 

});