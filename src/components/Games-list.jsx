import { useEffect, useState } from 'react';
import { getGames } from '../services/games-services';
import Game  from './game';

function GameList({ searchTerm }) {
    const [games, setGame] = useState(null);

    useEffect(() => {
        getGames().then((games) => setGame(games));
    }, []);

    if (!games) {
        return <div>loading...</div>;
    }

    const gamesArray = Object.values(games);
    const filteredGames = gamesArray.filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='d-flex flex-wrap'> 
            {filteredGames.map((game) => (
                <Game
                    key={game.id}
                    title={game.title}
                    platform={game.platform}
                    genre={game.genre}
                    release_date={game.release_date}
                    image={game.image}
                />
            ))}
        </div>
    );
}

export default GameList;