"use client";
import React from 'react';
import { uniCard } from '@/constants/constants';
import Card from '@/components/Card';
import CustomButton from '@/components/CustomButton';
import { useRouter } from "next/navigation";
import Image from 'next/image';

const Capabilities = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("https://eaiservice.com/demo/");
  };

  return (
    <div>
      <div className='max-w-[1440px] mx-auto h-screen flex justify-center mt-40 flex-col'>
        <div className='text-center'>
          <header className='text-6xl font-bold'>Meet Our Team’s <br />Academic Excellence</header>
        </div>
        <div className='flex justify-right w-full mt-24'>
          <div className='w-1/2'>
            <section className='text-red-400 text-4xl font-bold'>
              Employees From UIUC:
            </section>
            <section className='font-bold text-2xl'>
              #5 in Computer Science <br />
              #6 in Artificial Intelligence <br />
              #4 in Mobile/Web Applications <br />
              #2 in Software Engineering <br />
            </section>
            <section>(U.S. News and World Report)</section>
            <section className='text-4xl text-orange-400 mt-24 font-bold'>
              Employees From Georgia Tech:
            </section>
            <section className='font-bold text-2xl'>
              #5 in Artificial Intelligence <br />
              #6 in Computer Systems <br />
              #2 in Cybersecurity <br />
              #6 in Data Analytics/Science <br />
            </section>
            <section>(U.S. News and World Report)</section>
          </div>
          <div className='flex-1 flex items-center justify-center'>
            <div className='flex flex-wrap  gap-8 grid-cols-1 w-full max-w-[500px]'>
              {uniCard.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  imageSrc={card.imageSrc}
                  className="flex items-center justify-center h-full"
                />
              ))}
            </div>
          </div>
        </div>
        <div className='text-center mt-56 font-bold text-black-100 text-5xl'>
          Automate your customer <br /> service with EAIS
        </div>
        
      </div>
      <div className='flex justify-center'>
        <CustomButton
          title="Get a Demo"
          btnType="button"
          containerStyles="bg-EAIS-green rounded-none min-w-[130px] text-white mr-10 mt-20"
        />
      </div>
      <div>
        <section className='font-bold text-black-100 text-5xl text-center justify-center mt-32 '>
          2,000+
        </section>
        <section className='font-bold text-black-100 text-2xl text-center justify-center mt-5'>
          tasks automated
        </section>
        <section className='font-bold text-black-100 text-5xl text-center justify-center '>
          Discover the potential of AI- <br />powered customer service
        </section>
        <div className='flex justify-center mt-10'>
            <CustomButton
              title="Get a Demo"
              btnType="button"
              containerStyles="bg-EAIS-green rounded-none min-w-[130px] text-white mr-10 mt-20"
            />
            <CustomButton
              title="Schedule a meeting"
              btnType="button"
              containerStyles="bg-white rounded-none min-w-[130px] text-EAIS-green mr-10 mt-20 border border-EAIS-green"
            />
        </div>
        <section className='font-bold text-center mt-24 text-3xl'>
            EAIS trusted and sponsored <br /> by Nvidia & Google Cloud
        </section>
        <section className='items-center flex  md:justify-center flex-row'>
          <img src="GoogleCloud.svg" alt="GoogleCloud" width={750} height={750}/>
          <img src="GoogleCloud.svg" alt="GoogleCloud" width={750} height={750}/>
        </section>
      </div>
    </div>
  );
};


export default Capabilities;