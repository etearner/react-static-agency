import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={Home} />
      <Route path='/projet-1' element={Project} />
      <Route path='/' element={Home} />
      <Route path='/' element={Home} />
      <Route path='/' element={Home} />
      <Route path='/' element={Home} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;