'use strict';

var app = angular.module('photoApp')

app.controller('mainCtrl', function(){

});

app.controller('homeCtrl', function() {
    console.log('homeCtrl');
});
app.controller('albumListCtrl', function($scope, Album, $state) {
    console.log('albumListCtrl');
    getAlbums();

    function getAlbums() {
        Album.getAll()
            .then(res => {
                $scope.albums = res.data;
            })
            .catch(err => {
                console.log('err:', err);
            })

    }

});
app.controller('albumDetailCtrl', function($scope, name, Album) {
    console.log('albumDetailCtrl');
    $scope.album = name.data;
    $scope.images = name.data.images;
    console.log('name.data:', name.data);

    $scope.showadd = false;
    $scope.showAdd = () => {
        $scope.showadd = true;
    }
    $scope.hideAdd = () => {
        $scope.showadd = false;
    }
});

app.controller('imageCtrl', function($scope, Image, $state) {
    console.log('imageCtrl');
    getImages();

    function getImages() {
        Image.getAll()
            .then(res => {
                $scope.images = res.data;
            })
            .catch(err => {
                console.log('err:', err);
            })

    }
});
app.controller('imageDetailCtrl', function($scope, name) {
    console.log('imageDetailCtrl');
    $scope.image = name.data;
});
app.controller('registerCtrl', function() {
    console.log('registerCtrl');
});
app.controller('loginCtrl', function() {
    console.log('loginCtrl');
});
