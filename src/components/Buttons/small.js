import React from "react"

const ButtonSmall = ({ label, disabled, icon }) => {
    const buttonClasses = `h-8 rounded-2xl border border-1 border-solid border-light-gray bg-white text-dark text-sm font-semibold disabled:bg-light-gray ${!label && icon ? "p-1 border-0" : icon ? "flex justify-center items-center gap-2 px-3 py-1" : "px-3 py-1"}`;

    return (
        <button disabled={disabled} className={buttonClasses}>
            {label}
            {icon && <span>{icon}</span>}
        </button>
    )
}

export default ButtonSmall