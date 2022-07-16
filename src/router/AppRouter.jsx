import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
