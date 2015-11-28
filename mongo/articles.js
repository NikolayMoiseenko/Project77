var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var Articles = new Schema({
    title       : String,
    text        : String,
    date        : Date
});

mongoose.model("Articles", Articles);