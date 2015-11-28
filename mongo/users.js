var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var Users = new Schema({
    full_name       : String,
    nickname        : String,
    password        : String
});

mongoose.model("Users", Users);