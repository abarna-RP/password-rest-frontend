import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/login', { email, password });
      navigate('/');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Login failed');

    }
  };

  return (
    
      
        <div className=" container  border-success mt-5">
        <div className="row justify-content-center">
        <div className="col-md-6">
        <div className="card"> 
        <div className="card-body ">
        <h2 className="card-title text-center mb-4">Login</h2> 
        <form onSubmit={handleSubmit}>
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <Link to="/forgot-password">Forgot Password?</Link>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      </div>
      </div>
    </div>
    </div>
    </div>
    

  );
}

export default Login;