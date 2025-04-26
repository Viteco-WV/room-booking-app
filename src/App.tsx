import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import RoomBookingSystem from './pages/RoomBookingSystem';
import EnvironmentalDashboard from './pages/EnvironmentalDashboard';
import EnergyDashboard from './pages/EnergyDashboard';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/roombooking" element={<RoomBookingSystem />} />
          <Route path="/enviromental" element={<EnvironmentalDashboard />} />
          <Route path="/energy" element={<EnergyDashboard />} />
          <Route path="/" element={<Page1 />} /> {/* Default route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;