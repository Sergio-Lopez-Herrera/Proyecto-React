import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import styled from 'styled-components';

const OfferBanner = styled.div`
  background-color: #ff5722;
  color: #fff;
  padding: 1rem;
  text-align: center;
  margin: 2rem auto;
  max-width: 800px;
  width: 100%;
  cursor: pointer;
`;

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/productos');
  };

  return (
    <div style={{ margin: '2rem auto', maxWidth: '800px' }}>
      <Carousel
        showThumbs={false}
        onClickItem={handleClick}
        infiniteLoop
        autoPlay
        interval={3000}
      >
        <div>
          <img src="https://via.placeholder.com/800x400.png?text=Imagen+1" alt="Imagen 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400.png?text=Imagen+2" alt="Imagen 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400.png?text=Imagen+3" alt="Imagen 3" />
        </div>
      </Carousel>
      <Link to="/productos" style={{ textDecoration: 'none' }}>
        <OfferBanner>
          ¡Oferta especial! 40% de descuento en el Teclado Mecánico. ¡No te lo pierdas!
        </OfferBanner>
      </Link>
    </div>
  );
};

export default Home;


