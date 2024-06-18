import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  max-width: 200px;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
`;

const ProductPrice = styled.p`
  color: #333;
  font-size: 1rem;
  margin: 0.5rem 0;
`;

const ProductLink = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductItem = ({ product }) => {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductPrice>{product.price}</ProductPrice>
      <ProductLink href={product.link} target="_blank" rel="noopener noreferrer">
        Ver en tienda
      </ProductLink>
    </Card>
  );
};

export default ProductItem;

