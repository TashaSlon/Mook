import React, {useState} from 'react';

export function SignInPopup({isOpen, onClose, handleLogin}) {
    const popupClass = isOpen ? ('popup popup_opened'): 'popup';
    
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormValue({
            ...formValue,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formValue.email || !formValue.password) {
            return;
        }
        const { password, email } = formValue;
        handleLogin(password, email);
        setFormValue({email: '', password: ''});
    }

    function handleClose() {
        onClose();
        
    }

    return (
        <section className={popupClass} >
            <div className="popup__container">
                <button className="btn btn_type_close" type="reset" onClick={onClose}></button>
                <form onSubmit={handleSubmit} className="auth__form">
                    <input className="auth__input" id="email" name="email" type="email" value={formValue.email} onChange={handleChange} placeholder='Email'/>
                    <input className="auth__input" id="password" name="password" type="password" value={formValue.password} onChange={handleChange} placeholder='Password'/>
                    <button type="submit" onSubmit={handleSubmit} className="auth__link">Sign in</button>
                </form>
            </div>
        </section>
    )
};