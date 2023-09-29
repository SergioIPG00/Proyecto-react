import axios from 'axios';

export function getGames(){
    var token  = localStorage.getItem('token');
    return axios({
        method: 'get',
        url: 'https://three-points.herokuapp.com/api/posts',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.data)
    .catch((error) => {
        localStorage.clear();
        window.location.reload();
        throw error; 
    });
}