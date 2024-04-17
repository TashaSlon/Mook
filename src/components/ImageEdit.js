import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header.js';
import man from '../images/man.jpg';
import camera from '../images/camera.svg';
import image from '../images/image.svg';

const ImageEdit = (props) => {
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
    
    const { password, email } = formValue;
    props.onRegister(password, email);
  }
  const page = 'signup';

  return (
        <section className="image-edit">
            <img src={man} className='image-edit__image' alt='foto'/>
            <button className='image-edit__save'>Save</button>
            <Link to='/image' className='image-edit__more'>More pics</Link>
        </section>
  );
}

export default ImageEdit;