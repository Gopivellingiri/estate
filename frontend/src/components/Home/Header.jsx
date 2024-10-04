import React, { useState } from "react";
import logo from "../../assets/main-logo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="sectionContainer">
      <div className="flex items-center justify-between py-5 font-semibold">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="hidden md:flex md:items-center md:space-x-4 text-sky-800">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-orange-500" : "text-gray-700"
            }
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-orange-500" : "text-gray-700"
            }
          >
            <span>About Us</span>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-orange-500" : "text-gray-700"
            }
          >
            <span>Contact</span>
          </NavLink>
          <NavLink
            to="/agent"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-orange-500" : "text-gray-700"
            }
          >
            <span>Agents</span>
          </NavLink>
        </div>

        <div className="hidden md:flex text-nowrap space-x-4">
          <Link to="/login" className=" primary">
            Log in
          </Link>
          <Link to="/register" className=" secondary">
            Sign up
          </Link>
        </div>

        <div
          className="block text-sky-800 text-xl md:hidden cursor-pointer"
          onClick={toggleMenu} // Toggle menu on click
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        {isMenuOpen && (
          <div className=" absolute text-left top-20 right-4 bg-white shadow-md md:hidden flex flex-col items-center space-y-2">
            <Link
              to="/login"
              className="px-4 py-2  text-sky-800 hover:bg-[#D0DADD] transition-colors duration-200 w-full"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="px-4 py-2  text-sky-800 hover:bg-[#D0DADD] transition-colors duration-200 w-full"
            >
              Sign up
            </Link>
            <Link
              to="/home"
              className="px-4 py-2  text-sky-800 hover:bg-[#D0DADD] transition-colors duration-200 w-full"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="px-4 py-2  text-sky-800 hover:bg-[#D0DADD] transition-colors duration-200 w-full"
            >
              About us
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2  text-sky-800 hover:bg-[#D0DADD] transition-colors duration-200 w-full"
            >
              Contact
            </Link>

            <Link
              to="/agent"
              className="px-4 py-2  text-sky-800 hover:bg-[#D0DADD] transition-colors duration-200 w-full"
            >
              Agents
            </Link>
            <Link
              to="/agent"
              className="px-4 py-2  text-sky-800 hover:bg-[#D0DADD] transition-colors duration-200 w-full"
            >
              Buy
            </Link>
            <Link
              to="/agent"
              className="px-4 py-2  text-sky-800 hover:bg-[#D0DADD] transition-colors duration-200 w-full"
            >
              Rent
            </Link>

            <Link
              to="/agent"
              className="px-4 py-2  text-sky-800 hover:bg-[#D0DADD] transition-colors duration-200 w-full"
            >
              Sale
            </Link>
          </div>
        )}
      </div>
      <hr className="border-[#D0DADD]" />
    </div>
  );
};

export default Header;
