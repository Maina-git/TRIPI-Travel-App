import React from 'react';
import SectionHeading from '@/components/helper/SectionHeading';
import DestinationSlider from './DestinationSlider';

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
<SectionHeading heading="Exploring Popular Destination"/>
   {/* section content */}
   <div className="mt-14 w-[80%] mx-auto">
    {/* slider */}
    <DestinationSlider/>
   </div>
    </div>
  );
}

export default Destination;
