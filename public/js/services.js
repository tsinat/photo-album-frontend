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
});
app.service('Image', function($http) {

    this.getAll = () => {
        return $http.get('/api/images/')
    };
    this.getOne = id => {
        return $http.get(`/api/images/${id}`)
    };
    this.create = image => {
        return $http.post('/api/images/', image)
    };
    this.update = (id, image) => {
        return $http.put(`/api/images/${id}`, image)
    };
    this.delete = id => {
        return $http.delete(`/api/images/${id}`)
    };
});
