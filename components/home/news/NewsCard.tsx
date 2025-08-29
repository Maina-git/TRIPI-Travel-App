import React from 'react';
import Image from 'next/image';

interface Props{
    key:number
    img:string,
    title:string,
    date:string
}


const NewsCard = ({img, title, date}:Props) => {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="cursor-pointer">
    <div className="h-[300px]">
        <Image src={img} alt={title} width={300} height={300}
        className="w-full h-full object-cover rounded-lg"
        />
    </div>
    {/** text content */}
    <h1 className="mt-6 text-lg text-gray-950 font-semibold hover:text-blue-950 transition-all duration-200 cursor-pointer">{title}</h1>
<p className="text-sm text-gray-600 mt-3">{date}</p>
    </div>
  );
}

export default NewsCard;
