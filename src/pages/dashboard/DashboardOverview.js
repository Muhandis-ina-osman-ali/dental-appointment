// import React from 'react';
// import React, { useState, useEffect } from 'react';

// const DashboardOverview = () => {
//   const appointments = [
//     { id: 1, patient: 'Ahmed Ali', date: '2023-06-15', time: '10:00 AM', branch: 'Makka Dental' },
//     { id: 2, patient: 'Fatima Hassan', date: '2023-06-16', time: '2:30 PM', branch: 'Mega Dental' },
//   ];

//   useEffect(() => {
//   fetch('http://localhost:5001/api/dashboard/appointments')
//     .then(res => res.json())
//     .then(setAppointments)
//     .catch(err => console.error('Error fetching appointments:', err));
// }, []);


//   return (
//     <>
//       <h1 style={{ color: '#003366' }}>Dashboard Overview</h1>
      
//       {/* Stats Cards */}
//       <div style={{ 
//         display: 'flex', 
//         gap: '1rem', 
//         marginBottom: '2rem',
//         flexWrap: 'wrap'
//       }}>
//         <div style={cardStyle}>
//           <h3>Total Appointments</h3>
//           <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>24</p>
//         </div>
//         <div style={cardStyle}>
//           <h3>Upcoming</h3>
//           <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>5</p>
//         </div>
//         <div style={cardStyle}>
//           <h3>Branches</h3>
//           <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>3</p>
//         </div>
//       </div>

//       {/* Recent Appointments Table */}
//       <div>
//         <h2 style={{ color: '#003366', marginBottom: '1rem' }}>Recent Appointments</h2>
//         <table style={tableStyle}>
//           {/* Table content same as before */}
//         </table>
//       </div>
//     </>
//   );
// };

// const cardStyle = {
//   backgroundColor: '#f0f8ff',
//   padding: '1rem',
//   borderRadius: '8px',
//   flex: 1,
//   minWidth: '200px'
// };

// const tableStyle = {
//   width: '100%', 
//   borderCollapse: 'collapse',
//   backgroundColor: 'white',
//   boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
// };

// export default DashboardOverview;

import React, { useState, useEffect } from 'react';

const DashboardOverview = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/dashboard/appointments')
      .then((res) => res.json())
      .then(setAppointments)
      .catch((err) => console.error('Error fetching appointments:', err));
  }, []);

  return (
    <>
      <h1 style={{ color: '#003366' }}>Dashboard Overview</h1>

      {/* Stats Cards */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        <div style={cardStyle}>
          <h3>Total Appointments</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{appointments.length}</p>
        </div>
        <div style={cardStyle}>
          <h3>Upcoming</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            {appointments.filter(a => new Date(a.appointment_date) >= new Date()).length}
          </p>
        </div>
        <div style={cardStyle}>
          <h3>Branches</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>3</p> {/* Optional: fetch branches to count */}
        </div>
      </div>

      {/* Recent Appointments Table */}
      <div>
        <h2 style={{ color: '#003366', marginBottom: '1rem' }}>Recent Appointments</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Patient</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Time</th>
              <th style={thStyle}>Branch</th>
              <th style={thStyle}>Doctor</th>
            </tr>
          </thead>
          <tbody>
            {appointments.slice(0, 5).map(app => (
              <tr key={app.id}>
                <td style={tdStyle}>{app.user_id}</td>
                <td style={tdStyle}>{app.appointment_date}</td>
                <td style={tdStyle}>{app.appointment_time}</td>
                <td style={tdStyle}>{app.branch_name}</td>
                <td style={tdStyle}>{app.doctor_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

const cardStyle = {
  backgroundColor: '#f0f8ff',
  padding: '1rem',
  borderRadius: '8px',
  flex: 1,
  minWidth: '200px'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  backgroundColor: 'white',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
};

const thStyle = {
  padding: '0.75rem',
  backgroundColor: '#003366',
  color: 'white',
  textAlign: 'left'
};

const tdStyle = {
  padding: '0.75rem',
  borderBottom: '1px solid #ccc'
};

export default DashboardOverview;
