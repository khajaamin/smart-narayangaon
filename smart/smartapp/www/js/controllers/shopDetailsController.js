app.controller('shopdetailCtrl',function($scope,$http){
 
 
 
  ($scope.display=function(){
  $http({
      url:"http://www.smartnarayangaon.com/index.php?r=api/vendor/indexnew",
      method:"GET",
      }).then(function(res){
        $scope.shop=res.data.Vendors;
    //    console.log(res.data.Vendors);                  
    }); 
    }());
})
.controller('shareCtrl',['$scope',function($scope,$cordovaSocialSharing) {
  $scope.share=function(t,msg,img,link){
    if(t=='w'){
      window.plugins.socialsbhearing.shearViaWhatsApp(msg,'',link);
    }
  };

}]);
