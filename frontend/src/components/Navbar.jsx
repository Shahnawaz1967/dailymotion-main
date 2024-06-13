import React from 'react';
import { FaSearch, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchBar from '../features/SearchBar';

const Navbar = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-lg w-full">
      <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
        <Link to="/Herohome">
          <img
            src="logodaily.png"
            alt="Dailymotion Logo"
            className="h-8 mr-4 md:mr-8 lg:mr-32"
          />
        </Link>
       
        <SearchBar />
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/login">
          <button onClick={() =>('login')} className="flex items-center border border-gray-400 px-4 py-2 rounded">
            <FaSignInAlt className="mr-2 font-semibold" />
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button onClick={() => openForm('signup')} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
            Signup
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
