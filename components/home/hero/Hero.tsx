import React from "react";
import SearchBox from "@/components/helper/SearchBox";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[120vh] sm:h-[100vh] flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/images/winter-4727668_1280.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div data-aos="fade-up" className="z-20 text-center">
        <h1 className="text-[25px] md:text-[25px] lg:text-[35px] tracking-[0.7rem] text-white font-extrabold uppercase drop-shadow-lg">
          Let's Enjoy The Nature
        </h1>
        <p className="md:text-base text-center text-lg text-white font-medium [word-spacing:5px] drop-shadow-md">
          Get the best prices on 2,000,000+ properties, worldwide
        </p>
      </div>

      {/* Search Box */}
      <div className="z-20 w-full flex justify-center">
        <SearchBox />
      </div>

      {/* Search Button */}
      <Link
        href=""
        className="z-20 rounded mx-auto px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group 
        bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 
        text-white font-bold hover:ring-2 hover:ring-offset-2 hover:ring-red-400 
        transition-all ease-out duration-300 shadow-lg">
        <span
          className="absolute right-0 w-8 h-12 transition-all duration-1000 transform
        translate-x-12 bg-white opacity-10 rotate-12 group-hover:translate-x-40 ease"></span>
        <span className="relative">Search</span>
      </Link>
    </div>
  );
};

export default Hero;






