import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaHistory, FaChartLine, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
      isActive
        ? "bg-[#334e4e] text-white shadow-md"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="navbar bg-white border-b px-8 py-4 sticky top-0 z-50 flex flex-wrap justify-between items-center">
      <div className="flex-1">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="KeenKeeper" className="h-8 w-auto" />
        </Link>
      </div>

      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-[#334e4e] text-2xl"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} w-full md:flex md:w-auto md:flex-none`}>
        <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
          <li>
            <NavLink to="/" className={navLinkStyles} onClick={() => setIsOpen(false)}>
              <FaHome size={18} /> Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/timeline" className={navLinkStyles} onClick={() => setIsOpen(false)}>
              <FaHistory size={18} /> Timeline
            </NavLink>
          </li>

          <li>
            <NavLink to="/stats" className={navLinkStyles} onClick={() => setIsOpen(false)}>
              <FaChartLine size={18} /> Stats
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;