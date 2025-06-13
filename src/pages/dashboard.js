import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate();

  // Sample data - replace with real data from your backend
  const appointments = [
    { id: 1, patient: 'Ahmed Ali', date: '2023-06-15', time: '10:00 AM', branch: 'Makka Dental' },
    { id: 2, patient: 'Fatima Hassan', date: '2023-06-16', time: '2:30 PM', branch: 'Mega Dental' },
  ];

  const handleLogout = () => {
    // Handle logout logic here
    navigate('/login');
  };

  return (
    <div className="dashboard" style={{ display: 'flex', minHeight: '100vh' }}>
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
        <h1 style={{ color: '#003366' }}>Dashboard Overview</h1>
        
        {/* Stats Cards */}
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            backgroundColor: '#f0f8ff',
            padding: '1rem',
            borderRadius: '8px',
            flex: 1,
            minWidth: '200px'
          }}>
            <h3>Total Appointments</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>24</p>
          </div>
          <div style={{
            backgroundColor: '#f0f8ff',
            padding: '1rem',
            borderRadius: '8px',
            flex: 1,
            minWidth: '200px'
          }}>
            <h3>Upcoming</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>5</p>
          </div>
          <div style={{
            backgroundColor: '#f0f8ff',
            padding: '1rem',
            borderRadius: '8px',
            flex: 1,
            minWidth: '200px'
          }}>
            <h3>Branches</h3>
            <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>3</p>
          </div>
        </div>

        {/* Recent Appointments Table */}
        <div>
          <h2 style={{ color: '#003366', marginBottom: '1rem' }}>Recent Appointments</h2>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            backgroundColor: 'white',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <thead>
              <tr style={{ backgroundColor: '#003366', color: 'white' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>ID</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Patient</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Date</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Time</th>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Branch</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id} style={{ borderBottom: '1px solid #ddd' }}>
                  <td style={{ padding: '0.75rem' }}>{appointment.id}</td>
                  <td style={{ padding: '0.75rem' }}>{appointment.patient}</td>
                  <td style={{ padding: '0.75rem' }}>{appointment.date}</td>
                  <td style={{ padding: '0.75rem' }}>{appointment.time}</td>
                  <td style={{ padding: '0.75rem' }}>{appointment.branch}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Nested routes will be rendered here */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;