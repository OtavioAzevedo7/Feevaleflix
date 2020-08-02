import React from 'react';
import { Link } from 'react-router-dom';
//import Logo from '../../Assets/Images/feevaleflix-logo.png'
import Logo from '../../Assets/Images/feevaleflix-logo-strongyellow.png'
import '../Menu/Menu.css'
import Button from '../Button'

function Menu () {

    return (
    <nav className="Menu"> 
        <Link to="/"> 
             <img className="Logo" src={Logo} alt=""></img>
        </Link>

        <Button as ={Link} className="ButtonLink" to="/cadastro/video">
            Novo video
        </Button>
    </nav>
    );
}

export default Menu;