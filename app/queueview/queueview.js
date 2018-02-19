'use strict';

angular.module('myApp.queueview', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/queueview', {
            templateUrl: 'queueview/queueview.html',
            controller: 'QueueCtrl'
        });
    }])
    .controller('QueueCtrl', function ($scope, $http) {
        $http.get("http://localhost:8080/queue/getQueueList")
            .then(function (result) {
                if (result.data.success){
                    $scope.data = result.data.data;
                    $scope.pagination = result.data.pagination;
                }else{
                    $scope.message = result.message;
                }
            });
    })  ;
