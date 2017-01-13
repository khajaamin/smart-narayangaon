angular.module('starter.controllers', ['ionic','jett.ionic.filter.bar','ngCordova'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout ,$http,hexify) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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
})
.controller('loginCtrl',function($scope ,$http){
  $scope.user={};
  $scope.msg={};


  $scope.login = function (frm) {
           // use $.param jQuery function to serialize data from JSON 
           
        
            // var config = {
            //     headers : {
            //         'Content-Type': 'application/json'
            //     }
            // }
          
            // console.log($scope.user);
            // $http.post('http://localhost/myofficediary/web/index.php?r=api/user/login', $scope.user, config)
            // .success(function (data, status, headers, config) {
            //     $scope.PostDataResponse = data;
            // })
            // var config = {
            //     headers : {
            //         'Content-Type': 'application/json',
            //         'Access-Control-Allow-Origin':'*'

            //     }
            // }
            hexify.userLogin=function(){

            }
            var user={
            'username ':  $scope.user.username,
            'password'  :$scope.user.password,
            };
            console.log(user);
           
            $http({
              url: 'http://localhost/advanced/frontend/web/index.php?r=api/user/login',
              method: "POST",
              data:user,
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
              }).success(function (data, status, headers, config) {
                  console.log(data);

              }).error(function (data, status, headers, config) {

              });

                     
        };




   $scope.login1 = function(frm)
    {
       if(frm.$valid){

         $http.post('http://localhost/advanced/frontend/web/index.php?r=api/user/login',{user:"sldkfsdf"}).then(function(res){
            console.log(res);
         });

      }
  }

 $scope.display=function(){
  $http({
      url:"http://localhost/advanced/frontend/web/index.php?r=api/vendor/indexnew",
      method:"GET",
      }).then(function(res){
        $scope.shop=res;
        console.log($scope.shop);                
      }); 
    
    };


})
.controller('shopdetailCtrl',function($scope,$http){
 
  ($scope.display=function(){
  $http({
      url:"http://localhost/advanced/frontend/web/index.php?r=api/vendor/indexnew",
      method:"GET",
      }).then(function(res){
        $scope.shop=res.data.Vendors;
        console.log(res.data.Vendors);                  
    }); 
    }());
})
.controller('shareCtrl',['$scope',function($scope,$cordovaSocialSharing) {
  $scope.share=function(t,msg,img,link){
    if(t=='w'){
      window.plugins.socialsbhearing.shearViaWhatsApp(msg,'',link);
    }
  };

}])

.controller('sliderCtrl',['$scope',function($scope,$cordovaSocialSharing) {
  $scope.images = [
    { img: 'img/nature.jpg'},
     { img: 'img/ionic.png'},
     { img: 'img/ionic.png'},

  ];

}])

.controller('ioconCtrl', function($scope, $stateParams,$location){

})
.controller('signupCtrl', function($scope,$http){
  $scope.user={};
  $scope.msg={};
  $scope.App= hexify.getApp();
  //console.log($scope.App.data);
  // $scope.signup = function(frm)
  //    {
  //       $http({
  //                   url:"http://localhost/advanced/frontend/web/index.php?r=api/user/login",
  //                   method:"post",
  //                   data:$scope.user
  //               }).then(function(res){

  //                  $scope.msg= "successfully Login; ";
  //                   $scope.user = {}; 
  //                       console.log(res);
  //                   frm.$prestine = true;   
  //               });

  //       };

      
})
 .controller('ItemController', ['$ionicFilterBar', ItemController])

function ItemController($ionicFilterBar) {  
    var vm = this,
        items = [],
        filterBarInstance;

    for (var i = 1; i <= 1000; i++) {
        var itemDate = moment().add(i, 'days');

        var item = {
            description: 'Description for item ' + i,
            date: itemDate.toDate()
        };
        items.push(item);
    }

    vm.items = items;

    vm.showFilterBar = function () {
      filterBarInstance = $ionicFilterBar.show({
        items: vm.items,
        update: function (filteredItems) {
          vm.items = filteredItems;
        },
        filterProperties: 'description'
      });
    };

    return vm;
}

