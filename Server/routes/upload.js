
var fs = require('fs');
var cloudinary = require('cloudinary').v2;

// set your env variable CLOUDINARY_URL or set the following configuration
cloudinary.config({
    cloud_name: 'techbirdies',
    api_key: '127832987232117',
    api_secret: 'HRzPyFIStV677Psg4A2qdLOcoOs'
});

console.log("** ** ** ** ** ** ** ** ** Uploads ** ** ** ** ** ** ** ** ** **");

module.exports = cloudinary;