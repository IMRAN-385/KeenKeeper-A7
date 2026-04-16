import React, { useState } from 'react';
import logo from '../assets/B13-A7-keen-keeper/asset/logo.png';
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const activeStyle =
    "btn btn-success text-white flex items-center gap-2";
  const normalStyle =
    "btn flex items-center gap-2";

  return (
    <nav className="shadow px-6 md:px-10 py-3">
      <div className="flex justify-between items-center">

      
        <img src={logo} alt="logo" className="h-10" />

        
        <button
          className="md:hidden btn"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

    
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none p-4 md:p-0 flex flex-col md:flex-row gap-4 ${
            open ? "block" : "hidden md:flex"
          }`}
        >
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? activeStyle : normalStyle
            }
          >
            <IoHomeOutline />
            Home
          </NavLink>

          <NavLink
            to="/timeline"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? activeStyle : normalStyle
            }
          >
            <RiTimeLine />
            Timeline
          </NavLink>

          <NavLink
            to="/stats"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? activeStyle : normalStyle
            }
          >
            <ImStatsDots />
            Stats
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;