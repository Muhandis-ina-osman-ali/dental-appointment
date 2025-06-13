// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const DashboardBranches = () => {
//   const [branches, setBranches] = useState([
//     { id: 1, name: "Makka Dental", location: "Bakara, Mogadishu", appointments: 15 },
//     { id: 2, name: "Mega Dental", location: "Km4, Mogadishu", appointments: 8 },
//     { id: 3, name: "Alfuraat Dental", location: "Hodan, Mogadishu", appointments: 12 },
//   ]);

//     useEffect(() => {
//   fetch('http://localhost:5001/api/dashboard/appointments')
//     .then(res => res.json())
//     .then(setAppointments)
//     .catch(err => console.error('Error fetching appointments:', err));
// }, []);


//   return (
//     <div style={{ padding: '2rem' }}>
//       <h2 style={{ color: '#003366', marginBottom: '2rem' }}>Branches Management</h2>
      
//       <div style={{ 
//         display: 'flex', 
//         justifyContent: 'space-between',
//         marginBottom: '2rem'
//       }}>
//         <h3>All Branches</h3>
//         <button
//           style={{
//             backgroundColor: '#003366',
//             color: 'white',
//             border: 'none',
//             padding: '0.5rem 1rem',
//             borderRadius: '4px',
//             cursor: 'pointer'
//           }}
//         >
//           Add New Branch
//         </button>
//       </div>
      
//       <table style={{ 
//         width: '100%', 
//         borderCollapse: 'collapse',
//         backgroundColor: 'white',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//       }}>
//         <thead>
//           <tr style={{ backgroundColor: '#003366', color: 'white' }}>
//             <th style={{ padding: '0.75rem', textAlign: 'left' }}>ID</th>
//             <th style={{ padding: '0.75rem', textAlign: 'left' }}>Name</th>
//             <th style={{ padding: '0.75rem', textAlign: 'left' }}>Location</th>
//             <th style={{ padding: '0.75rem', textAlign: 'left' }}>Appointments</th>
//             <th style={{ padding: '0.75rem', textAlign: 'left' }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {branches.map((branch) => (
//             <tr key={branch.id} style={{ borderBottom: '1px solid #ddd' }}>
//               <td style={{ padding: '0.75rem' }}>{branch.id}</td>
//               <td style={{ padding: '0.75rem' }}>{branch.name}</td>
//               <td style={{ padding: '0.75rem' }}>{branch.location}</td>
//               <td style={{ padding: '0.75rem' }}>{branch.appointments}</td>
//               <td style={{ padding: '0.75rem' }}>
//                 <Link 
//                   to={`/branch/${branch.id}`}
//                   style={{
//                     backgroundColor: '#003366',
//                     color: 'white',
//                     padding: '0.25rem 0.5rem',
//                     borderRadius: '4px',
//                     textDecoration: 'none',
//                     marginRight: '0.5rem'
//                   }}
//                 >
//                   View
//                 </Link>
//                 <button
//                   style={{
//                     backgroundColor: '#dc3545',
//                     color: 'white',
//                     border: 'none',
//                     padding: '0.25rem 0.5rem',
//                     borderRadius: '4px',
//                     cursor: 'pointer'
//                   }}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DashboardBranches;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DashboardBranches = () => {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/branches')
      .then((res) => res.json())
      .then(setBranches)
      .catch((err) => console.error('Error fetching branches:', err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2 style={{ color: '#003366', marginBottom: '2rem' }}>Branches Management</h2>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '2rem'
      }}>
        <h3>All Branches</h3>
        <button
          style={{
            backgroundColor: '#003366',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Add New Branch
        </button>
      </div>

      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: 'white',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#003366', color: 'white' }}>
            <th style={{ padding: '0.75rem', textAlign: 'left' }}>ID</th>
            <th style={{ padding: '0.75rem', textAlign: 'left' }}>Name</th>
            <th style={{ padding: '0.75rem', textAlign: 'left' }}>Location</th>
            <th style={{ padding: '0.75rem', textAlign: 'left' }}>Phone</th>
            <th style={{ padding: '0.75rem', textAlign: 'left' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((branch) => (
            <tr key={branch.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '0.75rem' }}>{branch.id}</td>
              <td style={{ padding: '0.75rem' }}>{branch.name}</td>
              <td style={{ padding: '0.75rem' }}>{branch.location}</td>
              <td style={{ padding: '0.75rem' }}>{branch.phone}</td>
              <td style={{ padding: '0.75rem' }}>
                <Link
                  to={`/branch/${branch.id}`}
                  style={{
                    backgroundColor: '#003366',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    marginRight: '0.5rem'
                  }}
                >
                  View
                </Link>
                <button
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardBranches;
