"use client";
import React from 'react';
import InputField from '@/components/InputField';
import FormButton from '@/components/FormButton';


interface StepOneProps {
    nextStep: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    formData: {
        fullName: string;
        workEmail: string;
        password: string; 
    };
}

const StepOne: React.FC<StepOneProps> = ({ nextStep, handleChange, formData }) => (
    <div className="relative">
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mt-1">
            <div className="absolute top-1 right-4 text-sm mt-5">
                Already have an account?
                <a href="/auth/SignIn" className="text-blue-500 hover:underline"> Login</a>
            </div>
            <h2 className="text-xl font-bold mb-4 mt-10">Welcome to Lionize</h2>
            <p>Let's get started. Together we'll find your ideal influencer partnerships</p>
            <InputField label="Full Name" name="fullName" value={formData.fullName} onChange={handleChange} />
            <InputField label="Work Email Address" name="workEmail" type="email" value={formData.workEmail} onChange={handleChange} />
            <InputField label="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
            <FormButton onClick={nextStep} text="Create Account" />
            <p className="text-gray-500 text-xs mt-4">
                By signing up, you agree to the
                <a href="/terms" className="text-blue-500 hover:underline"> Terms of Service </a>
                and
                <a href="/privacy" className="text-blue-500 hover:underline"> Privacy Policy</a>
            </p>
        </form>
    </div>
);

export default StepOne;


