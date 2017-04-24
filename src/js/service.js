"use strict";
angular.module("client-lookup")
    .constant("baseURL","https://php-client-lookup.herokuapp.com/")
    .factory('clientfactory', ['$resource', 'baseURL', function($resource, baseURL) {
        return $resource(baseURL + "/clients/search");
    }])
    .service('dataService', function(){
        this.urlParams = {firstname: 'first_name', lastname: 'last_name', phone: 'phone', expiring: 'expiring',page: 'page'};
        this.getParam = function(param){
            return (this.urlParams[param] !== undefined) ? this.urlParams[param] : null;
        };
        
        this.getQueryObj = function(arr){
            var len = arr.length;
            var retObj = {};
            if(undefined || len <= 0) return retObj;
            
            for(var i = 0; i < len; i++){
                if(arr[i].value == "") continue;
                var paramName = this.getParam(arr[i].key);
                retObj[paramName] = arr[i].value;
            }
           
            return retObj;
        };
        
        
    });