import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../Assets/Images/footer-logo.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.feevale.br/">
        <img src={Logo} alt="Logo Alura" />
      </a>
      {/* <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.feevale.br/">
          Imersão React da Alura
        </a>
      </p> */}
    </FooterBase>
  );
}

export default Footer;
