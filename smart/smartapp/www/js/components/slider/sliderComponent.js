app.component("slider",
{
	templateUrl:"/js/components/slider/slider.html",
	controller:function($scope,SliderService,IMG_BASE) {

        $scope.IMG_BASE = IMG_BASE; 

$scope.options = {

 effect: 'slide',
            loop:true,
            autoplay:true,
            speed: 2000,
            paginationHide: true,
            initialSlide: 0,
}

$scope.$on("$ionicSlides.sliderInitialized", function(event, data){
  // data.slider is the instance of Swiper
  $scope.slider = data.slider;
});

$scope.$on("$ionicSlides.slideChangeStart", function(event, data){
  console.log('Slide change is beginning');
});

$scope.$on("$ionicSlides.slideChangeEnd", function(event, data){
  // note: the indexes are 0-based
  $scope.activeIndex = data.slider.activeIndex;
  $scope.previousIndex = data.slider.previousIndex;
});


      

 	 $scope.sliders = [];

     SliderService.find().then(function(res){
        console.log(res);
     $scope.sliders = res.data;

     });

}
});
