import axios from 'axios';

export function validateLogin(username, password) {
    const jsonData = JSON.stringify({
        username: username,
        password: password
    });

    return axios({
        method: 'post',
        url: 'https://three-points.herokuapp.com/api/login',
        data: jsonData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .catch((error) => {
        console.error("Error:", error);
        throw error; 
    });
}
