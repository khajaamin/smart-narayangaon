
app.controller('AddCntrl',function($scope,$http,$state,sessionService,API_BASE,ionicTimePicker,$cordovaGeolocation,$ionicModal,$ionicLoading) {

    $scope.openTimePicker1 = function() {
        var ipObj1 = {
            callback: function(val) {
                if (typeof(val) === 'undefined') {
                    console.log('Time not selected');
                } else {
                    var selectedTime = new Date(val * 1000);
                    $scope.data.from = selectedTime.getUTCHours() + ":" + selectedTime.getUTCMinutes();
                }
            },
            inputTime: 8,
            format: 12,
            setLabel: 'Set'
        };
        if (ionicTimePicker)
            ionicTimePicker.openTimePicker(ipObj1);
    };

    $scope.openTimePicker2 = function() {
        var ipObj1 = {
            callback: function(val) {
                if (typeof(val) === 'undefined') {
                    console.log('Time not selected');
                } else {

                    var selectedTime = new Date(val * 1000);
                    console.log(selectedTime);
                    $scope.data.to = selectedTime.getUTCHours() + ":" + selectedTime.getUTCMinutes();
                }
            },
            inputTime: 8,
            format: 12,
            setLabel: 'Set'
        };
        if (ionicTimePicker)
            ionicTimePicker.openTimePicker(ipObj1);
    };



	$scope.data={};
	  $scope.reset = function() {
        $scope.data ={};
    };
    
  

	  $scope.submitForm = function() {
    

            if ($scope.adwithus.$valid) {             
            	//$scope.message = $scope.data;
                //http://www.smartnarayangaon.com/index.php?
                //http://localhost/anwar/smart-narayangaon/smart/smartnar/public_html/index.php?r=
            	$http({
            		method: 'POST',
            		url : 'http://www.smartnarayangaon.com/index.php?r=vendorsapi/create-new',
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


//Map code


console.log("in add with us");
  var posOptions = {timeout: 10000, enableHighAccuracy: false};
  $cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {

console.log("get lat");
      var lat  = position.coords.latitude;
      var long = position.coords.longitude;
console.log(lat,long);
    }, function(err) {

console.log("location error");
console.log(err);
      // error
    });


});
