import React from 'react'
import Card from '@/components/Card';
import { cardData } from '@/constants/constants';

const InforCard = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-8 p-6 mt-10 mb-40">
        {cardData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
      <div className='text-center text-5xl font-black mt-10 mb-32'>
        We've helped <span className='text-EAIS-green'>350+</span> businesses <br /> save time, money and resources
      </div>
    </div>
    
  )
}

export default InforCard