import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DiscoveryPage from './pages/DiscoveryPage';
import DesignPage from './pages/DesignPage';
import BuildPage from './pages/BuildPage';
import OptimizePage from './pages/OptimizePage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discovery" element={<DiscoveryPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/optimize" element={<OptimizePage />} />
      </Routes>
    </Router>
  );
};

export default App;