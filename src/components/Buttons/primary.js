import React from "react";

const ButtonPrimary = ({ label }) => {
    return (
        <button className="w-44 h-12 px-6 py-3 rounded-3xl bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 text-white shadow-lg font-semibold text-base">
            {label}
        </button>
    );
};

export default ButtonPrimary;
