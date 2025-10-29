import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const location = useLocation();

  useEffect(() => {
    setOpen(false); // zamyka menu przy każdej zmianie strony
  }, [location]);

  return (
    <nav className="bg-[#F7F7F7] py-2.5 menuDrop">
      <div className="flex flex-wrap items-center justify-between w-full px-[5%] lg:px-[10%] relative">

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 text-sm text-[#93041C] rounded-lg lg:hidden hover:bg-gray-200 active:bg-gray-300 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4A1 1 0 013 5zM3 10a1 1 0 011-1h12a1 1 0 110 2H4A1 1 0 013 10zM3 15a1 1 0 011-1h12a1 1 0 110 2H4A1 1 0 013 15z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-[#F7F7F7] shadow-md lg:static lg:block lg:w-auto lg:shadow-none z-50`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 mt-2 lg:mt-0 border-t lg:border-none border-gray-300 pl-[10%] lg:pl-0">
            
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-semibold block py-3 px-1 border-b lg:border-0 border-gray-200 hover:bg-gray-100 lg:hover:bg-transparent ${
                    isActive ? "text-[#93041C] nav-active bg-[#f1f1f1] lg:bg-transparent" : "text-black"
                  } hover:text-[#93041C] lg:py-2 transition-all duration-200`
                }
              >
                Strona główna
              </NavLink>
            </li>

            <li>
              <a
                href="https://uonetplus.vulcan.net.pl/warszawamokotow"
                className="font-semibold block py-3 px-1 border-b lg:border-0 border-gray-200 hover:bg-gray-100 lg:hover:bg-transparent text-black hover:text-[#93041C] lg:py-2 transition-all duration-200"
              >
                Dziennik
              </a>
            </li>

            <li>
              <NavLink
                to="/kontakt"
                className={({ isActive }) =>
                  `font-semibold block py-3 px-1 border-b lg:border-0 border-gray-200 hover:bg-gray-100 lg:hover:bg-transparent ${
                    isActive ? "text-[#93041C] nav-active bg-[#f1f1f1] lg:bg-transparent" : "text-black"
                  } hover:text-[#93041C] lg:py-2 transition-all duration-200`
                }
              >
                Kontakt
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/plan"
                className={({ isActive }) =>
                  `font-semibold block py-3 px-1 border-b lg:border-0 border-gray-200 hover:bg-gray-100 lg:hover:bg-transparent ${
                    isActive ? "text-[#93041C] nav-active bg-[#f1f1f1] lg:bg-transparent" : "text-black"
                  } hover:text-[#93041C] lg:py-2 transition-all duration-200`
                }
              >
                Plan lekcji
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/zastepstwa"
                className={({ isActive }) =>
                  `font-semibold block py-3 px-1 border-b lg:border-0 border-gray-200 hover:bg-gray-100 lg:hover:bg-transparent ${
                    isActive ? "text-[#93041C] nav-active bg-[#f1f1f1] lg:bg-transparent" : "text-black"
                  } hover:text-[#93041C] lg:py-2 transition-all duration-200`
                }
              >
                Zastępstwa
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dokumenty"
                className={({ isActive }) =>
                  `font-semibold block py-3 px-1 border-b lg:border-0 border-gray-200 hover:bg-gray-100 lg:hover:bg-transparent ${
                    isActive ? "text-[#93041C] nav-active bg-[#f1f1f1] lg:bg-transparent" : "text-black"
                  } hover:text-[#93041C] lg:py-2 transition-all duration-200`
                }
              >
                Dokumenty
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Ikony */}
        <div className="flex items-center">
          <a href="/" className="text-[#93041C] ml-4 text-xl hover:opacity-60 transition">
            <i className="fa-solid fa-right-to-bracket"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/Technikum.Mechatroniczne.nr.1"
            className="text-[#93041C] ml-4 text-xl hover:opacity-60 transition"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@wisniowa56official17"
            className="text-[#93041C] ml-4 text-xl hover:opacity-60 transition"
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/wisniowa56/"
            className="text-[#93041C] ml-4 text-xl hover:opacity-60 transition"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}
