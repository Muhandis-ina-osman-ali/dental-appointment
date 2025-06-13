import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
import Appointment from './pages/appointment';
import About from './pages/about';
import Contact from './pages/contact';
import BranchDetails from './pages/brnch-details';
import AdminLogin from './pages/admin-login';

import DashboardLayout from './pages/dashboard/DashboardLayout';
import DashboardOverview from './pages/dashboard/DashboardOverview';
import DashboardAppointments from './pages/dashboard/appointments';
import DashboardBranches from './pages/dashboard/branches';
import Profile from './pages/Profile';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
       <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/appointment" element={<Appointment />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/branch/:id" element={<BranchDetails />} />
  <Route path="/admin-login" element={<AdminLogin />} />
  <Route path="/profile" element={<Profile />} />

  {/* Admin dashboard routes */}
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route index element={<DashboardOverview />} />
    <Route path="appointments" element={<DashboardAppointments />} />
    <Route path="branches" element={<DashboardBranches />} />
  </Route>
</Routes>

      </div>
      <Footer />
    </Router>
  );
}

export default App;
