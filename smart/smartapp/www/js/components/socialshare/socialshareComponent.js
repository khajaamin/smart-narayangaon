app.component("socialShare", {
    templateUrl: "js/components/socialshare/socialshare.html",
    controller: function($scope, $state, $cordovaSocialSharing) {

        $scope.share = function(item) {
            $cordovaSocialSharing.share("SmartNarayangoan App I am using Smart Narayangaon app and its awesome for us", "http://www.smartnarayangaon.com").then(function(result) {
                console.log(JSON.parse(result));
            }, function(err) {
                console.log(err);
            });

        };
        $scope.whatsappShare = function(item) {
            $cordovaSocialSharing.shareViaWhatsApp("SmartNarayangoan App I am using Smart Narayangaon app and its awesome for us", "http://www.smartnarayangaon.com").then(function(result) {
                console.log(JSON.parse(result));
            }, function(err) {
                console.log(err);

            });

        }


    }
});