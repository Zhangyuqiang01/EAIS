import React from 'react';

interface CardProps {
  title: string;
  description?: string;
  imageSrc: string;
  shape?: 'square' | 'rectangle'; 
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, shape = 'rectangle' }) => {
  return (
    <div
      className={`rounded overflow-hidden shadow-lg bg-white
        ${shape === 'square' ? 'w-64 h-64' : 'max-w-sm'}  
      `}
    >
      <div className="flex items-center px-6 py-4">
        <img
          className={`object-cover className={object-cover ${shape === 'square' ? 'w-6 h-6' : 'w-10 h-10'}} `}
          src={imageSrc}
          alt="Card image"
        />
        <div className="ml-4 font-bold text-xl text-gray-800">{title}</div>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-600 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;


