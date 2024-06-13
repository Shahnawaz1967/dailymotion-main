import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Herohome from './utils/Herohome';
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import FormHandler from './Formhandler';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer />
      <FormHandler />
      <Navbar />
      <Routes>
        <Route path="/" element={<Herohome />} />
        <Route path="/Herohome" element={<Herohome />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
