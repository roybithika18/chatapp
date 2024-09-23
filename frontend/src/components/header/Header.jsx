import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Info, Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="text-2xl font-bold hover:opacity-60">
                        CHAT<span className="text-purple-200">App</span>
                    </Link>
                    
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8">
                        
                        <NavItem to="/about" icon={<Info size={18} />} text="About" />
                    </ul>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleMenu} className="md:hidden">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <ul className="px-2 pt-2 pb-4 space-y-2">
                        
                        <MobileNavItem to="/about" icon={<Info size={18} />} text="About" onClick={toggleMenu} />
                    </ul>
                </div>
            )}
        </nav>
    );
};

const NavItem = ({ to, icon, text }) => (
    <li>
        <Link to={to} className="flex items-center hover:text-purple-200 transition-colors duration-200">
            {icon}
            <span className="ml-1">{text}</span>
        </Link>
    </li>
);

const MobileNavItem = ({ to, icon, text, onClick }) => (
    <li>
        <Link 
            to={to} 
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-purple-500 transition-colors duration-200"
            onClick={onClick}
        >
            <span className="flex items-center">
                {icon}
                <span className="ml-2">{text}</span>
            </span>
        </Link>
    </li>
);

export default Header;
