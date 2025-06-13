import React, { useState } from 'react';

const AppointmentForm = ({ branchId }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: ''
  });

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Appointment booked at branch ${branchId} for ${formData.name}`);
    // TODO: Send this to backend API
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input type="text" name="name" placeholder="Your Name" className="border w-full p-2 rounded" onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone Number" className="border w-full p-2 rounded" onChange={handleChange} required />
      <input type="text" name="service" placeholder="Service" className="border w-full p-2 rounded" onChange={handleChange} required />
      <input type="date" name="date" className="border w-full p-2 rounded" onChange={handleChange} required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Book Appointment</button>
    </form>
  );
};

export default AppointmentForm;
