app.component("offers",
{
	templateUrl:"js/components/offerdetails/offerdetails.html",
	controller:function($scope,$state,OffersService,IMG_BASE,$ionicModal ) {
		$scope.title = $state.name; 
		$scope.IMG_BASE = IMG_BASE; 
		$scope.offerdetails = []; 


		 $scope.isEmpty = function (obj) {
			for (var i in obj) if (obj.hasOwnProperty(i)) return false;
			return true;
		};


		OffersService.find().then(
				function(res){
					if(res.data.length==0){

               			$scope.offerdetails = null;
               			console.log($scope.offerdetails);
               	
               		}else{
               			$scope.offerdetails = res.data;	
               		}


				},
				function(error){
					console.log(error);
				});
}
});