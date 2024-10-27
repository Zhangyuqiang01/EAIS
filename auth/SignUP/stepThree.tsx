"use client";
import React, { useRef } from 'react';

interface StepThreeProps {
    prevStep: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    formData: {
        verificationCode: string;
    };
}

const StepThree: React.FC<StepThreeProps> = ({ prevStep, handleChange, formData }) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]); 
    const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e); 

        
        if (e.target.value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]?.focus();
        } 
        
        else if (!e.target.value && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
       
        if (e.key === 'Backspace' && inputRefs.current[index]?.value === '') {
           
            if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    return (
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm relative">
            <div className="absolute top-1 right-4 text-sm mt-5">
                Already have an account? 
                <a href="/auth/SignIn" className="text-blue-500 hover:underline"> Login</a>
            </div>
            <h2 className="text-xl font-semibold mb-4 mt-10">Welcome to Lionize</h2>
            <p>In order to verify your identity, please enter the code sent to {formData.verificationCode}.</p>
            <div className="flex space-x-2">
                {Array.from({ length: 6 }).map((_, index) => (
                    <input
                        key={index}
                        type="text"
                        name={`verificationCode[${index}]`}
                        maxLength={1}
                        onChange={(e) => handleInputChange(index, e)} 
                        onKeyDown={(e) => handleKeyDown(index, e)} 
                        ref={(el) => (inputRefs.current[index] = el)} 
                        className="w-12 h-12 border border-gray-300 rounded text-center"
                    />
                ))}
            </div>
            <div className='flex flex-col items-center mt-10'>
                <p className="text-blue-500 text-sm font-bold cursor-pointer hover:underline mb-8" onClick={() => console.log('Request a new code clicked')}>
                    Request a New Code
                </p>
                <div className='flex w-full'>
                <button 
                    type="button" 
                    onClick={prevStep} 
                    className="mr-2 w-1/2 bg-white text-black p-2 rounded border border-blue-700 hover:border-blue-950 text-blue-700"
                >
                    Go Back
                </button>
                    <button type="submit" className="w-1/2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Verify
                    </button>
                </div>
            </div>

        </form>
    );
};

export default StepThree;

