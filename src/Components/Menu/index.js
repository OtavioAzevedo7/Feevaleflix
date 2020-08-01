import React from 'react';
//import Logo from '../../Assets/Images/feevaleflix-logo.png'
import Logo from '../../Assets/Images/feevaleflix-logo-strongyellow.png'
import '../Menu/Menu.css'
import Button from '../Button'
//import ButtonLink from '../ButtonLink';
//import ButtonLink from ''

function Menu () {

    return (
    <nav className="Menu"> 
        <a href="/"> 
             <img className="Logo" src={Logo} alt=""></img>
        </a>

        <Button as ="a" className="ButtonLink" href="/">
            Novo video
        </Button>
    </nav>
    );
}

export default Menu;