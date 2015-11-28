var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var Events = new Schema({
    title       : String,
    members     : [{ type: Schema.Types.ObjectId, ref: 'Users' }],
    author      : { type: Schema.Types.ObjectId, ref: 'Users' },
    referee     : { type: Schema.Types.ObjectId, ref: 'Users' }
});

mongoose.model("Events", Events);