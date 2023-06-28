import React from "react";

const ButtonPrimary = ({ label, disabled, icon }) => {
    const buttonClasses = `h-12 rounded-3xl bg-gradient text-white shadow-lg font-semibold text-base disabled:shadow-none disabled:bg-none disabled:bg-light-gray ${!label && icon ? "p-3" : icon ? "w-auto flex justify-center items-center gap-3 px-6 py-3" : "w-44 px-6 py-3"}`;

    return (
        <button disabled={disabled} className={buttonClasses}>
            {label}
            {icon && <span>{icon}</span>}
        </button>
    );
};

export default ButtonPrimary;