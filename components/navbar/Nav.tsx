"use client"
import React, { useEffect, useState } from 'react';
import { NavLinks } from '../constants/constants';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { MdTravelExplore } from 'react-icons/md';

interface Props{
  openNav:()=>void;
}


const Nav = ({openNav}:Props) => {

  const [navBg, setNavBg] = useState(false);

  useEffect(()=>{
    const handler = () =>{
       if(window.scrollY >= 90) setNavBg(true);
       if(window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return ()=> window.removeEventListener("scroll", handler);
  }, [])

  return (
    <div className={`${navBg ? "bg-blue-950 shadow-md" : "fixed"} transition-all duration-200 h-[12vh] z-100 fixed w-full`}>
    <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/*logo */}

        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
            <MdTravelExplore className="text-3xl font-bold"/>
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">Tripi</h1>
        </div>

{/* navlinks */}
    <div className="hidden  lg:flex items-center space-x-10">
{
  NavLinks.map((link)=>( 
    <Link href={link.url} key={link.id}>
      <p className="relative text-white text-base font-medium w-fit block after:block after:content-
      [''] after:absolute after:h-[3px] after:bg-yellow-300
       after:w-full after:scale-x-0  after:hover:scale-x-100
        after:transition duration-300 after:origin-right">{link.label}</p>
    </Link>
    ))
}
</div>

{/* buttons*/}
<div className="flex items-center space-x-4">
  <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200
  transition-all duration-200 rounded-lg">Book Now</button>
</div>

{/* burger menu */}
  <HiBars3BottomRight  onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden"/>
      </div>
    </div>
  );
}

export default Nav;










