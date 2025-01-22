import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50 lg:hidden">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          crypto
        </Link>
        <button
          className="block lg:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <ul
          className={`lg:flex lg:items-center lg:space-x-8 absolute lg:static bg-gray-800 p-4 lg:p-0 transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4"
          }`}
        >
          <li>
            <Link
              to="/"
              className="hover:text-gray-200 text-white transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-gray-200 text-white transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-gray-200 text-white transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
          {/* Add more nav items here */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;