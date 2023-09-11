import { useEffect, useState } from 'react';
import { getGames } from '../services/games-services';
import Game  from './game';

function GameList(){
    const [games, setGame] = useState(null);

    useEffect(() => {
        getGames().then((games) => setGame(games))
    }, [])
    
    if(!games){
        return<div>loading...</div>
    }

    return<div className='d-flex flex-wrap'> 
        {games.map((game) =>(
            <Game
            key={game.id}
            title={game.title}
            platform={game.platform}
            genre ={game.genre}
            release_date ={game.release_date}
            image={game.image}/>
        ))}
           
    </div>
}

export default GameList;