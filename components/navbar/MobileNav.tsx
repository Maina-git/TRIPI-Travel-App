import React from 'react';
import { NavLinks } from '../constants/constants';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';


interface Props{
  showNav:boolean;
  closeNav:()=>void;
}

const MobileNav = ({closeNav, showNav}:Props) => {

const navOpen = showNav   ? "translate-x-0":"translate-x-[-100%]"; 

  return (     
    <div> 
{/*  overlay */}
<div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-10 bg-black opacity-70  w-full h-screen`}></div>

{/* navlinks */}
<div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all
 duration-500 delay-300 w-[80%] bg-rose-800 space-y-6 z-100`}>
{
  NavLinks.map((link)=>(
    <Link key={link.id} href={link.url}>
      <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
        {link.label}
      </p>
    </Link>
  ))
}
{/* close buttons*/}

<CgClose onClick={closeNav} className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"/>

</div>
</div>
  );
}

export default MobileNav;
