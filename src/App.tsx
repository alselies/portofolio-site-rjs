// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portofolio';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
};

export default App;