class PipeService {
    pipeUrl = "localhost:3000/pipes";
    pipeWithParamUrl = "localhost:3000/pipes/";
 
    async getAllPipes() {

        let response = await fetch(this.pipeUrl);
        let responseJson = await response.json();
        return responseJson;

    }
    async createPipe(location, waterLevel, criticalPipeCount) {

        let response = await fetch(this.pipeUrl, {
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
        let responseJson = await response.json();
        return responseJson;

    }
    async getPipeById(id) {

        let response = fetch(this.pipeWithParamUrl + id);
        let responseJson = await response.json();
        return responseJson;

    }
    async updatePipe(id, location, waterLevel, criticalPipeCount) {

        let response = await fetch(this.pipeWithParamUrl + id, {
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
        let responseJson = await response.json();
        return responseJson;

    }
    async deletePipe(id) {

        let response = await fetch(this.pipeWithParamUrl + id, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let responseJson = await response.json();
        return responseJson;

    }
};
module.exports = PipeService;