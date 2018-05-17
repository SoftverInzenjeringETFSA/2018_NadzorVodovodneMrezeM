class UserService {
    userUrl = "localhost:3000/users";
    userWithParamUrl = "localhost:3000/users/";

    async getAllUsers() {

        let response = await fetch(this.userUrl);
        let responseJson = await response.json();
        return responseJson;

    }
    async createUser(username, password) {

        let response = await fetch(this.userUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        let responseJson = await response.json();
        return responseJson;

    }
    async getUserById(id) {

        let response = await fetch(this.userWithParamUrl + id);
        let responseJson = await response.json();
        return responseJson;

    }
    async updateUser(id, username, password) {

        let response = await fetch(this.userWithParamUrl + id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        let responseJson = await response.json();
        return responseJson;

    }
    async deleteUser(id) {

        let response = await fetch(this.userWithParamUrl + id, {
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
module.exports = UserService;