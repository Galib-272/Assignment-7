import { NavLink, Link } from "react-router-dom";
import { FaHome, FaHistory, FaChartLine } from "react-icons/fa";
import logo from "../../assets/logo.png"; // Importing your logo asset

const Navbar = () => {
  const navLinkStyles = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
      isActive
        ? "bg-[#334e4e] text-white shadow-md"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="navbar bg-white border-b px-8 py-4 sticky top-0 z-50">
      <div className="flex-1">
        <Link to="/" className="flex items-center">
          {/* Only the logo is changed here */}
          <img src={logo} alt="KeenKeeper" className="h-8 w-auto" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="flex gap-4">
          <li>
            <NavLink to="/" className={navLinkStyles}>
              <FaHome size={18} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={navLinkStyles}>
              <FaHistory size={18} /> Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className={navLinkStyles}>
              <FaChartLine size={18} /> Stats
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;