import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const rolePrefix = user?.role?.toLowerCase();

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/");
  };

  return (
    <motion.nav
      className="fixed w-full top-0 z-50 glass-effect shadow-lg"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="text-gray-800 text-2xl font-bold">CertiSure</span>
        </Link>

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl font-medium transition ${isActive ? "bg-white text-purple-600 shadow-md" : "text-gray-700 hover:text-purple-600"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/help"
            className={({ isActive }) =>
              `px-4 py-2 rounded-xl font-medium transition ${isActive ? "bg-white text-purple-600 shadow-md" : "text-gray-700 hover:text-purple-600"}`
            }
          >
            Help
          </NavLink>

          {!user ? (
            <Link to="/login" className="btn-primary text-white px-6 py-2 rounded-xl font-medium">Login</Link>
          ) : (
            <div className="relative">
              <button
                onClick={() => setOpen((s) => !s)}
                className="flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-xl shadow-md border border-gray-200"
              >
                {user.name || "User"} ▾
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  <Link to={`/${rolePrefix}/dashboard`} onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-purple-50">Dashboard</Link>
                  <Link to={`/${rolePrefix}/profile`} onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-purple-50">Profile</Link>
                  <Link to={`/${rolePrefix}/history`} onClick={() => setOpen(false)} className="block px-4 py-3 text-gray-700 hover:bg-purple-50">History</Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}