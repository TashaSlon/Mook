import React from 'react';
import {Link} from 'react-router-dom';
import girl from '../images/girl.jpg';
import camera from '../images/camera.svg';
import image from '../images/image.svg';

const Image = () => {
  return (
        <section className="image">
            <Link to='/' className='image__btn'> &lt; Go back</Link>
            <img src={girl} className='image__image' alt='foto'/>
            <div className='image__btn-block'>
                <Link  to='/image-edit' className='image__foto'>
                    <img src={image} alt='icon' className='image__foto-icon'/>
                    <span>Choose photo from gallery</span>
                </Link>
                <Link to='/image-edit' className='image__camera'>
                    <img src={camera} alt='camera' className='image__camera-icon'/>
                    <span>Take photo with camera</span>
                </Link>
            </div>
        </section>
  );
}

export default Image;