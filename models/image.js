'use strict';

var mongoose = require('mongoose');

var imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    description: {
        type: String,
        required: true
    }
});

imageSchema.statics.getOne = (id, cb) => {
    Image.findById(id, (err, image) => {
        if (err) return cb(err);
        cb(null, image);
    });
};

imageSchema.statics.create = (imageObj, cb) => {
    console.log('image create:', imageObj);
    var image = new Image({
        url: imageObj.url,
        description: imageObj.description
    });
    image.save((err, savedImage) => {
        if (err) return cb(err);

        else cb(null, savedImage);
    });
};

imageSchema.statics.update = (id, currentImage, cb) => {
    var obj = currentImage;
    Image.findByIdAndUpdate(id, {
        $set: obj
    }, (err, updatedImage) => {
        if (err) cb(err);

        updatedImage.save((err, savedImage) => {
            if (err) cb(err);

            cb(null, savedImage);
        });
    });
};

imageSchema.statics.deleteImage = (id, cb) => {
    Image.findByIdAndRemove(id, (err, deletedImage) => {
        if (err) {
            cb(err)
        } else {
            cb(deletedImage);
        }
    });
};

var Image = mongoose.model('Image', imageSchema);

module.exports = Image;
