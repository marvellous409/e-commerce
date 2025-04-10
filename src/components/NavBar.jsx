import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useScroll from "./scroll/useScroll";
import Icon from "../assets/shoppincart.svg";
import Icons from "../assets/search.svg";
import Icon1 from "../assets/person.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScroll();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navbarStyle = isDesktop && scrollY > 30
    ? {
      backgroundColor: scrollY > 50 ? 'white' : 'transparent',
      // padding: scrollY > 50 ? '10px 20px' : '20px 40px',
      boxShadow: scrollY > 50 ? '0px 2px 10px rgba(0, 0, 0, 0.2)' : 'none',
      transition: 'all 0.9s ease-in-out',
      borderRadius: '0px 0px 100px 100px',
      }
    : {};

  return (
    <nav
      className="bg-white p-5 shadow-lg fixed top-0 w-full z-50"
      style={navbarStyle}
    >
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
            className="md:hidden absolute top-16 left-0 w-full bg-gray-100 p-4 rounded-lg shadow-lg z-50"
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
