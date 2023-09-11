import React, { useState } from 'react';
import NavBar from './components/navbar';
import GameList from './components/Games-list';
import SearchBar from './components/searchBar';
import Profile from './components/profile';

function App() {
  const [section, setSection] = useState('perfil');
  const [searchTerm, setSearchTerm] = useState("");

  const onLogoClick = () => {
    setSection('posts');
  }

  const showMain = () => {
    setSection('perfil');
  }

  return (
    <>
      <NavBar onProfileClick={onLogoClick} onLogoClick={showMain}/>
        <main>
        {section === 'perfil' && <div>
        <SearchBar setSearchTerm={setSearchTerm}/>
        <GameList searchTerm={searchTerm} />
        </div>}
        {section === 'posts' && <Profile/>}
      </main>
    </>
  )
}

export default App
