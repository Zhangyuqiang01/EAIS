"use client";
import React, { useState } from 'react';
import StepOne from './stepOne';
import StepTwo from './stepTwo';
import StepThree from './stepThree';

const SignUpPage = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        workEmail: '',
        phoneNumber: '',
        businessType: '',
        brandName: '',
        verificationCode: '',
        password: '',
    });

    const nextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            {currentStep === 1 && <StepOne nextStep={nextStep} handleChange={handleChange} formData={formData} />}
            {currentStep === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />}
            {currentStep === 3 && <StepThree prevStep={prevStep} handleChange={handleChange} formData={formData} />}
        </div>
    );
};

export default SignUpPage;
