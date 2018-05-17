var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// username autora promjene
// naziv promjene
// datum
// lokacija
// nivo vodostaja
// broj kritičnih cijevi

var ChangeSchema = new Schema({
    author: String,
    change_name: String,
    change_date: Date,
    location: String,
    water_level: Number,
    critical_pipe_count: Number
});

module.exports = mongoose.model('Change', ChangeSchema);