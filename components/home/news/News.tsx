import React from 'react';
import SectionHeading from '@/components/helper/SectionHeading';
import NewsCard from './NewsCard';
import { NewsData } from '@/components/constants/data/data';




const News = () => {
  return (
    <div className="pt-16 pb-16">
        {/** sectipn heading */}
      <SectionHeading heading="Exciting Travel News for You"/>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
      
        {
NewsData.map((news, i)=>(
    <NewsCard 
    key={news.id} 
    img={news.img}
    data-aos-delay={`${i * 100}`}
    title={news.title}
    date={news.date}
    />
))  
}      
      </div>

    </div>
  );
}

export default News;
