import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { Logout } from "../utils/utils";

function Sidebar() {
  const logout = () => {
    Logout();
  }

  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <NavLink to="/">
          <Navbar className="bg-black py-4">
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
            <div className="h-full flex items-center">Operasyonlar</div>
          </NavLink>
          <NavLink
            to="/organization"
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "text-gray-700"
            }
          >
            <div className="h-full flex items-center">Organizasyonlar</div>
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive ? "text-blue-700" : "text-gray-700"
            }
          >
            <div className="h-full flex items-center">Kullanıcılar</div>
          </NavLink>
          <div className="">
            <button
              onClick={Logout}
              type="button"
              className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-xs px-5 py-2 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Çıkış Yap
            </button>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Sidebar;
