import React from 'react';
import { FooterBase } from './styles';
import "./footer.css"

function Footer() {
  return (
    <FooterBase>
      <a className="iconegit" href="https://github.com/naylasouza/petflix">
      <i class="fab fa-github-alt"></i>
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://www.linkedin.com/in/naylasouzaribeiro/">
          Nayla Souza Ribeiro
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
