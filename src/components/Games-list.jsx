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

    const filteredGames = games.filter(game => 
        game.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='d-flex flex-wrap'> 
            {filteredGames.map((game) => (
                <Game
                    key={game.id}
                    author={game.author.name}
                    text={game.text}
                    likes={game.likes}
                    image={game.image}
                    id={game.id}
                />
            ))}
        </div>
    );
}

export default GameList;
