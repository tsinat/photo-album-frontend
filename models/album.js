'use strict';

var mongoose = require('mongoose');

var albumSchema = new mongoose.Schema({
    name: {type: String, required: true},
    images: [{type: mongoose.Schema.Types.ObjectId, ref: 'Image'}]
});

albumSchema.statics.getOne = (id, cb) => {
    Album.findById(id, (err, album) => {
        if(err) return cb(err);
        cb(null, album);
    }).populate('images');
};

albumSchema.statics.create = (albumObj, cb) => {
    console.log('album create:', albumObj);
    var album = new Album({
        name: albumObj.name
    });
    album.save((err, savedAlbum) => {
        if(err) return cb(err);

        else cb(null, savedAlbum);
    });
};

albumSchema.statics.update = (id, currentAlbum, cb) => {
    var obj = currentAlbum;
    Album.findByIdAndUpdate(id, { $set: obj}, (err, updatedAlbum) => {
        if(err) cb(err);

        updatedAlbum.save((err, savedAlbum) => {
            if(err) cb(err);

            cb(null, savedAlbum);
        });
    });
};

albumSchema.statics.deleteAlbum = (id, cb) => {
    Album.findByIdAndRemove(id, (err, deletedAlbum) => {
        if(err){
            cb(err)
        }
        else {
            cb(deletedAlbum);
        }
    });
};

albumSchema.statics.addImage = (albumId, imageId, cb) => {
    Album.findById(albumId, (err, album) => {
        console.log("album:", album);
        if(err) cb(err);


        album.images.push(imageId);

        album.save((err, savedImage) => {
            if(err) cb(err);

            cb(null , savedImage)
        })
    })
}

var Album = mongoose.model('Album', albumSchema);

module.exports = Album;
