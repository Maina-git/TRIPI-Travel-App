import React from 'react';
import { FaCalendar, FaCalendarWeek, FaMap } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';

const SearchBox = () => {
  return (
    <div className="bg-white mx-auto  rounded-lg  p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
    items-center justify-center gap-8 mt-4 sm:mt-12 w-80% sm:2-80%">
      {/* search input */}
      <div className="flex items-center space-x-6">
        <FaMap className="w-6 h-6 text-blue-600 text "/>
        <div >
          <p className="text-lg font-medium mb-[0.2rem]">Location</p>
          <input type="text" className="outline-none border-none placeholder:text-gray-800" placeholder='Where are you going' />
        </div>
      </div>

      {/** 2nd search box */}
<div className="flex items-center space-x-6">
  <FaCalendarWeek className="w-6 h-6 text-blue-600"/>
   <div>
      <p className="text-lg font-medium mb-[0.2rem]">Start Date</p>
      <input type="date" className="outline-none border-none" placeholder='Where are you going' />
    </div>
</div>

{/** 3rd search box */}
<div className="flex items-center space-x-6">
  <FaCalendarWeek className="w-6 h-6 text-blue-600"/>
   <div>
      <p className="text-lg font-medium mb-[0.2rem]">End Date</p>
      <input type="date" className="outline-none border-none" placeholder='Where are you going' />
    </div>
</div>

{/** btn search input */}
<div className="flex items-center space-x-6">
  <FaUserGroup className="w-6 h-6 text-blue-600"/>
  <div>
    <p className="text-lg font-medium mb-[0.2rem]">Guest</p>
    <p className="text-base font-normal">1 Guest 1 Room</p>
  </div>
</div>

    </div>
  );
}

export default SearchBox;
