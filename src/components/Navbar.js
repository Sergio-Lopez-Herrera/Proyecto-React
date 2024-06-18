import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from './images/logo.jpg';


const Nav = styled.nav`
  background-color: #d3d3d3; 
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #000; 
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 40px;
  margin-right: 10px;
`;

const PageName = styled.h1`
  font-size: 1.5rem;
  color: #000;
  margin: 0;
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLinks>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/servicio-tecnico">Servicio Técnico</NavLink>
      </NavLinks>
      <LogoContainer>
        <Logo src={logoImg} alt="Logo de la Tienda" /> {}
        <PageName>Tu Portal de Electronica y Gaming</PageName>
      </LogoContainer>
    </Nav>
  );
};

export default Navbar;



