import React from 'react';
import Image from 'next/image';

interface Props{
    title:string,
    image:string
}

const WhyChooseCard = ({title, image}:Props) => {
  return (
    <div>
        {/** image */}
      <Image src={image} alt=""
       width={70} className="mx-auto" height={70}/>
       {/** content */}
       <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">{title}</h1>
       <p className="mt-2 text-center text-xs font-medium text-gray-70 0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
}

export default WhyChooseCard;
