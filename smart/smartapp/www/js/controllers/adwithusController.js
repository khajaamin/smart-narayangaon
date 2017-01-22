
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
    
      $scope.errorlist =false; 

	  $scope.submitForm = function(frm) {

        if(frm.$valid)
        {
            	$http({
            		method: 'POST',
            		url : API_BASE + 'vendorsapi/create-new',
            		data:$scope.data, 
            		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            	}).success(function(res) {		              		
		            
                    if(res.status == 'success')
                    {
		             //$scope.message = data[0].message;	
                        alert(res.message);
                     $scope.reset();
                    }
                    else
                    {
                        $scope.errorlist  = res.data; 
                    }
          		});
            } // Validation If condition END
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
