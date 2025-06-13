import React, { useState } from 'react';
import './auth.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};
    temp.name = formData.name ? '' : 'Full Name is required.';
    temp.email = /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Valid Email is required.';
    temp.password = formData.password.length >= 6 ? '' : 'Password must be at least 6 characters.';
    setErrors(temp);
    return Object.values(temp).every(x => x === '');
  };

  const handleChange = e => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('http://localhost:5001/api/auth/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            full_name: formData.name,
            email: formData.email,
            password: formData.password,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          alert('Signup successful!');
          setFormData({ name: '', email: '', password: '' });
        } else {
          alert(data.message || 'Signup failed');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while signing up');
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}

          <button type="submit">Create Account</button>
          <p className="auth-switch">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
