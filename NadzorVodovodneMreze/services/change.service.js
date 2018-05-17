module.exports = function changeService() {
    var changeUrl = "localhost:3000/changes";
    var changeWithParamUrl = "localhost:3000/changes/";

    return function getAllChanges() {

        return fetch(changeUrl);

    },
    function createChange(author, changeName, changeDate, location, waterLevel, criticalPipeCount) {

        return fetch(changeUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: author,
                change_name: changeName,
                change_date: changeDate,
                location: location,
                water_level: waterLevel,
                critical_pipe_count: criticalPipeCount
            })
        })

    },
    function getChangeById(id) {

        return fetch(changeWithParamUrl + id);

    },
    function updateChange(id, author, changeName, changeDate, location, waterLevel, criticalPipeCount) {

        return fetch(changeWithParamUrl + id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                author: author,
                change_name: changeName,
                change_date: changeDate,
                location: location,
                water_level: waterLevel,
                critical_pipe_count: criticalPipeCount
            })
        });

    },
    function deleteChange(id) {

        return fetch(changeWithParamUrl + id, {
           method: 'DELETE',
           headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
            }
        });

    }
}();