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
    $scope.createAl = false;
    $scope.showForm = () => {
        $scope.createAl = true;
    };

    $scope.hideForm = () => {
        $scope.createAl = false;
    };

    $scope.addAlbum = album => {
        Album.create(album)
            .then(res => {
                getAlbums();
            })
            .catch(err => {
                console.log(err);
            })
    }

});
app.controller('albumDetailCtrl', function($scope, name, Album, Img) {
    console.log('albumDetailCtrl');
    $scope.album = name.data;
    $scope.images = name.data.images;
    console.log('name.data:', name.data);

    $scope.showadd = false;
    $scope.showAdd = () => {
        $scope.showadd = true;
    };

    $scope.hideAdd = () => {
        $scope.showadd = false;
    };

    $scope.addImage = (image) => {
        var albumId = $scope.album._id
        console.log(image);
        Img.create(image)
            .then(res => {
                console.log('ImageId', res._id);
                console.log('albumId', albumId);
                var imageId = res._id;
                Album.addImageToAlbum(albumId, imageId)
            })
            .catch(err => {
                console.log(err);
            })
    }


});

app.controller('imageCtrl', function($scope, Img, $state) {
    console.log('imageCtrl');
    getImages();

    function getImages() {
        Img.getAll()
            .then(res => {
                $scope.images = res.data;
            })
            .catch(err => {
                console.log('err:', err);
            })

    }
    var showadd = false
    $scope.showForm = () => {
        $scope.showadd = true;
    }
    $scope.hideForm = () => {
        $scope.showadd = false;
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
