app.controller('networkController', function($rootScope, $cordovaNetwork) {

  document.addEventListener("deviceready", function () {

    var type = $cordovaNetwork.getNetwork()
    console.log(type);
    var isOnline = $cordovaNetwork.isOnline()
    console.log(isOnline);
    var isOffline = $cordovaNetwork.isOffline()
    console.log(isOffline);

    // listen for Online event
    $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
      var onlineState = networkState;
      console.log(onlineState);
    })

    // listen for Offline event
    $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
      var offlineState = networkState;
      console.log(offlineState);
    })

  }, false);
});