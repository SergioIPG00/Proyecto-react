import axios from 'axios';

export function getProfile(){
    var token  = localStorage.getItem('token');
    return axios({
        method: 'get',
        url: 'https://three-points.herokuapp.com/api/users/613693fc24d622245e1044a9',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(
        response => response.data
        )
    .catch((error) => {
        localStorage.clear();
        window.location.reload();
        throw error; 
    });
}