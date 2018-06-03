var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// lokacija
// nivo vodostaja
// broj kritičnih cijevi

var PipeSchema = new Schema({
    location: String,
    water_level: Number,
    critical_pipe_count: Number
});

module.exports = mongoose.model('PipeOld', PipeSchema);