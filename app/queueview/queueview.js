'use strict';

angular.module('myApp.queueview', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/queueview', {
            templateUrl: 'queueview/queueview.html',
            controller: 'QueueCtrl'
        });
    }])
    .controller('QueueCtrl', function ($scope, $http) {
        $http.get("http://localhost:8080/queue/queueList")
            .then(function (result) {
                if (result.data.success) {
                    $scope.data = result.data.data;
                    $scope.pagination = result.data.pagination;
                } else {
                    $scope.message = result.message;
                }
            });
        $scope.moveup = function (id) {
            $http.post("http://localhost:8080/queue/moveUpQueue", id)
                .then(function (result) {
                    if (result.data.success) {
                        $scope.tools.alert(result.data.message);
                    } else {
                        $scope.tools.alert("更新成功!");
                    }
                });
        };
        $scope.movedown = function (id) {
            $http.post("http://localhost:8080/queue/moveDownQueue", id)
                .then(function (result) {
                    if (result.data.success) {
                        $scope.tools.alert(result.data.message);
                    } else {
                        $scope.tools.alert("更新成功!");
                    }
                });
        };
    });
