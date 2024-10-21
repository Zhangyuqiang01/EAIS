"use client";
import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import Card from '@/components/Card';
import { card2Data } from '@/constants/constants';

const ServiceOverview = () => {
  return (
    <div>
      <div className='hero'>
        <div className=' padding-x ml-40 '>
          <div className='font-bold text-black-100 text-4xl mt-14'>
            Experience Excellence <section className='text-amber-400'>with EAIS</section>  AI-Driven 
            <section className='text-red-400'>Chatbot</section>
          </div>
          <div className='font-semibold text-black-100 text-2xl mt-10'>
          This is EAIS with an AI-driven solution designed <br />to revolutionize customer service and promotion <br />automation, aiming to make exceptional customer service.
          </div>
          <div className='mt-5'>
            <CustomButton
              title="Schedule a meeting"
              btnType="button"
              containerStyles="text-primary-green bg-white rounded-full min-w-[130px]"
            />
            <CustomButton
              title="Get a Demo"
              btnType="button"
              containerStyles="text-primary-green bg-white rounded-full min-w-[130px]"
            />
          </div>
        </div>
        <Image
          src="ReasoningEngine.svg"
          alt="ReasoningEngine"
          width={750}
          height={750}/>
      </div>
    <div className="flex flex-wrap justify-center gap-8 p-6 mt-10 mb-40">
      {card2Data.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          imageSrc={card.imageSrc}
          shape={'square'}
        />
      ))}
    </div>
    <div className='hero flex flex-col md:flex-row items-center justify-center mt-16 md:mt-0'>
      <div className='w-full flex-shrink-0 md:w-[800px] h-auto'>
        <Image
          src="Kristal.svg"
          alt="Kristal"
          width={800}
          height={800}
          className="object-cover"
          layout="responsive"/>
          
      </div>
     
      <div className='md:ml-8  text-center md:text-left'>
        <div className='font-bold text-black-100 text-4xl '>
          Transform Customer <br />Interactions with <br />Intelligent AI Solutions
        </div>
        <div className='mt-16 font-bold'>
          Elevate your customer service experience with our cutting-edge <br /> AI chatbots. Engage, assist, and delight your customers 24/7 with <br /> seamless integration and real-time support.
        </div>
      
      </div>
    </div>
  </div>
  )
}

export default ServiceOverview