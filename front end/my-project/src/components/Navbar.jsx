import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Menu, X, Home, Info, Eye, GalleryHorizontal, Newspaper, Mail } from 'lucide-react';
import JoinModal from "./JoinModal"; // Import the new modal component

const Navbar = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to manage the visibility of the new Join modal
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  // Note: This useSelector assumes Redux is correctly set up in your application.
  // The state structure { isAuthenticated, role } is expected from your Redux store.
  const { isAuthenticated, role } = useSelector((state) => state.auth || {});

  // Function to toggle the mobile menu state
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to toggle the new Join modal state
  const toggleJoinModal = () => {
    setIsJoinModalOpen(!isJoinModalOpen);
  };

  return (
    <>
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo / Title */}
          <Link to="/" className="text-xl font-bold text-blue-700">
            <img src="https://b2world.in/assets/logo-C1MCNYRb.png" alt="Shri XYZ Logo" className="h-10" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-4 text-gray-700 text-sm md:text-base">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition"><Home size={16} /> Home</Link>
            <Link to="/about" className="flex items-center gap-1 hover:text-blue-700 transition"><Info size={16} /> About</Link>
            <Link to="/vision" className="flex items-center gap-1 hover:text-blue-700 transition"><Eye size={16} /> Vision</Link>
            <Link to="/gallery" className="flex items-center gap-1 hover:text-blue-700 transition"><GalleryHorizontal size={16} /> Gallery</Link>
            <Link to="/news" className="flex items-center gap-1 hover:text-blue-700 transition"><Newspaper size={16} /> News</Link>
            <Link to="/contact" className="flex items-center gap-1 hover:text-blue-700 transition"><Mail size={16} /> Contact</Link>

            <button
              onClick={toggleJoinModal}
              className="ml-4 px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-sm"
            >
              Join Us
            </button>

            {/* Show Create News if Admin Logged In */}
            {isAuthenticated && role === "admin" && (
              <Link
                to="/admin/news/create"
                className="ml-4 px-3 py-1 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition text-sm"
              >
                + Create News
              </Link>
            )}

            {/* Show Login Button if NOT Authenticated */}
            {!isAuthenticated && (
              <Link
                to="/admin/login"
                className="ml-4 px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition text-sm"
              >
                Admin Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-blue-700 transition focus:outline-none">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`md:hidden fixed inset-0 z-50 transition-all ease-in-out duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
          {/* Background overlay */}
          <div className={`absolute inset-0 bg-black transition-opacity ease-in-out duration-300 ${isMobileMenuOpen ? 'opacity-50' : 'opacity-0'}`} onClick={toggleMobileMenu}></div>

          {/* Menu container */}
          <div className={`absolute top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-xl flex flex-col justify-between p-6 transition-transform ease-in-out duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* Menu Header and Close Button */}
            <div className="flex items-center justify-between mb-8">
                <Link to="/" onClick={toggleMobileMenu}>
                  <img src="https://b2world.in/assets/logo-C1MCNYRb.png" alt="Shri XYZ Logo" className="h-10" />
              </Link>
              <button onClick={toggleMobileMenu} className="text-gray-700 hover:text-blue-700 transition focus:outline-none">
                <X size={24} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col space-y-6 text-xl text-gray-800 font-medium flex-grow">
              <Link to="/" onClick={toggleMobileMenu} className="flex items-center gap-2 hover:text-blue-700 transition"><Home size={20} /> Home</Link>
              <Link to="/about" onClick={toggleMobileMenu} className="flex items-center gap-2 hover:text-blue-700 transition"><Info size={20} /> About</Link>
              <Link to="/vision" onClick={toggleMobileMenu} className="flex items-center gap-2 hover:text-blue-700 transition"><Eye size={20} /> Vision</Link>
              <Link to="/gallery" onClick={toggleMobileMenu} className="flex items-center gap-2 hover:text-blue-700 transition"><GalleryHorizontal size={20} /> Gallery</Link>
              <Link to="/news" onClick={toggleMobileMenu} className="flex items-center gap-2 hover:text-blue-700 transition"><Newspaper size={20} /> News</Link>
              <Link to="/contact" onClick={toggleMobileMenu} className="flex items-center gap-2 hover:text-blue-700 transition"><Mail size={20} /> Contact</Link>

              {/* Show Create News if Admin Logged In */}
              {isAuthenticated && role === "admin" && (
                <Link
                  to="/admin/news/create"
                  onClick={toggleMobileMenu}
                  className="px-4 py-2 bg-blue-700 text-white text-center rounded-lg hover:bg-blue-800 transition"
                >
                  + Create News
                </Link>
              )}
            </div>

            {/* Admin Login and Join Us buttons at the bottom */}
            <div className="mt-8 space-y-4">
              <button
                onClick={() => {
                  toggleMobileMenu();
                  toggleJoinModal();
                }}
                className="block w-full text-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
              >
                Join Us
              </button>
              {!isAuthenticated && (
                <Link
                  to="/admin/login"
                  onClick={toggleMobileMenu}
                  className="block w-full text-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Admin Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Render the JoinModal when isJoinModalOpen is true */}
      {isJoinModalOpen && <JoinModal onClose={toggleJoinModal} />}
    </>
  );
};

export default Navbar;
