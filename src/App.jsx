import NavBar from './components/navbar';
import GameList from './components/Games-list';
import SearchBar from './components/searchBar';

function App() {

  return (
    <>
      <NavBar/>
      <SearchBar/>
      <main>
        <GameList/>
      </main>
    </>
  )
}

export default App
