import { useState, useEffect } from "react";

function LikesButton(){    
    const [likes, setLikes] = useState(0);    
    return(
        <button 
        onClick={() => {        
            setLikes(likes+1);
        }} 
        className="btn btn-danger"
        ><i className="bi bi-heart-fill m-2"></i>
         {likes}
        </button>
    );
}

function Game({title, platform, genre, release_date, image}){
    return(
        <div className="card m-2" style={{width: "300px"}}>

            <img src={image} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>                
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{platform}</li>
                <li className="list-group-item">{genre}</li>
                <li className="list-group-item">{release_date}</li>
            </ul>
            <LikesButton/>
            
      </div>
    );
}

export default Game;