import { useState, useEffect } from "react";
import { postLikes } from '../services/likes-services';

function LikesButton({initialLikes, id}) {
    const [likes, setLikes] = useState(initialLikes); 
    return (
        <button 
        onClick={() => {    
            setLikes(likes+1);    
            postLikes(id);
        }} 
        className="btn btn-danger"
        >
            <i className="bi bi-heart-fill m-2"></i>
            {likes}
        </button>
    );
}

function Game({text, image, likes, author, id}) {
    const [currentLikes, setCurrentLikes] = useState(likes);
    return (
        <div className="card m-2" style={{width: "300px"}}>
            <img src={image} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{author}</h5>
                <p><strong>Author:</strong> {text}</p>
            </div>
            <LikesButton initialLikes={currentLikes} id={id}/>
        </div>
    );
}

export default Game;