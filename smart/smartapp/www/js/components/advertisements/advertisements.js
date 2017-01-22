app.component("advertisements",
{
	templateUrl:"/js/components/advertisements/advertisements.html",
	controller:function($scope,AdvertisementsService,IMG_BASE) {

 	 $scope.advertisements = [];

     AdvertisementsService.find().then(function(res){
        //console.log(res);
     $scope.advertisements = res.data;

     });

}
});