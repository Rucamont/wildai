// App.js
import React from 'react';
import Observatory from './routes/Observatory';
import Home from './routes/Home';
import EspecieDetalle from './routes/Especies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <Routes>
        <Route path="/explora" element={<Observatory />} />
        <Route path="/" element={<Home />} />
        <Route path="/especies/:prefix/:nombreCientifico" element={<EspecieDetalle />} />
      </Routes>
    
  );
}

export default App;
