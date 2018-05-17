module.exports = function userService() {
    var userUrl = "localhost:3000/users";
    var userWithParamUrl = "localhost:3000/users/";

    return function getAllUsers() {

        return fetch(userUrl);

    },
    function createUser(username, password) {

        return fetch(userUrl, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })

    },
    function getUserById(id) {

        return fetch(userWithParamUrl + id);

    },
    function updateUser(id, username, password) {

        return fetch(userWithParamUrl + id, {
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

    }, 
    function deleteUser(id) {

        return fetch(userWithParamUrl + id, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        
    }

}();