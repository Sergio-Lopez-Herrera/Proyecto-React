import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #d3d3d3; /* Gris claro */
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  color: #000; /* Texto negro */
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2023 Tu Tienda de Videojuegos. Todos los derechos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;



