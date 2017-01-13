
app.controller('AddCntrl',function($scope,$http,$state,sessionService) {


    var currentUser = sessionService.get("LoggedInUser"); 
       //console.log(currentUser);
        if(currentUser == 'undefined' || currentUser == null )
        {
            console.log("currentUser",currentUser);

            $state.go('app.login');
        }



	$scope.data={};
	  $scope.reset = function() {
        $scope.data ={};
    };
    
  

	  $scope.submitForm = function() {
    

            if ($scope.adwithus.$valid) {             
            	//$scope.message = $scope.data;
            	$http({
            		method: 'POST',
            		url : 'http://localhost/anwar/smart/smartnar/public_html/index.php?r=vendorsapi/create-new',
            		data:$scope.data, 
            		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            	}).success(function(data) {		              		
		            
		             //$scope.message = data[0].message;	
		            alert(data.message);

		            //alert(data.message);	            	
          			$scope.reset();
          		});
            }

        };

});