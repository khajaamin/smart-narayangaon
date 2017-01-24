app.controller('ReviewController',function($scope,$http,$ionicModal,API_BASE,$state,$ionicPopup,sessionService) {
	$scope.rate=0;
    $scope.id=$state.params.id;
    $scope.ratingsObject = {
        iconOn : 'ion-ios-star',
        iconOff : 'ion-ios-star-outline',
        iconOnColor: 'rgb(200, 200, 100)',
        iconOffColor:  'rgb(200, 100, 100)',
        rating:  0,
        minRating:1,
        callback: function(rating) {
          $scope.ratingsCallback(rating);
        }
      };

      $scope.ratingsCallback = function(rating) {
        $scope.rate = rating;
      };

	  $scope.submitForm = function() {
             var user = {};
             user = sessionService.get("LoggedInUser");
              $scope.data={
               'rate': $scope.rate,
               'id':$state.params.id,
                'user_id': user.data.id,             
              };
            if ($scope.review.$valid) {             
            	$scope.message = $scope.data;
            	$http({
            		method: 'POST',
                 //http://www.smartnarayangaon.com/index.php?
                //http://localhost/anwar/smart-narayangaon/smart/smartnar/public_html/index.php?r=
            		url : API_BASE + 'usersapi/rating',
            		data:$scope.data, 
            		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
             	}).success(function(data) {		              		
                 var alertPopup = $ionicPopup.alert({
                     title: 'Thank You!',
                     template: data.message
                   });
                   alertPopup.then(function(res) {
                      $scope.closeModal();
                      $state.reload();
                   });    
          	});
            }

        };

});