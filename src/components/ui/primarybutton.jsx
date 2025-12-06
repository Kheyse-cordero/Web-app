import React from 'react';

const PrimaryButton = ({ label, onClick, type = "primary" }) => {
  const baseStyle = "px-6 py-2.5 rounded-xl font-semibold transition-all duration-300";
  
  const typeStyles = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:scale-105",
    secondary: "bg-white text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-indigo-600"
  };

  return (
    <button 
      className={`${baseStyle} ${typeStyles[type]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
