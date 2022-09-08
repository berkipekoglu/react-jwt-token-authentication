import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";

function Sidebar() {

  return (
    <Navbar fluid={true} rounded={true} className="">
      <NavLink to="/">
        <Navbar>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9 "
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-blue-600">
            TK Teknoloji
            <span className="block text-xs text-gray-700 font-bold">
              PDKS Entegrasyon Platformu
            </span>
          </span>
        </Navbar>
      </NavLink>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink
          to="/"
          className={({ isActive }) =>
          isActive ? "text-blue-700" : "text-gray-700"
        }
        >
          Operasyonlar
        </NavLink>
        <NavLink
          to="/organization"
          className={({ isActive }) =>
          isActive ? "text-blue-700" : "text-gray-700"
          }
        >
          Organizasyonlar
        </NavLink>
        <NavLink
          to="/test"
          className={({ isActive }) =>
          isActive ? "text-blue-700" : "text-gray-700"
          }
        >
          Kullanıcılar
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Sidebar;
