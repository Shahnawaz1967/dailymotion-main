import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
      {/* Container for footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img src="logodaily.png" alt="Dailymotion Logo" className="h-8 mb-4" />
          
          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-4 text-center">
            <a href="#" className="text-sm text-gray-600 hover:underline">About</a>
            <a href="#" className="text-sm text-gray-600 hover:underline">Press</a>
            <a href="#" className="text-sm text-gray-600 hover:underline">Blog</a>
            <a href="#" className="text-sm text-gray-600 hover:underline">Jobs</a>
            <a href="#" className="text-sm text-gray-600 hover:underline">Advertisers</a>
            <a href="#" className="text-sm text-gray-600 hover:underline">Dailymotion Pro</a>
            <a href="#" className="text-sm text-gray-600 hover:underline">Developers</a>
            <a href="#" className="text-sm text-gray-600 hover:underline">Help Center</a>
          </nav>
          
          {/* Policy and legal links */}
          <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-4 text-center text-gray-600">
            <a href="#" className="text-sm hover:underline">Privacy and Cookie Policy</a>
            <a href="#" className="text-sm hover:underline">Accessibility</a>
            <a href="#" className="text-sm hover:underline">Terms</a>
            <a href="#" className="text-sm hover:underline">Legal notices</a>
            <a href="#" className="text-sm hover:underline">Hide sensitive content: On</a>
            <a href="#" className="text-sm hover:underline">All videos</a>
            <a href="#" className="text-sm hover:underline">Location: India</a>
          </div>
          
          {/* Social media links */}
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com/Shahnawaz1967" className="text-gray-600 hover:text-gray-900">
              <FaGithub className="h-6 w-6" />
            </a>
            <a href="http://www.linkedin.com/in/md-shahnawaz-alam-87b38a232" className="text-gray-600 hover:text-gray-900">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="" className="text-gray-600 hover:text-gray-900">
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
          
          {/* Footer bottom text */}
          <div className="text-center text-gray-500 text-sm">
            © 2005 - 2024 Dailymotion - designed with ♥ By Shahnawaz
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
