import React from 'react';
import Link from 'next/link';
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa';



const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      gap-10">
       {/** first card */} 
         <div className="space-y-5">
            <h1 className="font-lg font-bold">Company</h1>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">About Us</p>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Careers</p>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Blogs</p>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Gift Cards</p>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Magazines</p>
         </div>

{/** second part */}
  <div className="space-y-5">
            <h1 className="font-lg font-bold">Support</h1>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Contact</p>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Legal Notice</p>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Privacy Policy</p>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Terns & Conditions</p>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Sitemap</p>
         </div>

{/** third part */}
<div className="space-y-5">
            <h1 className="font-lg font-bold">Other Services</h1>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Car Hire</p>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Activity Finder</p>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Tour List</p>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Flight Finder</p>
                <p className="text-fray-800 font-md cursor-pointer text-sm hover:text-blue-950">Travel Agents</p>
         </div>
{ /** Fourth part */}

<div>
    <h1>Contact Us</h1>

    <div className="mt-6">
        <h1 className="text-sm text-gray-600">Our Mobile Number</h1>
        <h1 className="mt-1 text-base font-bold text-blue-950">+254 793 720 578</h1>
        </div> 
           <div className="mt-6">
        <h1 className="text-sm text-gray-600">Our Email</h1>
        <h1 className="mt-1 text-base font-bold text-blue-950">tripi@gmail.com</h1>
        </div>
</div>

         </div>
         {/** bottom section */}
         <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center
          text-gray-600 text-sm">
            <p className="text-center md:text-left">Copyright &copy; 2025 code with Francis. All rights reserved </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span>Social:</span>
                 <Link href="#" className="text-gray-500 hover:text-gray-800"><FaFacebook/></Link>
                 <Link href="#" className="text-gray-500 hover:text-gray-800"><FaTwitter/></Link>
                 <Link href="#" className="text-gray-500 hover:text-gray-800"><FaDribbble/></Link>
                
            </div>
          </div>
      
      </div>
  );
}

export default Footer;
