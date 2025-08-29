"use client"
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {

const [isVisible, setIsVisible] = useState(false);

useEffect(()=>{
    const toggleVisibilty = () =>{
        if(window.scrollY > 300){
            setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
    };

window.addEventListener("scroll", toggleVisibilty);
return () => window.removeEventListener("scroll", toggleVisibilty);
}, []);

const scrolltoTop = () =>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      { isVisible && <button onClick={scrolltoTop} className="bg-rose-700 text-white rounded-full w-12 h-12 flex items-center 
      justify-center focus:outline-none cursor-pointer">
        <FaArrowUp/>
      </button> }
    </div>
  );
}

export default ScrollToTop;
