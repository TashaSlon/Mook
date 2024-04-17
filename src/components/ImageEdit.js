import React from 'react';
import {Link} from 'react-router-dom';
import man from '../images/man.jpg';

const ImageEdit = () => {

  return (
        <section className="image-edit">
            <img src={man} className='image-edit__image' alt='foto'/>
            <button className='image-edit__save'>Save</button>
            <Link to='/image' className='image-edit__more'>More pics</Link>
        </section>
  );
}

export default ImageEdit;