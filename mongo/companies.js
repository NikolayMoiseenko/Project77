var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var Companies = new Schema({
    title       : String,
    members     : [{ type: Schema.Types.ObjectId, ref: 'Users'}],
    author      : { type: Schema.Types.ObjectId, ref: 'Users' },
    referee     : { type: Schema.Types.ObjectId, ref: 'Users' },
    events      : [{ type: Schema.Types.ObjectId, ref: 'Events' }]
});

mongoose.model("Companies", Companies);