app.service("hexify",function($http){

	this.userLogin=function(user){
		
		$http({
			url:"http://localhost/advanced/frontend/web/index.php?r=api/user/login",
			method:"post",
			data:user
			}).then(function(res){
				console.log(res.data); 
                   data = res.data;
                  
            }); 
	};

	this.userSignup=function(){
		
		$http({
			url:"http://localhost/advanced/frontend/web/index.php?r=api/app/appdetails",
			method:"post",
			}).then(function(res){ 
                   data = res.data;
                   console.log(res.data); 
           }); 
		return $http;
	};




 });

