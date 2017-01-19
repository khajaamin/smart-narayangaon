app.controller('AppCtrl', function($scope,AppService, $ionicModal,$ionicPopup, $timeout ,$http,hexify,IMG_BASE,$ionicLoading) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
    
//$scope.dt = new Date();
// console.log(dt);
$scope.show = function() {
    $ionicLoading.show({
      template: '<p>Loading...</p> <ion-spinner icon="ripple" class="spinner-assertive"></ion-spinner>'
    });
  };

  $scope.hide = function(){
        $ionicLoading.hide();
  };
    $scope.IMG_BASE = IMG_BASE; 
    $scope.apps = []; 
    AppService.find({city:'Narayangaon',status:1}).then(
        function(res){
          $scope.apps = res.data;
          console.log( $scope.apps);
        },
        function(error){
          console.log(error);
        });
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
   // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
   
  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
   $scope.share = function(t, msg, img, link){  
        if(t == 'w')
            window.plugins.socialsharing
            .shareViaWhatsApp(msg, '', link);
        else if(t == 'f')
            window.plugins.socialsharing
            .shareViaFacebook(msg, img, link);    
        else if(t == 't')
            window.plugins.socialsharing
            .shareViaTwitter(msg, img, link);    
        else if(t == 'sms')
            window.plugins.socialsharing
            .shareViaSMS(msg+' '+img+' '+link);    
        else
        {
            var sub = 'Beautiful images inside ..';
            window.plugins.socialsharing
            .shareViaEmail(msg, sub, '');        
        }    
    }

  $scope.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: $scope.items,
        update: function (filteredItems, filterText) {
          $scope.items = filteredItems;
          if (filterText) {
            console.log(filterText);
          }
        }
      });
    };


    
  
})