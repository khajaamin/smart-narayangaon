app.component("subCategoryImage", {

    templateUrl: "js/components/subcategoryimage/subcategoryimage.html",
    controller: function($scope, $state, SubCategoryImageService, IMG_BASE) {

        var self = this;
        $scope.title = $state.name;
        $scope.IMG_BASE = IMG_BASE;
        $scope.shopimage = [];


        SubCategoryImageService.find({ id: $state.params.id, sub_category_id: $state.params.sub_category_id }).then(
            function(res) {
                console.log(res.data);
                $scope.shopimage = res.data;
                console.log($scope.shopimage);
                //                    self.change({details:$scope.shopdetails}); 

            },
            function(error) {
                console.log(error);
            });


    }
});