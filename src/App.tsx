import React, { JSX } from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Nav from './components/Nav';

const App = (): JSX.Element => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
