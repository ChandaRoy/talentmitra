let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    router = express.Router();
let Post = require('../models/post');
let Topic = require('../models/topics');
let Category = require('../models/categories');

var path = require('path');


module.exports = router;