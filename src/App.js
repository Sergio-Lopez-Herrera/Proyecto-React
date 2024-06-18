import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Home from './components/Home';
import ServicioTecnico from './components/ServicioTecnico';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/servicio-tecnico" element={<ServicioTecnico />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



