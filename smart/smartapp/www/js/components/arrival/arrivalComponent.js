app.component("arrival", {
    templateUrl: "js/components/arrival/arrival.html",
    controller: function($scope, $state, ArrivaldetailService, IMG_BASE) {
        //$scope.dt = new Date();
        $scope.IMG_BASE = IMG_BASE;
        $scope.arrival = [];
        ArrivaldetailService.find({ name: $state.params.name }).then(
            function(res) {

                $scope.arrival = res.data;

            },
            function(error) {

                console.log(error);

            });
    }
});