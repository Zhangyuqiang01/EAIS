import React from 'react';

interface InputFieldProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = "text", value, onChange }) => (
    <div className="mt-5">
        <label>{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required
            placeholder={`Enter ${label}`}
            className="w-full p-2 border border-gray-300 rounded"
        />
    </div>
);

export default InputField;
