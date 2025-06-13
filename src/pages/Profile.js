// // src/pages/Profile.js
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     } else {
//       navigate('/login'); // redirect to login if not authenticated
//     }
//   }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('user');
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   if (!user) return null;

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.header}>User Profile</h2>
//       <div style={styles.infoBox}>
//         <p><strong>Full Name:</strong> {user.full_name}</p>
//         <p><strong>Email:</strong> {user.email}</p>
//       </div>
//       <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '2rem',
//     maxWidth: '500px',
//     margin: '2rem auto',
//     border: '1px solid #ccc',
//     borderRadius: '10px',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//     backgroundColor: '#f9f9f9'
//   },
//   header: {
//     textAlign: 'center',
//     color: '#003366'
//   },
//   infoBox: {
//     margin: '1rem 0',
//     lineHeight: '1.8'
//   },
//   logoutBtn: {
//     padding: '10px 20px',
//     backgroundColor: '#cc0000',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer'
//   }
// };

// export default Profile;

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [appointments, setAppointments] = useState([]); // ✅ default to an empty array

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      // ✅ Fetch appointments for this user
      fetch(`http://localhost:5001/api/appointments/user/${parsedUser.id}`)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) {
            setAppointments(data);
          } else {
            console.warn("Unexpected data format:", data);
            setAppointments([]); // fallback
          }
        })
        .catch(err => {
          console.error('Error fetching appointments:', err);
          setAppointments([]); // fallback on error
        });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>User Profile</h2>
      <div style={styles.infoBox}>
        <p><strong>Full Name:</strong> {user.full_name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <h3 style={{ color: '#003366' }}>My Appointments</h3>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul>
          {appointments.map(app => (
            <li key={app.id}>
              📅 {app.appointment_date} ⏰ {app.appointment_time} 🏥 {app.branch_name} 👨‍⚕️ {app.doctor_name}
            </li>
          ))}
        </ul>
      )}

      <button style={styles.logoutBtn} onClick={handleLogout}>Logout</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '2rem auto',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9'
  },
  header: {
    textAlign: 'center',
    color: '#003366'
  },
  infoBox: {
    margin: '1rem 0',
    lineHeight: '1.8'
  },
  logoutBtn: {
    padding: '10px 20px',
    backgroundColor: '#cc0000',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Profile;

