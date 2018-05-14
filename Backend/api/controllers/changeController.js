var mongoose = require('mongoose'),
Change = mongoose.model('Change');

exports.list_all_changes = function(req, res) {
    Change.find({}, function(err, change) {
        if(err) {
            res.send(err);
        }
        res.json(change);
    });
}

exports.create_a_change = function(req, res) {
    var new_change = new Change(req.body);
    new_change.save(function(err, change) {
        if(err) {
            res.send(err);
        }
        res.json(change);
    })
}

exports.read_a_change = function(req, res) {
    Change.findById(req.params.changeId, function(err, change) {
        if(err) {
            res.send(err);
        }
        res.json(change);
    });
}

exports.update_a_change = function(req, res) {
    Change.findOneAndUpdate({_id: req.params.changeId}, req.body, {new: true}, function(err, change) {
        if(err) {
            res.send(err);
        }
        res.json(change);
    });
}

exports.delete_a_change = function(req, res) {
    Change.remove({
        _id: req.params.changeId
    }, function(err, change) {
        if(err) {
            res.send(err)
        }
        res.json({
            message:'Delete successful'
        });
    });
}