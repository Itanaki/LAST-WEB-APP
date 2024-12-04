  // src/App.js
  import React from 'react';
  import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
  import LandingPage from 'C:/Users/enzop/Documents/GitHub/LAST-WEB-APP/fish-silage-monitor/src/components/LandingPage/LandingPage.js'; // Correct path
  import MonitoringPage from './components/MonitoringPage/MonitoringPage.js';

  const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/LAST-WEB-APP" element={<LandingPage />} />         {/* Landing Page Route */}
          <Route path="/monitoring" element={<MonitoringPage />} /> {/* Monitoring Page Route */}
        </Routes>
      </Router>
    );
  };

  export default App;