// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'ionic-ratings', 'ngCordova', 'ionic-timepicker','ionicLazyLoad'])

.run(function($ionicPlatform, $rootScope, $state, sessionService, $location,$ionicPopup) {

        
        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
                // do something
                if (toState.accessRule == "@") {
                    var currentUser = {};

                     currentUser = sessionService.get("LoggedInUser");
                    //console.log("currentUser", currentUser);
                    if (typeof currentUser == 'undefined' || currentUser == null) {
                        //console.log("currentUser", currentUser);
                        $location.path("app/signup")
                        $state.go('app.signup');
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
           //API_BASE:"http://localhost/anwar/smart-narayangaon/smart/smartnar/public_html/index.php?r=",
           //IMG_BASE:"http://localhost/anwar/smart-narayangaon/smart/smartnar/public_html/images/",

        API_BASE: "http://www.smartnarayangaon.com/index.php?r=",
        IMG_BASE: "http://www.smartnarayangaon.com/images/",
    })
    .config(function($stateProvider, $urlRouterProvider,$httpProvider) {
        // $httpProvider.defaults.useXDomain = true;
        //  delete $httpProvider.defaults.headers.common['X-Requested-With']

$httpProvider.interceptors.push('httpLoaderInterceptor');

        $stateProvider

            .state('app', {
            url: '/app',
            abstract: true,
            
            cache: false,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })

        .state('app.addwithus', {
                url: '/addwithus',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/addwithus.html'
                    },
                    //accessRule:"@"
                }
            })
            .state('app.home', {
                url: '/home',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                    },

                }
            }).state('app.subcategories', {
                url: '/subcategories/:id/:name',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/subcategories.html',
                        controller: function($scope, $state, IMG_BASE) {

                            $scope.title = $state.params.name;

                        }

                    }
                }

            })
            .state('app.signup', {
                url: '/signup',
                accessRule: "*",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/signup.html',
                    }

                }

            })
            .state('app.buses', {
                url: '/buses/:id',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/buses.html',
                    }

                }
            })
            .state('app.busdetail', {
                url: '/busdetail/:name',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/busdetail.html',
                    }

                }
            })
            .state('app.departure', {
                url: '/departure/:name',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/departure.html',
                    }

                }
            })
            .state('app.arrival', {
                url: '/arrival/:name',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/arrival.html',
                    }

                }
            })
            .state('app.arrivalbus', {
                url: '/arrivalbus/:name',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/arrivalbus.html',
                    }

                }
            })
            .state('app.otp', {
                url: '/otp',
                accessRule: "*",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/otp.html',
                    }

                }
            })
            .state('app.shopdetails', {
                url: '/shopdetails/:id/:sub_category_id',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/shopdetails.html',
                        controller: function($scope, $state, IMG_BASE, $ionicModal) {

                            $scope.title = $state.params.name;
                            $scope.newDetails = {};
                            $scope.onDetailsChange = function(newDetails) {
                                $scope.newDetails = newDetails;
                          //      console.log("new Details", newDetails);
                            };



                            $ionicModal.fromTemplateUrl('templates/review.html', {
                                scope: $scope,
                                animation: 'slide-in-up'
                            }).then(function(modal) {
                                $scope.modal = modal;
                            });
                            $scope.selectedShop = null;
                            $scope.openModal = function(newDetails) {
                                $scope.selectedShop = newDetails;
                                $scope.modal.show();
                            }
                            $scope.closeModal = function() {
                                $scope.modal.hide();
                            }

                        }
                    }
                }
            })
            .state('app.share', {
                url: "/share",
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: "templates/share.html",
                        controller: 'shareCtrl'
                    }

                }

            })
            .state('app.slider', {
                url: '/slider',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/slider.html',
                        controller: 'sliderCtrl'
                    }

                }

            })
            .state('app.login', {
                url: '/login',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/login.html',
                        controller: 'loginCtrl'
                    }

                }

            })
            .state('app.specialoffers', {
                url: '/specialoffers',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/specialoffers.html'
                    }

                }

            })
            .state('app.vendors', {
                url: '/vendors/:id',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/vendors.html'
                    }

                }

            })
            .state('app.about', {
                url: '/about',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/about.html'
                    }

                }

            })
            .state('app.contact', {
                url: '/contact',
                accessRule: "@",
                views: {
                    'menuContent': {
                        templateUrl: 'templates/contact.html'
                            // controller: 'PlaylistsCtrl'
                    }

                }

            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/app/home');
    });
//http://192.168.0.56/yii-application/backend/web/index.php?r=site%2Flogin


app.factory('sessionService', ['$http', function($http) {
    return {
        set: function(key, value) {
            return localStorage.setItem(key, JSON.stringify(value));
        },
        get: function(key) {
            return JSON.parse(localStorage.getItem(key));
        },
        destroy: function(key) {
            return localStorage.removeItem(key);
        },
    };
}]);

app.factory('httpLoaderInterceptor', ['$rootScope', function($rootScope) {
  // Active request count
  var requestCount = 0;

  function startRequest(config) {
    // If no request ongoing, then broadcast start event
     button = true;
    if( !requestCount ) {
      $rootScope.$broadcast('httpLoaderStart');

    }

    requestCount++;
    return config;
  }

  function endRequest(arg) {
    // No request ongoing, so make sure we don’t go to negative count
    button = false;
    if( !requestCount )
      return;
    
    requestCount--;
    // If it was last ongoing request, broadcast event
    if( !requestCount ) {
      $rootScope.$broadcast('httpLoaderEnd');
    }

    return arg;
  }

  // Return interceptor configuration object
  return {
    'request': startRequest,
    'requestError': endRequest,
    'response': endRequest,
    'responseError': endRequest
  };
}]);


app.directive('httpLoader', function() {
  return {
    restrict: 'EA',
    link: function(scope, element) {
      // Store original display mode of element
      var shownType = element.css('display');
      function hideElement() {
        element.css('display', 'none');
      }

      scope.$on('httpLoaderStart', function() {
        element.css('display', shownType);
      });

      scope.$on('httpLoaderEnd',hideElement);

      // Initially hidden
      hideElement();
    }
  };
});

app.directive('buttonLoading', function($compile) {
  
   return {
    restrict: 'EA',
    link: function(scope, element,$attrs) {
      // Store original display mode of element
      var shownType = element.css('display');
      function hideElement() {
          element.removeAttr('disabled');
      }

      scope.$on('httpLoaderStart', function() {
         $attrs.$set('disabled', 'disabled');
      });

      scope.$on('httpLoaderEnd',hideElement);
      // Initially hidden
      hideElement();
        var html = '<span side="right" style="float:right;"><ion-spinner  style="float:right;" side="right" icon="android" http-loader></ion-spinner></span>'; 
        var newElement  = angular.element(html);
        var loader  = $compile (newElement)(scope); 

        element.append(loader);

    }
  };

});


// app.directive("serverValidation",function(){

//     return {
//         link:function(scope,element,attrs){
//             console.log(scope.errorlist);
//             if(scope.errorlist)
//             {
//                 console.log(scope.errorlist[attrs.serverValidation]); 
//             }

//         }
//     };
// }); 