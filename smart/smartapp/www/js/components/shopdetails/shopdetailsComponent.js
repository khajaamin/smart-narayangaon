app.component("shopDetails", {
    bindings: {
        change: "&"
    },
    templateUrl: "js/components/shopdetails/shopdetails.html",
    controller: function($scope, $state, ShopDetailsService, IMG_BASE, $ionicModal) {

        var self = this;
        $scope.title = $state.name;
        $scope.IMG_BASE = IMG_BASE;
        $scope.shopdetails = [];
        var rate = 2;
        $scope.isEmpty = function(obj) {
            for (var i in obj)
                if (obj.hasOwnProperty(i)) return false;
            return true;
        };

        ShopDetailsService.find({ id: $state.params.id }).then(
            function(res) {
                console.log(res.data);

                $scope.shopdetails = res.data;
                //$state.reload();
                self.change({ details: $scope.shopdetails });
                rate = Math.ceil($scope.shopdetails.ratings);
                console.log(rate);
                $scope.ratingsObject = {
                    iconOn: 'ion-ios-star',
                    iconOff: 'ion-ios-star-outline',
                    iconOnColor: 'rgb(200, 200, 100)',
                    iconOffColor: 'rgb(200, 100, 100)',
                    rating: rate,
                    minRating: 1,
                    readOnly: true,
                };
            },
            function(error) {

                console.log(error);

            });




    }
});