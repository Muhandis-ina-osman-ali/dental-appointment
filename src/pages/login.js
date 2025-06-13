// // import React, { useState } from 'react';
// // import './auth.css';

// // const Login = () => {
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: ''
// //   });

// //   const [errors, setErrors] = useState({});

// //   const validate = () => {
// //     const newErrors = {};

// //     if (!formData.email.trim()) {
// //       newErrors.email = 'Email is required';
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = 'Email is invalid';
// //     }

// //     if (!formData.password) {
// //       newErrors.password = 'Password is required';
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleChange = (e) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       [e.target.id]: e.target.value,
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (validate()) {
// //       // Submit to backend
// //       console.log('Login submitted:', formData);
// //     }
// //   };

// //   return (
// //     <div className="auth-page">
// //       <div className="auth-container">
// //         <h2>Login</h2>
// //         <form onSubmit={handleSubmit}>
// //           <label htmlFor="email">Email</label>
// //           <input
// //             type="email"
// //             id="email"
// //             placeholder="Enter your email"
// //             value={formData.email}
// //             onChange={handleChange}
// //           />
// //           {errors.email && <span className="error">{errors.email}</span>}

// //           <label htmlFor="password">Password</label>
// //           <input
// //             type="password"
// //             id="password"
// //             placeholder="Enter your password"
// //             value={formData.password}
// //             onChange={handleChange}
// //           />
// //           {errors.password && <span className="error">{errors.password}</span>}

// //           <button type="submit">Login</button>
// //           <p className="auth-switch">
// //             Don't have an account? <a href="/signup">Sign Up</a>
// //           </p>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useState } from 'react';
// import './auth.css';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Email is invalid';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.id]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (validate()) {
//       try {
//         const response = await fetch('http://localhost:5001/api/auth/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(formData)
//         });

//         const data = await response.json();

//         if (response.ok) {
//           alert('Login successful!');
//           console.log('User:', data.user);
//           // Optionally store token
//           // localStorage.setItem('token', data.token);
//         } else {
//           alert(data.message || 'Login failed');
//         }
//       } catch (error) {
//         console.error('Login error:', error);
//         alert('An error occurred while logging in');
//       }
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-container">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}

//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <span className="error" style={{ color: 'red' }}>{errors.password}</span>}

//           <button type="submit">Login</button>
//           <p className="auth-switch">
//             Don't have an account? <a href="/signup">Sign Up</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import './auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('http://localhost:5001/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
          // ✅ Save user and token to localStorage
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', data.token);

          alert('Login successful!');
          window.location.href = '/profile'; // redirect to profile
        } else {
          alert(data.message || 'Login failed');
        }
      } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred while logging in');
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error" style={{ color: 'red' }}>{errors.email}</span>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error" style={{ color: 'red' }}>{errors.password}</span>}

          <button type="submit">Login</button>
          <p className="auth-switch">
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
