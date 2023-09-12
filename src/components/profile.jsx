import React from 'react';
import './profile.css';

function Profile(props){
    return(
        <div className="perfil-container">
                <img src={props.image} alt="Foto de perfil" className="perfil-imagen"/>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
    );
}

export default Profile;