import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';
// import { AuthPage } from './pages/AuthPage';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { SmallBreedsPage } from './pages/SmallBreedsPage';
import { MediumBreedsPage } from './pages/MediumBreedsPage';
import { LargeBreedsPage } from './pages/LargeBreedsPage';

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Verificar si hay un usuario logueado al cargar la app
  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');

    if (token && savedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <DashboardPage user={user} onLogout={handleLogout}>
                <AppRoutes />
              </DashboardPage>
            ) : (
              <LandingPage />
            )
          }
        />
        <Route path="/raza-pequena" element={<SmallBreedsPage />} />
        <Route path="/raza-mediana" element={<MediumBreedsPage />} />
        <Route path="/raza-grande" element={<LargeBreedsPage />} />
        {/* En caso de que se necesiten más rutas públicas o el AuthPage, se añaden aquí */}
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
    </BrowserRouter>
  );
}
