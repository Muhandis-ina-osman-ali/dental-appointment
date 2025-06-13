import React, { useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    if (!isAdmin) {
      navigate('/admin-login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        backgroundColor: '#003366',
        color: 'white',
        padding: '1rem'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Admin Dashboard</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '1rem' }}>
              <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
                Overview
              </Link>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <Link to="/dashboard/appointments" style={{ color: 'white', textDecoration: 'none' }}>
                Appointments
              </Link>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <Link to="/dashboard/branches" style={{ color: 'white', textDecoration: 'none' }}>
                Branches
              </Link>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <button 
                onClick={handleLogout}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '2rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;