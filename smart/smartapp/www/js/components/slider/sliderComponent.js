app.component("slider",
{
	templateUrl:"/js/components/slider/slider.html",
	controller:function($scope,SliderService,IMG_BASE) {

        $scope.IMG_BASE = IMG_BASE; 

        $scope.sliderOptions = {
            effect: 'slide',
            loop:true,
            autoplay:true,
            speed: 5000,
            paginationHide: true,
            initialSlide: 0,
            onInit: function(swiper){
                $scope.swiper = swiper;
            },
            onSlideChangeEnd: function(swiper){
                // ....
            }
        };

 	 $scope.sliders = [];

     SliderService.find().then(function(res){
        console.log(res);
     $scope.sliders = res.data;

     });

}
});