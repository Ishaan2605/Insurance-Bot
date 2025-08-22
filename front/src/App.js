import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages
import Home from './pages/Home';
import VehicleInsurance from './pages/VehicleInsurance';
import HealthInsurance from './pages/HealthInsurance';
import Results from './pages/Results';
import OurTeam from './pages/OurTeam';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/vehicle-insurance" element={<VehicleInsurance />} />
            <Route path="/health-insurance" element={<HealthInsurance />} />
            <Route path="/results" element={<Results />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
