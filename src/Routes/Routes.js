import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Componentes/Layout/Layout';
import Home from '../Pages/Home';

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default MyRoutes;
