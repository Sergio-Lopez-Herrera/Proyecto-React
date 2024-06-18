import React from 'react';
import styled from 'styled-components';

const ContactInfo = styled.div`
  text-align: center;
  margin: 2rem auto;
  max-width: 600px;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const ServicioTecnico = () => {
  return (
    <ContactInfo>
      <h2>Servicio Técnico</h2>
      <p>Para asistencia técnica, puedes contactarnos a través de:</p>
      <p><strong>Teléfono:</strong> +34 123 456 789</p>
      <p><strong>Email:</strong> soporte@ejemplo.com</p>
    </ContactInfo>
  );
};

export default ServicioTecnico;
