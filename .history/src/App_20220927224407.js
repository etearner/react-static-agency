import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Project1 from './pages/Project1'
import Project2 from './pages/Project2'
import Project3 from './pages/Project3'
import Project4 from './pages/Project4'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={Home} />
      <Route path='/projet-1' element={Proje} />
      <Route path='/' element={Home} />
      <Route path='/' element={Home} />
      <Route path='/' element={Home} />
      <Route path='/' element={Home} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;