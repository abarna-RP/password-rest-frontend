import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://password-reset-backend-2-7zf8.onrender.com/api/auth/forgot-password', { email });
      alert('Email sent with reset instructions.');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Failed to send email');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Send Reset Email</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
