import React, { useState, useEffect } from 'react';
import './profile.css';
import { getProfile } from '../services/profile-service';

function Profile(){
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        getProfile().then((profile) => setProfile(profile));
    }, []);

    return(
        <div className="perfil-container">
        {profile ? (
            <>
                <img src={profile.avatar} alt="Foto de perfil" className="perfil-imagen"/>
                <h2>{profile.name}</h2>
                <p>{profile.bio}</p>
            </>
        ) : (
            <p>Cargando perfil...</p>
        )}
    </div>
    );
}

export default Profile;