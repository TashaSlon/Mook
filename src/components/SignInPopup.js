import React from 'react';

export function SignInPopup({isOpen, onClose, handleLogin}) {
    const popupClass = isOpen ? ('popup popup_opened'): 'popup';
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    }

    return (
        <section className={popupClass} >
            <div className="popup__container">
                <button className="btn btn_type_close" type="reset" onClick={onClose}></button>
                <form onSubmit={handleSubmit} className="auth__form">
                    <input className="auth__input" id="email" name="email" type="email" placeholder='Email'/>
                    <input className="auth__input" id="password" name="password" type="password" placeholder='Password'/>
                    <button type="submit" onSubmit={handleSubmit} className="auth__link">Sign in</button>
                </form>
            </div>
        </section>
    )
};