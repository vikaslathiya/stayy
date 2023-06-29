import React from "react";

const ButtonPrimary = ({ label, disabled, icon, classes }) => {
    const buttonClasses = `${classes ? classes : ''} transition ease-in-out delay-75 active:-translate-y-1 active:scale-90 duration-300 disabled:transform-none disabled:transition-none justify-center h-12 rounded-3xl bg-gradient text-white shadow-lg font-semibold text-base disabled:shadow-none disabled:bg-none disabled:bg-light-gray ${!label && icon ? "p-3" : icon ? "w-auto flex justify-center items-center gap-3 px-6 py-3" : "w-44 px-6 py-3"}`;
    // button-pressable focus:outline-none py-[10px] px-3 rounded-xl bg-white hover:bg-gray-100 flex gap-3 items-center hidden xl:block
    return (
        <button disabled={disabled} className={buttonClasses}>
            {label}
            {icon && <span>{icon}</span>}
        </button>
    );
};

export default ButtonPrimary;