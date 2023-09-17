import axios from 'axios';

export function validateLogin(username, password) {
    const jsonData = JSON.stringify({
        username: username,
        password: password
    });

    return axios({
        method: 'POST',
        url: 'http://three-points.herokuapp.com/api/login',
        data: jsonData,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then((response) => {
        const token = response.data.token; 
        if (token) {
            localStorage.setItem('token', token);
        }
        return response;
    })
    .catch((error) => {
        console.error("Error:", error);
        throw error; 
    });
}
