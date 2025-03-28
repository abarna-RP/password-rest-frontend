import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className=" container justify-content-center mt-5">
        <div className='row justify-content-center'>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
          <Route path="/" element={<Login />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}



export default App;
