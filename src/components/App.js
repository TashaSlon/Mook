import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {Main} from './Main';
import Image from './Image.js';
import ImageEdit from './ImageEdit.js';
import {SignInPopup} from './SignInPopup.js';
import girl from '../images/girl.jpg';


function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isScreenFixed, setIsScreenFixed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const cards = [
    {
      id: 1,
      name: 'Lego',
      link: girl
    },
    {
      id: 2,
      name: 'Lego',
      link: girl
    }
  ];

  function handleSignIn() {
    setIsSignInPopupOpen(true);
    setIsScreenFixed(true);
  };

  function closeAllPopups() {
    setIsSignInPopupOpen(false);
    setIsScreenFixed(false);
  };

  function handleLogin() {
    setIsSignInPopupOpen(false);
    setLoggedIn(true);
    setIsScreenFixed(false);
  }

  return (
      <div className={ (isScreenFixed) ? "page page__fixed" : "page"} >
        <Routes>
          <Route path="/" element={<Main cards={cards} loggedIn={loggedIn} signin={handleSignIn}/>} />
          <Route path="/image" element={<Image />} />
          <Route path="/image-edit" element={<ImageEdit />} />
        </Routes>

        <SignInPopup isOpen={isSignInPopupOpen} onClose={closeAllPopups} handleLogin={handleLogin} />

      </div>
  );
}

export default App;
