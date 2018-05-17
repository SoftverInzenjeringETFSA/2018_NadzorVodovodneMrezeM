module.exports = function pipeService() {
    var pipeUrl = "localhost:3000/pipes";
    var pipeWithParamUrl = "localhost:3000/pipes/";

    return function getAllPipes() {

        return fetch(pipeUrl);

    },
    function createPipe(location, waterLevel, criticalPipeCount) {

        return fetch(pipeUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location: location,
                water_level: waterLevel,
                critical_pipe_count: criticalPipeCount
            })
        });

    },
    function getPipeById(id) {

        return fetch(pipeWithParamUrl + id);

    },
    function updatePipe(id, location, waterLevel, criticalPipeCount) {

        return fetch(pipeWithParamUrl + id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                location: location,
                water_level: waterLevel,
                critical_pipe_count: criticalPipeCount
            })
        });

    },
    function deletePipe(id) {

        return fetch(pipeWithParamUrl + id, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })

    }
}();