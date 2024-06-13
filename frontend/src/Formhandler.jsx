import React, { useState } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';

const FormHandler = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState('');

  const openForm = (type) => {
    setFormType(type);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setFormType('');
  };

  return (
    <div className={`relative ${showForm ? 'overflow-hidden' : ''}`}>
      {children && React.cloneElement(children, { openForm })}
      <div className={`transition-all duration-300 ${showForm ? 'blur-md' : ''}`}>
        {children}
      </div>
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md shadow-md">
            {formType === 'login' && <Login closeForm={closeForm} />}
            {formType === 'signup' && <Signup closeForm={closeForm} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormHandler;
