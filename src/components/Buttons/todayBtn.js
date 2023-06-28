import React from "react"

const ButtonToday = ({ label, disabled, icon }) => {
    const buttonClasses = `h-8 rounded-2xl bg-today text-dark text-sm font-semibold disabled:bg-light-gray px-3 py-1`;

    return (
        <button disabled={disabled} className={buttonClasses}>
            {label}
            {icon && <span>{icon}</span>}
        </button>
    )
}

export default ButtonToday