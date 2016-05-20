var express = require('express');
var router = express.Router();

var Album = require('../models/album');
// var Image = require('../models/image');


router.get('/', (req, res) => {
    Album.find({}, (err, albums) => {
        if (err) return res.status(400).send(err);

        else res.send(albums);
    });
});

router.get('/:id', (req, res) => {
    Album.getOne(req.params.id, (err, album) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(album);
        }
    });
});

router.post('/', (req, res) => {
    Album.create(req.body, (err, album) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(album);
        }
    });
});

router.put('/:id',  (req, res) => {
    Album.update(req.params.id, req.body, (err, updatedAlbum) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(updatedAlbum);
        }
    });
});

router.delete('/:id',  (req, res) => {
    Album.deleteAlbum(req.params.id, (err, deletedAlbum) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(deletedAlbum);
        }
    });
});

router.put('/:albumId/addImage/:imageId', (req, res) => {
    console.log(albumId, imageId)
    Album.addImage(req.params.AlbumId, req.params.ImageId, (err, addedImage)=> {
        if(err) res.status(400).send(err);

        res.send(addedImage);
    });
});

module.exports = router;
