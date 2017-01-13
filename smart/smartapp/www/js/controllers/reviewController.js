app.controller('ReviewController',function($scope,$http,$ionicModal) {
	$scope.rate=0;
    $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  2,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      };

      $scope.ratingsCallback = function(rating) {

        //console.log('Selected rating is : ', rating);
        $scope.rate = rating;
      
      };

    $scope.data=0;
	  $scope.reset = function() {
        $scope.data = 0;
    };

    
	  $scope.submitForm = function() {
              $scope.data=$scope.rate;
            //  console.log($scope.data);
            if ($scope.review.$valid) {             
            	$scope.message = $scope.data;
            	$http({
            		method: 'POST',
            		url : 'http://localhost/anwar/smart/smartnar/public_html/index.php?r=usersapi/rating',
            		data:$scope.data, 
            		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            	}).success(function(data) {		              		
		            	
		            alert(data.message);
                $scope.closeModal();
		            
          		});
            }

        };

});