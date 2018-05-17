module.exports = function(app) {
    var changeList = require('../controllers/changeController');

    app.route('/changes')
        .get(changeList.list_all_changes)
        .post(changeList.create_a_change);

    app.route('/changes/:changeId')
        .get(changeList.read_a_change)
        .put(changeList.update_a_change)
        .delete(changeList.delete_a_change);

}