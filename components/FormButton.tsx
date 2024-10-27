import React from 'react';

interface FormButtonProps {
    onClick: () => void;
    text: string;
}

const FormButton: React.FC<FormButtonProps> = ({ onClick, text }) => (
    <button
        type="button"
        onClick={onClick}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full mt-10"
    >
        {text}
    </button>
);

export default FormButton;
