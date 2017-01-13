// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app=angular.module('starter', ['ionic', 'ionic-ratings'])

.run(function($ionicPlatform,$rootScope,$state,sessionService) {


$rootScope.$on('$stateChangeStart', 
function(event, toState, toParams, fromState, fromParams){ 
    // do something
    console.log(toState.accessRule);
    if(toState.accessRule == "@")
    {
        var currentUser = sessionService.get("LoggedInUser"); 
        
        //console.log(currentUser);
        if(currentUser == 'undefined' || currentUser == null )
        {
            console.log("currentUser",currentUser);

            $state.go('app.login');
        }

    }

})

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.constant({
  API_BASE:"http://localhost/anwar/smart/smartnar/public_html/index.php?r=",
  IMG_BASE:"http://localhost/anwar/smart/smartnar/public_html/images/",
})
.config(function($stateProvider, $urlRouterProvider) {
 // $httpProvider.defaults.useXDomain = true;
 //  delete $httpProvider.defaults.headers.common['X-Requested-With']

  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.addwithus', {
    url: '/addwithus',
     accessRule:"@",
    views: {
      'menuContent': {
        templateUrl: 'templates/addwithus.html'
      },
      accessRule:"@"
    }
  })
   .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
      },
            accessRule:"@"

    }
  }).state('app.subcategories', {
    url: '/subcategories/:id/:name',
    views: {
      'menuContent': {
        templateUrl: 'templates/subcategories.html',
        controller:function($scope,$state,IMG_BASE) {

                $scope.title = $state.params.name; 

          }
      }
    }
  })
  .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html',
      }
    }
  })
  .state('app.shopdetails', {
    url: '/shopdetails/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/shopdetails.html',
        controller:function($scope,$state,IMG_BASE) {

                $scope.title = $state.params.name; 
                $scope.newDetails = {};
                  $scope.onDetailsChange = function(newDetails)
                  {
                    $scope.newDetails = newDetails;
                    console.log("new Details",newDetails);
                  }

          }
      }
    }
  })
  .state('app.share', {
    url: "/share",
    views: {
      'menuContent': {
        templateUrl: "templates/share.html",
        controller: 'shareCtrl'
      }
    }
  })
  .state('app.slider', {
    url: '/slider',
    views: {
      'menuContent': {
        templateUrl: 'templates/slider.html',
        controller:'sliderCtrl'
      }
    }
  })
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
        controller:'loginCtrl'
      }
    }
  })
  .state('app.specialoffers', {
    url: '/specialoffers',
    views: {
      'menuContent': {
        templateUrl: 'templates/specialoffers.html'
      }
    }
  })
  .state('app.hospital', {
    url: '/hospital',
    views: {
      'menuContent': {
        templateUrl: 'templates/hospital.html'
      }
    }
  })

   .state('app.vendors', {
    url: '/vendors/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/vendors.html'
      }
    }
  })
  .state('app.busdetail', {
    url: '/busdetail',
    views: {
      'menuContent': {
        templateUrl: 'templates/busdetail.html'
      }
    }
  })
  .state('app.bus', {
    url: '/bus',
    views: {
      'menuContent': {
        templateUrl: 'templates/bus.html'
      }
    }
  })
  .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })
  .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html',
          controller:'ItemController'
        }
      }
    })
    .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent': {
          templateUrl: 'templates/contact.html'
         // controller: 'PlaylistsCtrl'
        }
      }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
//http://192.168.0.56/yii-application/backend/web/index.php?r=site%2Flogin


app.factory('sessionService',['$http',function($http){
return {
   set:function(key,value){
      return localStorage.setItem(key,JSON.stringify(value));
   },
   get:function(key){
     return JSON.parse(localStorage.getItem(key));
   },
   destroy:function(key){
     return localStorage.removeItem(key);
   },
 };
}])