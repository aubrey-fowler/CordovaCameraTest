// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs).
            // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
            // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
            // useful especially with forms, though we would prefer giving the user a little more room
            // to interact with the app.
            if (window.cordova && window.Keyboard) {
                window.Keyboard.hideKeyboardAccessoryBar(true);
            }

            if (window.StatusBar) {
                // Set the statusbar to use the default style, tweak this to
                // remove the status bar on iOS or change it to use white instead of dark colors.
                StatusBar.styleDefault();
            }
        });
    })
    .controller('CameraController', CameraController);


function CameraController($scope, $cordovaCamera) {

    console.log('CameraController');

    $scope.photo = {};

    $scope.takePicture = function () {

        var options = {
            targetWidth: 150,
            targetHeight: 150,
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };

        takePhotoOrGallery(options);
    };

    $scope.openPhotoLibrary = function () {

        var options = {
            quality: 50,
            targetWidth: 150,
            targetHeight: 150,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };

        takePhotoOrGallery(options);
    };

    function takePhotoOrGallery(options) {

        $cordovaCamera.getPicture(options).then(function (imageData) {
            console.log(" PICTURE ", imageData);
            $scope.photo.imageDataField = imageData;
            $scope.photo.mediaTypeField = 'image/jpeg';
        }, function (error) {
            console.log(" ERROR ", error);
        });
    }

}