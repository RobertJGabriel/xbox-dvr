var app = angular.module("xboxviewer", []);
app.controller("core", function ($scope) {


    var sync, elem, code, style;

    $scope.init = function () {
        console.log('start');

    };






    /**
     * Adds Saves the Optoins 
     */
    $scope.search = function () { // Saves options to chrome.storage
        var gamertag = document.getElementById('gamertag').value;
        var type = document.getElementById('type').value;
        xboxOneMedia.Init(1, type, gamertag, 500, 500);
    };





});
