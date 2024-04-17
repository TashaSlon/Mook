import { Card } from "./Card.js";
import Header from './Header.js';
import Footer from './Footer.js';

const Main = (props) => {
  
  return (
    <>
    <Header loggedIn={props.loggedIn} signIn={props.signin} />
    <main className="content">
      <section className="gallery">
        <ul className="cards">
            {props.cards.map(card => {
                return (<Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete}/>)
            })}
        </ul>
      </section>
    </main>
    <Footer/>
    </>
  );
};

export {Main};