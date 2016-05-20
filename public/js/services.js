'use strict';

var app = angular.module('photoApp');

app.service('Album', function($http) {

    this.getAll = () => {
        return $http.get('/api/albums/')
    };
    this.getOne = id => {
        return $http.get(`/api/albums/${id}`)
    };
    this.create = album => {
        return $http.post('/api/albums/', album)
    };
    this.update = (id, album) => {
        return $http.put(`/api/albums/${id}`, album)
    };
    this.delete = id => {
        return $http.delete(`/api/albums/${id}`)
    };
    this.addImageToAlbum = (albumId, imageId) => {
        console.log('working')
        return $http.put(`/api/albums/${albumId}/addImage/${imageId}`)
    }
});
app.service('Img', function($http, $q) {

    this.getAll = () => {
        return $http.get('/api/images/')
    };
    this.getOne = id => {
        return $http.get(`/api/images/${id}`)
    };
    this.create = image => {
        return $http.post('/api/images/', image)
            .then(res => {
                return $q.resolve(res.data);
            })
            .catch(res => {
                return $q.reject(res.data);
            });
    };
    this.update = (id, image) => {
        return $http.put(`/api/images/${id}`, image)
    };
    this.delete = id => {
        return $http.delete(`/api/images/${id}`)
    };
});
