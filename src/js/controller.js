"use strict";
//application written by Victor Lia Fook victorliafook@gmail.com
angular.module("client-lookup")
    .controller("mainController", ['$scope', 'clientfactory', 'dataService', function($scope, clientfactory, dataService) {
        $scope.resultList = [];
        $scope.feature = {};
        
		$scope.firstname = "";
		$scope.lastname = "";
		$scope.phone = "";
        $scope.totalResults = 0;
        $scope.pagination = 1;
        $scope.page = 1;
        $scope.sort = 'firstname';
        $scope.alert = "";
        $scope.closeToExpire = false;
        
        $scope.setPage = function(page){
            $scope.page = page;
        };
        
        $scope.cleanSearch = function(){
            $scope.firstname = "";
    		$scope.lastname = "";
    		$scope.phone = "";
            
        };
        
        $scope.doSearch = function(){
            $('#page-loading').fadeIn('fast');
            $scope.findByProp();
            
        };
        
        $scope.getFeature = function(id){
            $('#page-loading').fadeIn('fast');
            $scope.findById(id);
        };
        
        
        
        $scope.findByProp = function(){
            var params = [
                {key: 'firstname', value: $scope.firstname},
                {key: 'lastname', value: $scope.lastname},
                {key: 'phone', value: $scope.phone},
                {key: 'expiring', value: $scope.closeToExpire}
            ];
            clientfactory.query(dataService.getQueryObj(params)).$promise.then(function(results){
                $scope.alert = "";
                if(results.length > 0){
                    $scope.resultList = results;
                    $scope.totalResults = results.length;
                    $scope.pagination = Math.ceil(results.length / 10);
                    
                }else{
                    $scope.resultList = [];
                    $scope.totalResults = 0;
                    $scope.pagination = 1;
                    $scope.alert = "No results found with this criteria.";
                }
                if($scope.alert == ""){
                    $('#searchModal').modal('hide');
                }
                $('#page-loading').fadeOut('fast');
            });
        };
        
        $scope.getMemberClass = function(membership){
            if(membership == 1) return "Silver";
            if(membership == 2) return "Gold";
            if(membership == 3) return "Platinum";
            
            return "";
        };
        
        $scope.getDateClass = function(timestamp){
            if(!timestamp) return "";
            var diff = $scope.daysBetween(timestamp)
            if(diff > 30){
                return "success";
                
            }else if(diff > 0){
                return "warning";
            }
            return "danger"
        }
        
        $scope.daysBetween = function(date1, date2 = null) {
            var dt1 = new Date(date1);
            var dt2 = (date2 == null) ? new Date() : new Date(date2);
            return -Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
        }
    }]);