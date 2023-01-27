import React, {useState} from 'react'

import {
  Link,
  animateScroll as scroll,
} from "react-scroll";

import {MenuIcon, XIcon} from '@heroicons/react/outline'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className="w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">HealthSystem</h1>
          <ul className="hidden md:flex">
            <li>
              <Link to="landing" smooth={true} offset={10} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-90} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} offset={-90} duration={500}>
                Services
              </Link>
            </li>
            <li>
              <Link to="contactus" smooth={true} offset={-90} duration={500}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            <a href="/login">Sign In</a>
          </button>
          <button className="px-8 py-3"><a href="/registration">Sign Up</a></button>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-200 w-full">Home</li>
        <li className="border-b-2 border-zinc-200 w-full">About</li>
        <li className="border-b-2 border-zinc-200 w-full">Services</li>
        <li className="border-b-2 border-zinc-200 w-full">Contact Us</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar