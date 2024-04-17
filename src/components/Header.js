export default function Header(props) {

    return (
        <header className="header">
            <div className='header__block'>
                <h1 className="logo">OneAI</h1>
                { (!props.loggedIn) 
                    ? <button className="auth__btn" onClick={props.signIn} type='button'>Sign in</button>
                    : <div></div>
                }
            </div>
        </header>
    );
};