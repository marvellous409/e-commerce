import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from "../assets/shoppincart.svg";
import Icons from "../assets/search.svg";
import Icon1 from "../assets/person.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-5 shadow-lg relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold">
            colo<span className="text-red-500">shop</span>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-lg">
            <Link to="/" className="hover:text-red-500">Home</Link>
            <a href="#" className="hover:text-red-500">About</a>
            <a href="#" className="hover:text-red-500">Services</a>
            <a href="#" className="hover:text-red-500">Contact</a>
          </div>

          {/* Icons + Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <img src={Icons} alt="Search" />
            <img src={Icon1} alt="Profile" />
            <img className="bg-[lightblue] rounded-full p-2" src={Icon} alt="Cart" />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div
            className="md:hidden absolute top-16 left-0 w-full bg-gray-100 p-4 rounded-lg 
            shadow-lg z-50"
          >
            <Link to="/" className="block py-2 hover:text-red-500">Home</Link>
            <a href="#" className="block py-2 hover:text-red-500">About</a>
            <a href="#" className="block py-2 hover:text-red-500">Services</a>
            <a href="#" className="block py-2 hover:text-red-500">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
