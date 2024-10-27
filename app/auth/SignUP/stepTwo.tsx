import React, { useState, useEffect } from 'react';
import InputField from '@/components/InputField'; 
import CountrySelect from '@/components/CountrySelect'; 

interface StepTwoProps {
    nextStep: () => void;
    prevStep: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    formData: {
        phoneNumber: string;
        businessType: string; 
        brandName: string;
    };
}

const StepTwo: React.FC<StepTwoProps> = ({ nextStep, prevStep, handleChange, formData }) => {
    const [selectedCountryCode, setSelectedCountryCode] = useState<string>('+1');

    const handleCountryChange = (code: string) => {
        setSelectedCountryCode(code);
        handleChange({
            target: {
                name: 'phoneNumber',
                value: code + ' ' + formData.phoneNumber.replace(/^\+\d+\s/, ''),
            }
        });
    };

    const businessTypes = [
        { value: 'retail', label: 'Retail' },
        { value: 'service', label: 'Service' },
        { value: 'manufacturing', label: 'Manufacturing' },
    ];

    useEffect(() => {
        handleChange({
            target: {
                name: 'phoneNumber',
                value: selectedCountryCode + ' ' + formData.phoneNumber.replace(/^\+\d+\s/, ''),
            }
        });
    }, []); 

    return (
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm relative">
            <div className="absolute top-1 right-4 text-sm mt-5">
                Already have an account? 
                <a href="/auth/SignIn" className="text-blue-500 hover:underline"> Login</a>
            </div>
            <h2 className="text-xl font-semibold mb-4 mt-14">Welcome to Lionize</h2>
            <p className='mt-6 mb-8'>Tell us a little bit more about you.</p>

            <div className="relative flex items-center gap-0">
                <CountrySelect onChange={handleCountryChange} defaultValue={selectedCountryCode} />
                <input
                    type="tel"
                    value={formData.phoneNumber.replace(/^\+\d+\s/, '')} 
                    onChange={handleChange}
                    name="phoneNumber"
                    className="border border-gray-300 rounded p-2 flex-grow ml-[-2px]" 
                    placeholder="Phone Number"
                />
            </div>

            <div className="mt-4">
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                <select
                    name="businessType"
                    value={formData.businessType || ''} 
                    onChange={handleChange}
                    className="border border-gray-300 rounded p-2 w-full"
                >
                    <option value="" disabled hidden>Select</option>  
                    {businessTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                            {type.label}
                        </option>
                    ))}
                </select>
            </div>

            <InputField
                label="Brand Name"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                placeholder="Brand Name"    
            />

            <div className='flex mt-4'>
                <button 
                    type="button" 
                    onClick={prevStep} 
                    className="mr-2 w-1/2 bg-white text-black p-2 rounded border border-blue-700 hover:border-blue-950 text-blue-700"
                >
                    Go Back
                </button>
                <button 
                    type="button" 
                    onClick={nextStep} 
                    className="w-1/2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
                >
                    Get Started
                </button>
            </div>
        </form>
    );
};

export default StepTwo;
