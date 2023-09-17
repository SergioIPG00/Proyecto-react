import axios from 'axios';

export function validateLogin(username, password) {
    const jsonData = JSON.stringify({
        username: username,
        password: password
    });

    return axios.post('/api/login', jsonData)
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
