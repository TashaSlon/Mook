import { useContext } from "react";
import { Link } from 'react-router-dom';

export function Card({card, onCardClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="card__block">
      <div className="card">
        <Link to='/image'>
          <img className="card__image" src={card.link} alt='foto'/>
        </Link>
        <div className="card__description">
          <p className="card__name">{card.name}</p>
        </div>
      </div>
    </li>
  );
}