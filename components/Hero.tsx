"use client";
import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Hero = () => {
  const handleScroll = () => {
  
  };

  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero_title font-bold text-black-100'>
          Leading the Future with AI-Driven Solutions
        </h1>
        <p className='mt-10'>
          Need AI Automation? EAIS (Enterprise Artificial Intelligence Services) 
          specializes automation systems for online marketing, customer service, and data analysis.
        </p>
        <CustomButton 
          title="Get a Demo"
          containerStyles="bg-primary-green text-blue rounded-full mt-10 mr-8"  
          handleClick={() => handleScroll()}  
        />
        <CustomButton
          title="Schedule a meeting"
          btnType="button"
          containerStyles="text-primary-green bg-white rounded-full min-w-[130px]"
        />
      </div>
      <div className='hero_image-container'>
        <div className='hero_image'>
          <Image
            src='/Robot.svg'
            alt='Robot'
            width={750}
            height={750}
          />
        </div>
      </div>

      
    </div>
  );
};

export default Hero;
