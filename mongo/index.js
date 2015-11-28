var fs = require('fs')
    , _ = require('lodash')
    , files = fs.readdirSync('./mongo')
    , mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project77');

mongoose.connection.on('open', requireFiles);

function requireFiles () {
    _.each(files, requireFile);
};
//
function requireFile (file) {
    console.log('file', file);
    if(file !== 'index.js') require('./'+file);
};
