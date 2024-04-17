import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import {Main} from './Main';
import Login from './Login.js';
import Image from './Image.js';
import ImageEdit from './ImageEdit.js';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import {SignInPopup} from './SignInPopup.js';
import InfoTooltip from './InfoTooltip';
import { getEmail, authorize, register,logout } from '../utils/auth.js';
import girl from '../images/girl.jpg';


function App() {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isScreenFixed, setIsScreeFixed] = useState(false);
  const [isSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

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

  

  useEffect(() => {
    if (loggedIn){
      api.getUserInfo()
        .then(userData => {
          setCurrentUser(userData);
        })
        .catch(err => console.log(`Ошибка.....: ${err}`))
    }},[loggedIn]);

  

  function handleSignIn() {
    setIsSignInPopupOpen(true);
    setIsScreeFixed(true);
  };

  function handleInfoTooltipClick(res) {
    if(res.data) {
      setStatus(true);
    }
    setIsInfoTooltipOpen(true);
  };

  function closeAllPopups() {
    setIsSubmitPopupOpen(false);
    setIsInfoTooltipOpen(false);
    setIsScreeFixed(false);
  };

  function handleLogin(password, email) {
    authorize(password, email)
      .then(() => {
          setLoggedIn(true);
          navigate('/', {replace: true});
      })
      .catch(err => {
        setStatus(false);
        handleInfoTooltipClick(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className={ (isScreenFixed) ? "page page__fixed" : "page"} >
        <Routes>
          <Route path="/" element={<Main cards={cards} loggedIn={loggedIn} signin={handleSignIn}/>} />
          <Route path="/image" element={<Image />} />
          <Route path="/image-edit" element={<ImageEdit />} />
          <Route path="/sign-in" element={
            <div className="loginContainer">
              <Login handleLogin={handleLogin}/>
            </div>} />
        </Routes>

        <SignInPopup isOpen={isSignInPopupOpen} onClose={closeAllPopups} />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
