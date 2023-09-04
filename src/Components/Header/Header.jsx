import React from 'react';
import './Header.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-regular-svg-icons'
import {faCircleUser} from '@fortawesome/free-regular-svg-icons'
import {faChevronDown} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return(
        <div className='Header'>
            <nav>
                <div className='navbar'>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Services</a>
                    <div className='menu-desplegable'>
                        <button className='boton-desplegable'>Pages<FontAwesomeIcon icon={faChevronDown} size='lg' style={{marginLeft:"5px"}}/></button>
                        <div className='contenido-desplegable'>
                            <a href="#">Servicio 1</a>
                            <a href="#">Servicio 2</a>
                            <a href="#">Servicio 3</a>
                        </div>
                    </div>
                    <a href="#">Contact Us</a>
                    <a href="#" className='login-btn'><FontAwesomeIcon icon={faUser} size='lg' style={{marginRight:"10px",}}/>Login</a>
                    <a href="#" className='register-btn'><FontAwesomeIcon icon={faCircleUser} size='lg' style={{marginRight:"10px",}}/>Register</a>
                </div>
            </nav>
            <script src="https://kit.fontawesome.com/a8d95ab07e.js" crossorigin="anonymous"></script>
        </div>
    )
}

export { Header }