module.exports = function(app) {
    var pipeList = require('../controllers/pipeController');

    app.route('/pipes')
        .get(pipeList.list_all_pipes)
        .post(pipeList.create_a_pipe);

    app.route('/pipes/:pipeId')
        .get(pipeList.read_a_pipe)
        .put(pipeList.update_a_pipe)
        .delete(pipeList.delete_a_pipe)
}