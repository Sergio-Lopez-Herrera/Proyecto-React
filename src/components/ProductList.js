import React from 'react';
import ProductItem from './ProductItem';
import styled from 'styled-components';

const products = [
  {
    id: 1,
    name: 'Teclado Mecánico',
    price: '75.00€',
    image: 'https://via.placeholder.com/200x200.png?text=Teclado+Mec%C3%A1nico',
    link: 'https://www.amazon.com/teclado-mecanico',
  },
  {
    id: 2,
    name: 'Ratón Gaming',
    price: '45.00€',
    image: 'https://via.placeholder.com/200x200.png?text=Rat%C3%B3n+Gaming',
    link: 'https://www.game.com/raton-gaming',
  },
  {
    id: 3,
    name: 'God of War Ragnarok',
    price: '60.00€',
    image: 'https://via.placeholder.com/200x200.png?text=God+of+War+Ragnarok',
    link: 'https://www.amazon.com/god-of-war-ragnarok',
  },
  {
    id: 4,
    name: 'PlayStation 5',
    price: '499.00€',
    image: 'https://via.placeholder.com/200x200.png?text=PlayStation+5',
    link: 'https://www.amazon.com/playstation-5',
  },
];

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductList = () => {
  return (
    <Container>
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </Container>
  );
};

export default ProductList;


