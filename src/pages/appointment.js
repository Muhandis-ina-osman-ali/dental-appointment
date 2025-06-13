import { Link } from 'react-router-dom';

import cleaningIcon from './assets/cleaning.png';
import bracesIcon from './assets/braces.png';
// import rootIcon from './assets/root.png';
import whiteningIcon from './assets/cleaning.png';
// import implantsIcon from './assets/implants.png';
import extractionIcon from './assets/extraction.png';
// import checkupIcon from './assets/checkup.png';
// import cavityIcon from './assets/cavity.png';
import makkaLogo from './assets/makka.png';
import megaLogo from './assets/mega.png';
import sihaLogo from './assets/alfurat.png';

function Appointment() {
  const branches = [
    {
      id: 1,
      name: "Makka Dental",
      location: "Bakara, Mogadishu",
      logo: makkaLogo,
      services: [
        { name: "Teeth Cleaning", icon: cleaningIcon },
        { name: "Braces", icon: bracesIcon },
      ],
    },
    {
      id: 2,
      name: "Mega Dental",
      location: "Km4, Mogadishu",
      logo: megaLogo,
      services: [
        { name: "Whitening", icon: whiteningIcon },
        { name: "Tooth Extraction", icon: extractionIcon },
      ],
    },
    {
      id: 3,
      name: "Siha Dental",
      location: "Hodan, Mogadishu",
      logo: sihaLogo,
      services: [
        { name: "Braces", icon: bracesIcon },
      ],
    },
  ];

  return (
    <div className="appointment-page" style={{ padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', color: '#003366', marginBottom: '1rem' }}>
        Book an Appointment
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Select one of our dental branches below:
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {branches.map((branch) => (
          <div
            key={branch.id}
            style={{
              border: '1px solid #ddd',
              width: '280px',
              borderRadius: '10px',
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
              overflow: 'hidden',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={branch.logo}
              alt={`${branch.name} logo`}
              style={{
                width: '120px',
                height: '80px',
                objectFit: 'contain',
                borderRadius: '10px',
                marginBottom: '1rem',
                marginTop: '1rem',
              }}
            />

            <div style={{ padding: '1rem' }}>
              <h3 style={{ margin: '0.5rem 0' }}>{branch.name}</h3>
              <p style={{ marginBottom: '0.5rem', color: '#666' }}>{branch.location}</p>

              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#003366' }}>Services:</strong>
                <div
                  style={{
                    marginTop: '0.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  {branch.services.map((service, index) => (
                    <div
                      key={index}
                      style={{
                        width: '70%',
                        height: '130px',
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        backgroundColor: '#fff',
                        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      }}
                    >
                      <img
                        src={service.icon}
                        alt={service.name}
                        style={{
                          width: '100%',
                          height: '100px',
                          objectFit: 'cover',
                        }}
                      />
                      <div
                        style={{
                          padding: '0.5rem',
                          fontSize: '0.9rem',
                          fontWeight: 'bold',
                          color: '#003366',
                        }}
                      >
                        {service.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link to={`/branch/${branch.id}`}>
                <button
                  style={{
                    backgroundColor: '#003366',
                    color: 'white',
                    border: 'none',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Book Appointment
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointment;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import makkaLogo from './assets/makka.png';
// import megaLogo from './assets/mega.png';
// import sihaLogo from './assets/alfurat.png';

// function Appointment() {
//   const branches = [
//     {
//       id: 1,
//       name: "Makka Dental",
//       location: "Bakara, Mogadishu",
//       logo: makkaLogo,
//     },
//     {
//       id: 2,
//       name: "Mega Dental",
//       location: "Km4, Mogadishu",
//       logo: megaLogo,
//     },
//     {
//       id: 3,
//       name: "Siha Dental",
//       location: "Hodan, Mogadishu",
//       logo: sihaLogo,
//     },
//   ];

//   return (
//     <div className="appointment-page" style={{ padding: '2rem' }}>
//       <h2 style={{ textAlign: 'center', color: '#003366', marginBottom: '1rem' }}>
//         Book an Appointment
//       </h2>
//       <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
//         Select one of our dental branches below:
//       </p>

//       <div
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           gap: '2rem',
//           flexWrap: 'wrap',
//         }}
//       >
//         {branches.map((branch) => (
//           <div
//             key={branch.id}
//             style={{
//               border: '1px solid #ddd',
//               width: '280px',
//               borderRadius: '10px',
//               textAlign: 'center',
//               backgroundColor: '#f9f9f9',
//               overflow: 'hidden',
//               boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
//             }}
//           >
//             <img
//               src={branch.logo}
//               alt={`${branch.name} logo`}
//               style={{
//                 width: '120px',
//                 height: '80px',
//                 objectFit: 'contain',
//                 borderRadius: '10px',
//                 marginBottom: '1rem',
//                 marginTop: '1rem',
//               }}
//             />
//             <div style={{ padding: '1rem' }}>
//               <h3 style={{ margin: '0.5rem 0' }}>{branch.name}</h3>
//               <p style={{ marginBottom: '0.5rem', color: '#666' }}>{branch.location}</p>
//               <Link to={`/branch/${branch.id}`}>
//                 <button
//                   style={{
//                     backgroundColor: '#003366',
//                     color: 'white',
//                     border: 'none',
//                     padding: '0.5rem 1rem',
//                     borderRadius: '4px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   Book Appointment
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Appointment;
