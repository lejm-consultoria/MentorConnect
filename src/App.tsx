import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Dashboard } from './pages/Dashboard';
import { ReviewDashboard } from './pages/ReviewDashboard';
import { ReviewDetail } from './pages/ReviewDetail';
export function App() {
  return <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reviews" element={<ReviewDashboard />} />
          <Route path="/review/:id" element={<ReviewDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>;
}