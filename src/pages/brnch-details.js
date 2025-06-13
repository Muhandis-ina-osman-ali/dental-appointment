// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// import makkaLogo from './assets/makka.png';
// import megaLogo from './assets/mega.png';
// import sihaLogo from './assets/alfurat.png';

// const branches = [
//   {
//     id: 1,
//     name: "Makka Dental",
//     location: "Bakara, Mogadishu",
//     logo: makkaLogo,
//     services: ["Teeth Cleaning", "Braces", "Root Canal"],
//   },
//   {
//     id: 2,
//     name: "Mega Dental",
//     location: "Km4, Mogadishu",
//     logo: megaLogo,
//     services: ["Whitening", "Implants", "Tooth Extraction"],
//   },
//   {
//     id: 3,
//     name: "Alfuraat Dental",
//     location: "Hodan, Mogadishu",
//     logo: sihaLogo,
//     services: ["Checkup", "Cavity Filling", "Braces"],
//   },
// ];

// const BranchDetails = () => {
//   const { id } = useParams();
//   const branch = branches.find((b) => b.id === parseInt(id));

//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     doctor: '',
//     date: '',
//     time: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // ✅ prevent form refresh

//     // validation check
//     const { name, phone, doctor, date, time } = formData;
//     if (!name || !phone || !doctor || !date || !time) {
//       return alert('All fields are required');
//     }

//     try {
//       const res = await fetch('http://localhost:5001/api/appointments/book', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name,
//           phone,
//           doctor,
//           date,
//           time,
//           branch: branch.name
//         })
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert('Appointment booked successfully!');
//         setFormData({
//           name: '',
//           phone: '',
//           doctor: '',
//           date: '',
//           time: ''
//         });
//       } else {
//         alert(data.message || 'Booking failed');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//       alert('An error occurred while booking');
//     }
//   };

//   if (!branch) {
//     return <h2 style={{ textAlign: 'center' }}>Branch not found</h2>;
//   }

//   return (
//     <div style={{ padding: '2rem' }}>
//       {/* Branch Logo and Info */}
//       <div style={{ textAlign: 'center' }}>
//         <img
//           src={branch.logo}
//           alt={branch.name}
//           style={{
//             width: '300px',
//             borderRadius: '10px',
//             objectFit: 'cover',
//             marginBottom: '1rem',
//           }}
//         />
//         <h2 style={{ color: '#003366' }}>{branch.name}</h2>
//         <p style={{ color: '#003366', fontWeight: 'bold' }}>{branch.location}</p>
//       </div>

//       {/* Services Offered */}
//       <div style={{ marginTop: '2rem', textAlign: 'center' }}>
//         <h4 style={{ color: '#003366', marginBottom: '1rem' }}>Services Offered</h4>
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'center',
//             gap: '0.5rem',
//             flexWrap: 'wrap',
//           }}
//         >
//           {branch.services.map((service, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: '#e6f0ff',
//                 padding: '0.5rem 1rem',
//                 borderRadius: '20px',
//                 color: '#003366',
//                 fontWeight: '500',
//                 fontSize: '0.95rem',
//               }}
//             >
//               {service}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Booking Form */}
//       <div
//         style={{
//           marginTop: '3rem',
//           padding: '1.5rem',
//           backgroundColor: '#f2f2f2',
//           borderRadius: '8px',
//           maxWidth: '500px',
//           marginInline: 'auto',
//         }}
//       >
//         <h3 style={{ color: '#003366', marginBottom: '1rem', textAlign: 'center' }}>
//           Book Appointment
//         </h3>
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             display: 'flex',
//             flexDirection: 'column',
//             gap: '1rem',
//           }}
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone Number"
//             required
//             value={formData.phone}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <select
//             name="doctor"
//             required
//             value={formData.doctor}
//             onChange={handleChange}
//             style={inputStyle}
//           >
//             <option value="">Select Doctor</option>
//             <option value="Dr. Seylac">Dr. Seylac — Somalia</option>
//             <option value="Dr. Saaki">Dr. Saaki — Syria</option>
//             <option value="Dr. Farizi">Dr. Farizi — Yemen</option>
//             <option value="Dr. Mohamed">Dr. Mohamed — Egypt</option>
//           </select>
//           <input
//             type="date"
//             name="date"
//             required
//             value={formData.date}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <input
//             type="time"
//             name="time"
//             required
//             value={formData.time}
//             onChange={handleChange}
//             style={inputStyle}
//           />
//           <button type="submit" style={buttonStyle}>Submit Appointment</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const inputStyle = {
//   padding: '0.7rem',
//   borderRadius: '5px',
//   border: '1px solid #ccc',
// };

// const buttonStyle = {
//   backgroundColor: '#003366',
//   color: 'white',
//   border: 'none',
//   padding: '0.8rem',
//   borderRadius: '5px',
//   cursor: 'pointer',
// };

// export default BranchDetails;


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import makkaLogo from './assets/makka.png';
import megaLogo from './assets/mega.png';
import sihaLogo from './assets/alfurat.png';



const branches = [
  {
    id: 1,
    name: "Makka Dental",
    location: "Bakara, Mogadishu",
    logo: makkaLogo,
    services: ["Teeth Cleaning", "Braces", "Root Canal"],
  },
  {
    id: 2,
    name: "Mega Dental",
    location: "Km4, Mogadishu",
    logo: megaLogo,
    services: ["Whitening", "Implants", "Tooth Extraction"],
  },
  {
    id: 3,
    name: "Alfuraat Dental",
    location: "Hodan, Mogadishu",
    logo: sihaLogo,
    services: ["Checkup", "Cavity Filling", "Braces"],
  },
];

const BranchDetails = () => {
  const { id } = useParams();
  const branch = branches.find((b) => b.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    doctor_id: '',
    date: '',
    time: ''
  });

  if (!branch) {
    return <h2 style={{ textAlign: 'center' }}>Branch not found</h2>;
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, phone, doctor_id, date, time } = formData;
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      alert("Please log in first.");
      return;
    }

    if (!name || !phone || !doctor_id || !date || !time) {
      alert("All fields are required.");
      return;
    }

    try {
      const res = await fetch('http://localhost:5001/api/appointments/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user.id,
          branch_id: branch.id,
          doctor_id,
          date,
          time
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Appointment booked!');
        setFormData({ name: '', phone: '', doctor_id: '', date: '', time: '' });
      } else {
        alert(data.message || 'Failed to book');
      }
    } catch (err) {
      console.error(err);
      alert('Error booking appointment');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <img
          src={branch.logo}
          alt={branch.name}
          style={{
            width: '300px',
            borderRadius: '10px',
            objectFit: 'cover',
            marginBottom: '1rem',
          }}
        />
        <h2 style={{ color: '#003366' }}>{branch.name}</h2>
        <p style={{ color: '#003366', fontWeight: 'bold' }}>{branch.location}</p>
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h4 style={{ color: '#003366', marginBottom: '1rem' }}>Services Offered</h4>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          {branch.services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#e6f0ff',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                color: '#003366',
                fontWeight: '500',
                fontSize: '0.95rem',
              }}
            >
              {service}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: '3rem',
          padding: '1.5rem',
          backgroundColor: '#f2f2f2',
          borderRadius: '8px',
          maxWidth: '500px',
          marginInline: 'auto',
        }}
      >
        <h3 style={{ color: '#003366', marginBottom: '1rem', textAlign: 'center' }}>
          Book Appointment
        </h3>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            placeholder="Phone Number"
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <select
            name="doctor_id"
            value={formData.doctor_id}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select Doctor</option>
            <option value="1">Dr. Seylac — Somalia</option>
            <option value="2">Dr. Saaki — Syria</option>
            <option value="3">Dr. Farizi — Yemen</option>
            <option value="4">Dr. Mohamed — Egypt</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Submit Appointment</button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '0.7rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  backgroundColor: '#003366',
  color: 'white',
  border: 'none',
  padding: '0.8rem',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default BranchDetails;

