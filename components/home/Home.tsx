"use client"
import React, { useEffect } from 'react';
import Hero from './hero/Hero';
import Destination from './destination/Destination';
import Hotel from './Hotel/Hotel';
import WhyChoose from './whyChoose/WhyChoose';
import Review from './reviews/Review';
import News from './news/News';
import NewsLetter from './newsletter/NewsLetter';
import AOS from "aos";

import "aos/dist/aos.css"

const Home = () => {

useEffect(() => {

const initAOS = async () => {
await import("aos");
AOS.init({
  duration:1000,
  easing:"ease",
  once:true,
  anchorPlacement:"top-bottom",
})
};
initAOS();
}, []);


  return (
    <div className="overflow-hidden ">
      <Hero/> 
      <Destination/>
      <Hotel/>
    <WhyChoose/>
    <Review/>
    <News/>
    <NewsLetter/>
    </div>
  );
}

export default Home;












