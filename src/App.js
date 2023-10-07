import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './App.css';

// components
import Login from './components/Login';
import Register from './components/Register';
import LandingPage from './components/LandingPage';
import JobDetailsPage from './components/JobDetailsPage';
import ApplyForm from './components/ApplyForm';
import SuccessPage from './components/SuccessPage';

function App() {

  const [user, setUser] = useState(null);
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  // console.log(isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {
          isLoggedIn && (
            <>
              <Route path='/landing' element={<LandingPage />} />
              <Route path='/job-details/:id' element={<JobDetailsPage />} />
              <Route path='/apply/:id' element={<ApplyForm />} />
              <Route path='/success' element={<SuccessPage />} />
            </>
          )
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
