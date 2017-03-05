app.component("slider", {
    templateUrl: "js/components/slider/slider.html",
    controller: function($scope, SliderService, IMG_BASE,$ionicSlideBoxDelegate) {
        $scope.IMG_BASE = IMG_BASE;
        $scope.sliders = [];
        SliderService.find().then(function(res) {
            $scope.sliders = res.data;
             $ionicSlideBoxDelegate.$getByHandle('image-viewer').update();
        });
    }
});