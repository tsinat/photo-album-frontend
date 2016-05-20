var express = require('express');
var router = express.Router();

var Image = require('../models/image');
// var Album = require('../models/image');


router.get('/', (req, res) => {
    Image.find({}, (err, images) => {
        if (err) return res.status(400).send(err);

        else res.send(images);
    });
});

router.get('/:id', (req, res) => {
    Image.getOne(req.params.id, (err, image) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(image);
        }
    });
});

router.post('/', (req, res) => {
    Image.create(req.body, (err, image) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(image);
        }
    });
});

router.put('/:id', (req, res) => {
    Image.update(req.params.id, req.body, (err, updatedImage) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(updatedImage);
        }
    });
});

router.delete('/:id',(req, res) => {
    Image.deleteImage(req.params.id, (err, deletedImage) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(deletedImage);
        }
    });
});

router.put('/:imageId/addAlbum/:AlbumId', (req, res) => {
    Image.addAlbum(req.params.imageId, req.params.AlbumId, req.body, (err, hightestBid)=> {
        if(err) res.status(400).send(err);

        res.send(hightestBid);
    });
});

module.exports = router;
