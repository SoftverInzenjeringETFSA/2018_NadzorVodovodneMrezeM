var mongoose = require('mongoose'),
Pipe = mongoose.model('Pipe');

exports.list_all_pipes = function(req, res) {
    Pipe.find({}, function(err, pipe) {
        if(err) {
            res.send(err);
        }
        res.json(pipe);
    });
}

exports.create_a_pipe = function(req, res) {
    var new_pipe = new Pipe(req.body);
    new_pipe.save(function(err, pipe) {
        if(err) {
            res.send(err);
        }
        res.json(pipe);
    });
}

exports.read_a_pipe = function(req, res) {
    Pipe.findById(req.params.pipeId, function(err, pipe) {
        if(err) {
            res.send(err);
        }
        res.json(pipe);
    });
}

exports.update_a_pipe = function(req, res) {
    Pipe.findOneAndUpdate({
        _id: req.params.pipeId
    }, req.body, {new: true}, function(err, pipe) {
        if(err) {
            res.send(err);
        }
        res.json(pipe);
    });
}

exports.delete_a_pipe = function(req, res) {
    Pipe.remove({
        _id: req.params.pipeId
    }, function(err, pipe) {
        if(err) {
            res.send(err);
        }
        res.json({
            message: 'Delete successful'
        })
    });
}