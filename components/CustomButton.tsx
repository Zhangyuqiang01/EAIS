"use client";
import { CustomButtonProps } from '@/types';
import React from 'react';
import '../app/globals.css';

const CustomButton = ({
  title,
  containerStyles,
  textStyles, 
  handleClick,
  isDisabled = false,
  btnType = "button", 
}: CustomButtonProps) => {
  return (
    <button
      disabled={isDisabled} 
      type={btnType}
      className={`custom-btn ${containerStyles}`}  
      onClick={handleClick} 
    >
      <span className={`flex-1 ${textStyles}`}> 
        {title}  
      </span>
    </button>
  );
}

export default CustomButton;

