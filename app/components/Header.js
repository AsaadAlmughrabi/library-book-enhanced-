"use client";

import React, { useContext } from 'react';  
import { ThemeContext } from '../context/theme';  

function Header() {
  const { isDarktheme, toggleThemeHandler } = useContext(ThemeContext); 

  return (
    <>
      <nav className="fixed top-0 z-20 w-full border-b border-gray-200 bg-slate-950 start-0 dark:border-gray-600">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://img.icons8.com/?size=100&id=r_5gXo27isnj&format=png&color=000000" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold text-white whitespace-nowrap">Library</span>
          </a>
          <div className="flex items-center space-x-3 rtl:space-x-reverse md:space-x-0 md:order-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input className="sr-only peer" type="checkbox" checked={isDarktheme} onChange={toggleThemeHandler} />
              <div
                className={`w-20 h-10 rounded-full ring-0 peer duration-500 outline-none overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:absolute before:h-10 before:w-10 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 
                ${isDarktheme ? "bg-[#383838] shadow-lg shadow-gray-700 after:content-['🌑'] after:bg-[#1d1d1d] after:right-1 after:opacity-100 after:rotate-180 after:translate-y-0 before:content-['☀️'] before:opacity-0 before:rotate-90 before:-translate-y-full" 
                              : "bg-gray-200 shadow-lg shadow-gray-400 after:content-['🌑'] after:bg-[#1d1d1d] after:right-1 after:translate-y-full after:opacity-0 before:content-['☀️'] before:opacity-100 before:rotate-0 before:translate-y-0"}`}
              ></div>
            </label>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 mt-4 font-medium rounded-lg md:p-0 bg-slate-950 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-slate-950 dark:border-gray-700">
              <li>
                <a href="/" className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="About_Us" className="block px-3 py-2 text-white text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 text-white text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="#" className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white hover:bg-gray-700 hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
  