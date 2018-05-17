import targetIp from '../shared';

class ChangeService {
    changeUrl = "http://" + targetIp + ":3000/changes/";

    async getAllChanges() {

        let response = await fetch(this.changeUrl);
        let responseJson = await response.json();
        return responseJson;

    }
    async createChange(author, changeName, changeDate, location, waterLevel, criticalPipeCount) {

        let response = await fetch(this.changeUrl, {
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
        });
        let responseJson = await response.json();
        return responseJson;

    }
    async getChangeById(id) {

        let response = await fetch(this.changeUrl + id);
        let responseJson = await response.json();
        return responseJson;

    }
    async updateChange(id, author, changeName, changeDate, location, waterLevel, criticalPipeCount) {

        let response = await fetch(this.changeUrl + id, {
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
        let responseJson = await response.json();
        return responseJson;

    }
    async deleteChange(id) {

        let response = await fetch(this.changeUrl + id, {
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
module.exports = ChangeService;