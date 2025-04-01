import React from 'react';
import { CiMenuFries } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <div>
        <h1 className='text-center flex justify-evenly text-xl sm:text-3xl font-bold py-6 md:py-4'>
          Shree Sheetalnath Homeo Clinic 
          <span className='flex md:hidden justify-end m-0'>
            <button className=''>
              <CiMenuFries />
            </button>
          </span>
        </h1>
      </div>
      <div>
        <nav>
          <ul className="flex-row hidden md:flex items-center text-center justify-center font-serif p-6">
            <li className='hover:text-gray-500  px-10 py-5'>
              <NavLink exact to="/Home">Home</NavLink>
            </li>
            <li className='hover:text-gray-500 px-10 cursor-pointer py-5'>
              <NavLink to="/home#why-homeopathy">Why Homeopathy?</NavLink>
            </li>
            <li className='hover:text-gray-500 px-10 py-5'>
              <NavLink to="/Services">Services</NavLink>
            </li>
            <li className='hover:text-gray-500 px-10 py-5'>
              <NavLink to="/blog">Blog</NavLink>
            </li>
            <li className='hover:text-gray-500 px-10 py-5'>
              <NavLink to="/essential-reading">Essential Reading</NavLink>
            </li>
            <li className='hover:text-gray-500 cursor-pointer px-10 py-5'>
              <NavLink to="/Home#contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
