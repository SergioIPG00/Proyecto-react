import React, { useState } from 'react';
import NavBar from './components/navbar';
import GameList from './components/Games-list';
import SearchBar from './components/searchBar';
import Profile from './components/profile';

function App() {
  const [showProfile, setshowProfile] = useState(true);

  const onLogoClick = () => {
    if (showProfile) {
      setshowProfile(false);
    }
  }

  const showMain = () => {
    setshowProfile(true);
  }

  return (
    <>
      <NavBar showProfile={showProfile} onProfileClick={onLogoClick} onLogoClick={showMain}/>
        <main>
        {showProfile && <div>
        <SearchBar/>
        <GameList/>
        </div>}
        {!showProfile && <Profile/>}
      </main>
    </>
  )
}

export default App
