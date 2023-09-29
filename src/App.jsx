import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar';
import GameList from './components/Games-list';
import SearchBar from './components/searchBar';
import Profile from './components/profile';
import Login from './components/login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [section, setSection] = useState('posts');
  const [searchTerm, setSearchTerm] = useState("");  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []); 

  const onLogoClick = () => {    
    setSection('perfil');
  }

  const showMain = () => {
    setSection('posts');
  }

  const handleSuccessfulLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
      return <Login onLoginSuccess={handleSuccessfulLogin} />;
  }  

  return (
    <>
      <NavBar onProfileClick={onLogoClick} onLogoClick={showMain}/>
        <main>
        {section === 'posts' && <div>
        <SearchBar setSearchTerm={setSearchTerm}/>
        <GameList searchTerm={searchTerm} />
        </div>}
        {section === 'perfil' && <Profile/>}
      </main>
    </>
  )
}

export default App
