
app.controller('loginCtrl',function($scope ,$http){
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


});