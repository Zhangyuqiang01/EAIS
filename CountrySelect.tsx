import React, { useState, useEffect, useRef } from 'react';
import countries from './countries.json';

interface CountrySelectProps {
    onChange: (code: string) => void;
    defaultValue?: string; 
}

const CountrySelect: React.FC<CountrySelectProps> = ({ onChange, defaultValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState<{ code: string; flag: string } | null>(
        defaultValue ? countries.find(country => country.code === defaultValue) || countries[0] : countries[0]
    );
    const dropdownRef = useRef<HTMLDivElement>(null); 

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (country: { code: string; flag: string }) => {
        setSelectedCountry(country);
        onChange(country.code); 
        setIsOpen(false);
    };

    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-full" ref={dropdownRef}> 
            {/* click area*/}
            <div className="flex items-center border border-gray-300 rounded p-1 cursor-pointer w-20" onClick={toggleDropdown}>
                <img 
                    src={selectedCountry?.flag} 
                    alt={`${selectedCountry?.code} flag`} 
                    className="w-6 h-4 mr-0" 
                />
                <span>{selectedCountry ? selectedCountry.code : 'Select Country'}</span>
            </div>

            {/* toogle menu*/}
            {isOpen && (
                <ul className="absolute z-10 bg-white border border-gray-300 rounded shadow-lg mt-1 w-30 max-h-60 overflow-y-auto">
                    {countries.map((country) => (
                        <li
                            key={country.code}
                            onClick={() => handleSelect(country)}
                            className="flex items-center p-2 hover:bg-gray-200 cursor-pointer"
                        >
                            <img src={country.flag} alt={`${country.code} flag`} className="w-6 h-4 mr-2" />
                            <span className="text-gray-700">{country.code}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CountrySelect;


