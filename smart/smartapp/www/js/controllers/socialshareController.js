.controller('Social', ['$scope', function($scope){
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
}])