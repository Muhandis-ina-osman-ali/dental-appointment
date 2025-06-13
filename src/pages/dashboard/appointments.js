// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const DashboardAppointments = () => {
//   // Sample data - replace with real data from API
//   const [appointments, setAppointments] = useState([
//     { id: 1, patient: 'Ahmed Ali', date: '2023-06-15', time: '10:00 AM', branch: 'Makka Dental', status: 'confirmed' },
//     { id: 2, patient: 'Fatima Hassan', date: '2023-06-16', time: '2:30 PM', branch: 'Mega Dental', status: 'pending' },
//     { id: 3, patient: 'Omar Mohamed', date: '2023-06-17', time: '9:00 AM', branch: 'Alfuraat Dental', status: 'confirmed' },
//   ]);

//   const [timeRange, setTimeRange] = useState('day'); // day, week, month
//   const [selectedBranch, setSelectedBranch] = useState('all');

//   const handleCancelAppointment = (id) => {
//     setAppointments(appointments.map(app => 
//       app.id === id ? { ...app, status: 'cancelled' } : app
//     ));
//   };

//   const filteredAppointments = appointments.filter(app => {
//     // Filter by time range (simplified - in real app you'd filter by actual dates)
//     if (timeRange === 'day' && !app.date.includes('2023-06-15')) return false;
//     if (timeRange === 'week' && !app.date.includes('2023-06')) return false;
    
//     // Filter by branch
//     if (selectedBranch !== 'all' && app.branch !== selectedBranch) return false;
    
//     return true;
//   });

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2 style={{ color: '#003366', marginBottom: '2rem' }}>Appointments Management</h2>
      
//       {/* Filters */}
//       <div style={{ 
//         display: 'flex', 
//         gap: '1rem', 
//         marginBottom: '2rem',
//         alignItems: 'center'
//       }}>
//         <div>
//           <label style={{ marginRight: '0.5rem' }}>Time Range:</label>
//           <select 
//             value={timeRange}
//             onChange={(e) => setTimeRange(e.target.value)}
//             style={{ padding: '0.5rem' }}
//           >
//             <option value="day">Today</option>
//             <option value="week">This Week</option>
//             <option value="month">This Month</option>
//           </select>
//         </div>
        
//         <div>
//           <label style={{ marginRight: '0.5rem' }}>Branch:</label>
//           <select 
//             value={selectedBranch}
//             onChange={(e) => setSelectedBranch(e.target.value)}
//             style={{ padding: '0.5rem' }}
//           >
//             <option value="all">All Branches</option>
//             <option value="Makka Dental">Makka Dental</option>
//             <option value="Mega Dental">Mega Dental</option>
//             <option value="Alfuraat Dental">Alfuraat Dental</option>
//           </select>
//         </div>
//       </div>
      
//       {/* Reports Section */}
//       <div style={{ 
//         backgroundColor: '#f0f8ff', 
//         padding: '1rem', 
//         borderRadius: '8px',
//         marginBottom: '2rem'
//       }}>
//         <h3>Appointments Summary</h3>
//         <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
//           <div style={{ flex: 1, backgroundColor: 'white', padding: '1rem', borderRadius: '4px' }}>
//             <p>Total: {filteredAppointments.length}</p>
//           </div>
//           <div style={{ flex: 1, backgroundColor: 'white', padding: '1rem', borderRadius: '4px' }}>
//             <p>Confirmed: {filteredAppointments.filter(a => a.status === 'confirmed').length}</p>
//           </div>
//           <div style={{ flex: 1, backgroundColor: 'white', padding: '1rem', borderRadius: '4px' }}>
//             <p>Pending: {filteredAppointments.filter(a => a.status === 'pending').length}</p>
//           </div>
//           <div style={{ flex: 1, backgroundColor: 'white', padding: '1rem', borderRadius: '4px' }}>
//             <p>Cancelled: {filteredAppointments.filter(a => a.status === 'cancelled').length}</p>
//           </div>
//         </div>
//       </div>
      
//       {/* Appointments Table */}
//       <table style={{ 
//         width: '100%', 
//         borderCollapse: 'collapse',
//         backgroundColor: 'white',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//       }}>
//         <thead>
//           <tr style={{ backgroundColor: '#003366', color: 'white' }}>
//             <th style={{ padding: '0.75rem', textAlign: 'left' }}>ID</th>
//             <th style={{ padding: '0.75rem', textAlign: 'left' }}>Patient</th>
//             <th style={{ padding: '0.75rem', textAlign: 'left' }}>Date</th>
//             <th style={{ padding: '0.75rem', textAlign: 'left' }}>Time</th>
//             <th style={{ padding: '0.75rem', textAlign: 'left' }}>Branch</th>
//             <th style={{ padding: '0.75rem', textAlign: 'left' }}>Status</th>
//             <th style={{ padding: '0.75rem', textAlign: 'left' }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredAppointments.map((appointment) => (
//             <tr key={appointment.id} style={{ borderBottom: '1px solid #ddd' }}>
//               <td style={{ padding: '0.75rem' }}>{appointment.id}</td>
//               <td style={{ padding: '0.75rem' }}>{appointment.patient}</td>
//               <td style={{ padding: '0.75rem' }}>{appointment.date}</td>
//               <td style={{ padding: '0.75rem' }}>{appointment.time}</td>
//               <td style={{ padding: '0.75rem' }}>{appointment.branch}</td>
//               <td style={{ padding: '0.75rem' }}>
//                 <span style={{
//                   padding: '0.25rem 0.5rem',
//                   borderRadius: '4px',
//                   backgroundColor: 
//                     appointment.status === 'confirmed' ? '#d4edda' :
//                     appointment.status === 'pending' ? '#fff3cd' :
//                     '#f8d7da',
//                   color: 
//                     appointment.status === 'confirmed' ? '#155724' :
//                     appointment.status === 'pending' ? '#856404' :
//                     '#721c24'
//                 }}>
//                   {appointment.status}
//                 </span>
//               </td>
//               <td style={{ padding: '0.75rem' }}>
//                 {appointment.status !== 'cancelled' && (
//                   <button
//                     onClick={() => handleCancelAppointment(appointment.id)}
//                     style={{
//                       backgroundColor: '#dc3545',
//                       color: 'white',
//                       border: 'none',
//                       padding: '0.25rem 0.5rem',
//                       borderRadius: '4px',
//                       cursor: 'pointer'
//                     }}
//                   >
//                     Cancel
//                   </button>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DashboardAppointments;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DashboardAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [timeRange, setTimeRange] = useState('all');
  const [selectedBranch, setSelectedBranch] = useState('all');

  useEffect(() => {
    fetch('http://localhost:5001/api/dashboard/appointments')
      .then(res => res.json())
      .then(setAppointments)
      .catch(err => console.error('Error fetching appointments:', err));
  }, []);

  const handleCancelAppointment = (id) => {
    setAppointments(appointments.map(app =>
      app.id === id ? { ...app, status: 'cancelled' } : app
    ));
  };

  const filteredAppointments = appointments.filter(app => {
    if (selectedBranch !== 'all' && app.branch !== selectedBranch) return false;
    return true;
  });
  const handleCompleteAppointment = async (id) => {
  try {
    const res = await fetch(`http://localhost:5001/api/appointments/complete/${id}`, {
      method: 'PUT',
    });
    const data = await res.json();

    if (res.ok) {
      setAppointments(prev =>
        prev.map(app => app.id === id ? { ...app, status: 'completed' } : app)
      );
    } else {
      alert(data.message || 'Failed to mark as completed');
    }
  } catch (err) {
    console.error('Error completing appointment:', err);
    alert('Server error');
  }
};


  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: '#003366', marginBottom: '2rem' }}>Appointments Management</h2>

      {/* Filters */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        alignItems: 'center'
      }}>
        <div>
          <label style={{ marginRight: '0.5rem' }}>Branch:</label>
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            style={{ padding: '0.5rem' }}
          >
            <option value="all">All Branches</option>
            <option value="Makka Dental">Makka Dental</option>
            <option value="Mega Dental">Mega Dental</option>
            <option value="Alfuraat Dental">Alfuraat Dental</option>
          </select>
        </div>
      </div>

      {/* Reports Section */}
      <div style={{
        backgroundColor: '#f0f8ff',
        padding: '1rem',
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        <h3>Appointments Summary</h3>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          <div style={{ flex: 1, backgroundColor: 'white', padding: '1rem', borderRadius: '4px' }}>
            <p>Total: {filteredAppointments.length}</p>
          </div>
          <div style={{ flex: 1, backgroundColor: 'white', padding: '1rem', borderRadius: '4px' }}>
            <p>Confirmed: {filteredAppointments.filter(a => a.status === 'confirmed').length}</p>
          </div>
          <div style={{ flex: 1, backgroundColor: 'white', padding: '1rem', borderRadius: '4px' }}>
            <p>Pending: {filteredAppointments.filter(a => a.status === 'pending').length}</p>
          </div>
          <div style={{ flex: 1, backgroundColor: 'white', padding: '1rem', borderRadius: '4px' }}>
            <p>Cancelled: {filteredAppointments.filter(a => a.status === 'cancelled').length}</p>
          </div>
        </div>
      </div>

      {/* Appointments Table */}
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
            <th style={{ padding: '0.75rem', textAlign: 'left' }}>Status</th>
            <th style={{ padding: '0.75rem', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAppointments.map((appointment) => (
            <tr key={appointment.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '0.75rem' }}>{appointment.id}</td>
              <td style={{ padding: '0.75rem' }}>{appointment.patient}</td>
              <td style={{ padding: '0.75rem' }}>{appointment.date}</td>
              <td style={{ padding: '0.75rem' }}>{appointment.time}</td>
              <td style={{ padding: '0.75rem' }}>{appointment.branch}</td>
              <td style={{ padding: '0.75rem' }}>
                <span style={{
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  backgroundColor:
                    appointment.status === 'confirmed' ? '#d4edda' :
                    appointment.status === 'pending' ? '#fff3cd' :
                    '#f8d7da',
                  color:
                    appointment.status === 'confirmed' ? '#155724' :
                    appointment.status === 'pending' ? '#856404' :
                    '#721c24'
                }}>
                  {appointment.status}
                </span>
              </td>
              <td style={{ padding: '0.75rem' }}>
                {appointment.status !== 'cancelled' && (
                  <button
                    onClick={() => handleCancelAppointment(appointment.id)}
                    style={{
                      backgroundColor: '#dc3545',
                      color: 'white',
                      border: 'none',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Cancel
                  </button>
                  
                )}
  {appointment.status !== 'completed' && (
  <button
    onClick={() => handleCompleteAppointment(appointment.id)}
    style={{
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      padding: '0.25rem 0.5rem',
      borderRadius: '4px',
      marginRight: '5px',
      cursor: 'pointer',
      marginLeft:'10px'
    }}
  >
    Complete
  </button>
)}

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardAppointments;