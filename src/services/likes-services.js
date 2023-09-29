import axios from 'axios';

export function postLikes(id){
    var token  = localStorage.getItem('token');
    return axios({
        method: 'post',
        url: 'https://three-points.herokuapp.com/api/posts/'+id+'/like',
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