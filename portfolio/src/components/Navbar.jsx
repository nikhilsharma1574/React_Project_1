import React from 'react'
import { useState } from 'react'
import {close , logo ,menu} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, settoggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="Logo Here" className="w-[124px] h-[32px]"/>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10 ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px]' onClick={()=> settoggle(!toggle)}/>
      </div>


      <div className={`${toggle ? 'flex' :'hidden' } p-6 absolute top-20 right-0 min-w-[140px] rounded-xl bg-black-gradient sidebar mx-4 my-2`}>
        <ul>
        <ul className="list-none flex justify-end items-center flex-1 flex-col">
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer mb-4 text-[16px] text-white mr-10 ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar